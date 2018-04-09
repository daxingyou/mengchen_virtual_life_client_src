module view{
    import Text = Laya.Text;
    import Button = Laya.Button;

    export class WalletView extends ui.WalletViewUI{

        private lastCell:laya.ui.Box = null;

        constructor(){
            super();

			this.list_orders.renderHandler = new Handler(this, this.onListRender);

			this.tab_orders.selectHandler = new Handler(this, this.onTabChanged);

			this.tab_orders.selectedIndex = 0;
			this.onTabChanged(0);            
        }

		onOrdersYetRecieved(data:any){
			console.log("get orders !");
			var jsonData = JSON.parse(data);
			if(jsonData != null) UserInfo.UserOrdersYet = jsonData;

			this.list_orders.array = UserInfo.UserOrdersYet;
		}

		onOrdersDoneRecieved(data:any){
			console.log("get orders !");
			var jsonData = JSON.parse(data);
			if(jsonData != null) UserInfo.UserOrdersDone = jsonData;

			this.list_orders.array = UserInfo.UserOrdersDone;
		}

		private onTabChanged(index:number) {
            if(this.lastCell != null){
                Laya.Tween.to(this.lastCell,{x:0,y:this.lastCell.y},100);
                this.lastCell = null;                
            }
			if(index == 0){
				NetHelper.getInstance().httpGetOrdersYet(this, this.onOrdersYetRecieved);
			}else if(index == 1){
				NetHelper.getInstance().httpGetOrdersDone(this, this.onOrdersDoneRecieved);
			}
		}		

		private onListRender(cell:laya.ui.Box,index:number){
			if(index > this.list_orders.array.length) return;

			var data:any = this.list_orders.array[index];

			var code:Text = <Text>cell.getChildByName("code");
			var action:Text = <Text>cell.getChildByName("action");
			var price:Text = <Text>cell.getChildByName("price");
			var count:Text = <Text>cell.getChildByName("count");

			if(null != code) code.text = data["stock_code"];
			if(null != action) action.text = data["direction"];
			if(null != count) count.text = Number(data["shares"]).toFixed(0);
			if(null != price) price.text = (Number(data["price"]) * Number(data["shares"])).toFixed(2);

            cell.pos(0,cell.y);
            if(this.tab_orders.selectedIndex == 0){
                cell.on(Laya.Event.MOUSE_DOWN,this,(e: Event)=>{
                    if(this.lastCell != null && this.lastCell != cell){
                        Laya.Tween.to(this.lastCell,{x:0,y:this.lastCell.y},100);
                        this.lastCell = null;
                    }
                    var tmpX = Laya.stage.mouseX;
                    var originX = cell.x;
                    var bMove = false;
                    cell.on(Laya.Event.MOUSE_MOVE,this,(e: Event)=>{
                        if(originX > -100 && Laya.stage.mouseX < tmpX){
                            bMove = true;
                            this.lastCell = cell;
                            //left slide
                            cell.pos(originX + (Laya.stage.mouseX - tmpX),cell.y);
                        }
                    });
                    cell.on(Laya.Event.MOUSE_UP,this,(e: Event)=>{
                        cell.offAll(Laya.Event.MOUSE_MOVE);
                        cell.offAll(Laya.Event.MOUSE_UP);
                        cell.offAll(Laya.Event.MOUSE_OUT);
                        if(bMove){
                            Laya.Tween.to(cell,{x:-100,y:cell.y},100);
                        }
                    });
                    cell.on(Laya.Event.MOUSE_OUT,this,(e: Event)=>{
                        cell.offAll(Laya.Event.MOUSE_MOVE);
                        cell.offAll(Laya.Event.MOUSE_UP);
                        cell.offAll(Laya.Event.MOUSE_OUT);
                        if(bMove){
                            Laya.Tween.to(cell,{x:-100,y:cell.y},100);
                        }
                    });                    
                });
            }else{
                if(cell.hasListener(Laya.Event.MOUSE_DOWN)){
                    cell.offAll(Laya.Event.MOUSE_DOWN);
                }
            }
			var btn_del:Button = <Button>cell.getChildByName("delete");
			if(btn_del != null){
				if(this.tab_orders.selectedIndex == 0){
					btn_del.visible = true;
					btn_del.clickHandler = new Handler(this,this.onDeleteButtonClicked,[index]);
				}else{
					btn_del.visible = false;
				}
			}
		} 

		private onDeleteButtonClicked(index:number){
			console.log("delete button clicked index : %d",index);
			
			if(UserInfo.UserOrdersYet.length > index){
				var data = UserInfo.UserOrdersYet[index];
				var orderid = Number(data["id"]);
				if(orderid != null && orderid > 0){
					NetHelper.getInstance().httpCancelOrder(orderid,this,this.onCancelOrder);
				}
			}
		}

		private onCancelOrder(data:any) {
			var jsonData:Object = JSON.parse(data);
			if(jsonData != null){
				if(jsonData.hasOwnProperty("code")){
					if(jsonData["code"] >= 0){
						alert(jsonData["error"]);
					}else{
						alert(jsonData["message"]);
						NetHelper.getInstance().httpGetOrdersYet(this, this.onOrdersYetRecieved);
					}
				}
			}
		}	                       
    }
}