/**Created by the LayaAirIDE*/
module view{
    import Text = Laya.Text;
    import Box = Laya.Box;
    import Graphics = laya.display.Graphics;

	export class CardInfoView extends ui.CardInfoViewUI{
        private stockData:any = null;

		constructor(){
			super();

            this.btn_checkout.clickHandler = new Handler(this, this.onCheckout);
            this.btn_head.clickHandler = new Handler(this, this.onHead);
            this.btn_share.clickHandler = new Handler(this, this.onShare);
            this.btn_buy.clickHandler = new Handler(this, this.onBuy);
            this.btn_sell.clickHandler = new Handler(this, this.onSell);

            this.sld_num.changeHandler = new Handler(this, this.onNumSliderChanged);

            this.list_history.renderHandler = new Handler(this, this.onListRender);            

            var stockIdx = Stocks.currentSelected;
            Stocks.currentSelected = null;

            if(Stocks.data.length > stockIdx){
                this.stockData = Stocks.data[stockIdx.valueOf()];
                NetHelper.getInstance().httpGetStockTicker(this.stockData["stock_code"],this,this.onTickerRecived);
                NetHelper.getInstance().httpGetOrderDepth(this.stockData["stock_code"],this,this.onDepthRecived);
                NetHelper.getInstance().httpGetOrderHis(this.stockData["stock_code"],this,this.onHistoryRecived);
            }

            this.refreshInfo();
        }

        onDepthRecived(data:any){
            var jsonData = JSON.parse(data);
            if(jsonData != null){
                var sellData = jsonData["sell"];
                var buyData = jsonData["buy"];
                if(sellData != null){
                    for (var index = 0; index < sellData.length; index++) {
                        var element = sellData[index];
                        var sellBox:Box = <Box>this.bx_depth.getChildByName("s"+(index+1));
                        if(sellBox != null){
                            var priceText:Text = <Text>sellBox.getChildByName("price");
                            var countText:Text = <Text>sellBox.getChildByName("count");
                            if(priceText != null) priceText.text = Number(element[0]).toFixed(2);
                            if(countText != null) countText.text = Number(element[1]).toFixed(0);
                        }
                    }
                }
                if(buyData != null){
                    for (var index = 0; index < buyData.length; index++) {
                        var element = buyData[index];
                        var buyBox:Box = <Box>this.bx_depth.getChildByName("b"+(index+1));
                        if(buyBox != null){
                            var priceText:Text = <Text>buyBox.getChildByName("price");
                            var countText:Text = <Text>buyBox.getChildByName("count");
                            if(priceText != null) priceText.text = Number(element[0]).toFixed(2);
                            if(countText != null) countText.text = Number(element[1]).toFixed(0);
                        }
                    } 
                }               
            }
        }

        onTickerRecived(data:any){
            var jsonData = JSON.parse(data);
            if(jsonData != null){
                this.txt_price.text = Number(jsonData["price"]).toFixed(2);

                this.ti_price.text = this.txt_price.text;
            }
        }

        onHistoryRecived(data:any){
            var jsonData = JSON.parse(data);
            if(jsonData != null){
                this.list_history.array = jsonData;
                var sp = new Laya.Sprite();
                this.img_kLines.addChild(sp);
                sp.graphics.drawLines(0,0,[5,100,55,120,105,180,155,115,205,100,255,110,305,130,355,150,405,160,455,180],"#ff0000",2);
            }
        }

        onOrderComplete(data:any){
            var jsonData:Object = JSON.parse(data);
            if(jsonData != null){
                if( jsonData.hasOwnProperty("code")){
                    if(jsonData["code"] >= 0){
                        alert(jsonData["error"]);
                    }else{
                        alert(jsonData["message"]);
                    }
                }
            }
        }

        private onListRender(cell:laya.ui.Box,index:number){
            if(index > this.list_history.array.length) return;

            var data:any = this.list_history.array[index];

            var time:Text = <Text>cell.getChildByName("his_time");
            var price:Text = <Text>cell.getChildByName("his_unitprice");
            var count:Text = <Text>cell.getChildByName("his_num");
            var totalPrice:Text = <Text>cell.getChildByName("his_price");

            if(null != time) time.text = data["created_at"];
            if(null != price) price.text = Number(data["price"]).toFixed(2);
            if(null != count) count.text = Number(data["shares"]).toFixed(0);
            if(null != totalPrice) totalPrice.text = (Number(data["price"]) * Number(data["shares"])).toFixed(2);
        }               

        private onNumSliderChanged(value:Number){
            // if(value >= 0 ){
            //     this.txt_action.text = "购入：";
            //     this.txt_actionprice.text = "买入总价";
            // }else{
            //     this.txt_action.text = "卖出：";
            //     this.txt_actionprice.text = "卖出总价";
            // }
            // this.txt_buynum.text = value.toString();

            // this.txt_totalbuyprice.text = (Math.abs(parseInt(value.toString())) * Number(this.txt_price.text)).toString();
        }

        private onCheckout() {
            console.log("on checkout clicked!");
        }

        private onHead() {
            console.log("on head clicked!");
        }

        private onShare() {
            console.log("on share clicked!");
        }

        private onBuy(){
            console.log("on buy clicked!");

            var params = "direction=buy&stock_code="+this.txt_number.text+"&price="+this.ti_price.text+"&shares="+this.ti_count.text;
            NetHelper.getInstance().httpPlaceOrder(params,this,this.onOrderComplete);
        }

        private onSell(){
            console.log("on sell clicked!");
            var params = "direction=sell&stock_code="+this.txt_number.text+"&price="+this.ti_price.text+"&shares="+this.ti_count.text;
            NetHelper.getInstance().httpPlaceOrder(params,this,this.onOrderComplete);            
        }

        public refreshInfo(){
            // this.txt_highprice
            var tmp = UserInfo.UserInfoPriceData;
            for (var value of tmp) {
                if (value["stock_code"] == this.stockData["stock_code"]) {
                    this.txt_holdnum.text = Number(value["available_shares"]).toFixed(0);
                    break;
                }
            }
            // this.txt_job
            // this.txt_lowprice
            this.txt_number.text = this.stockData["stock_code"];
            // this.txt_price
            // this.txt_timeleft
            this.txt_username.text = this.stockData["owner"]["nickname"];
        }
    }
}