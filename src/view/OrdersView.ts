/**Created by the LayaAirIDE*/
module view{
	import Text = Laya.Text;
	import Button = Laya.Button;

	export class OrdersView extends ui.OrdersViewUI{
		constructor(){
			super();

			this.list_orders.renderHandler = new Handler(this, this.onListRender);

			this.tab_order.selectHandler = new Handler(this, this.onTabChanged);

			this.tab_order.selectedIndex = 0;
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

			var btn_del:Button = <Button>cell.getChildByName("delete");
			if(btn_del != null){
				if(this.tab_order.selectedIndex == 0){
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