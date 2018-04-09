/**Created by the LayaAirIDE*/
module view{
    import Text = Laya.Text;
    import Box = Laya.Box;
    import Graphics = laya.display.Graphics;
    import Label = Laya.Label;

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
                NetHelper.getInstance().httpGetKline(this.stockData["stock_code"],this,this.onKlineRecived);
            }

            this.refreshInfo();
        }

        onKlineRecived(data:any){
            console.log(data);
            var jsonData = JSON.parse(data);
            if(jsonData != null){
                var chartHight = 206;
                var offset_x = -2;
                var offset_y = -3;
                var space_x = 480 / 4;

                var points:Array<Number> = [];
                var highest = Number.MIN_VALUE;
                var lowest = 0;
                for (var index = 0; index < jsonData.length; index++) {
                    var element = Number(jsonData[index]);
                    if(element > highest) highest = element;
                }

                //创建k线图点
                for (var i = 0; i < jsonData.length; i++) {
                    var value = Number(jsonData[i]);
                    let point_x = i*space_x+offset_x;
                    let point_y = chartHight - (chartHight / (highest*2) * value);
                    points.push(point_x);
                    points.push(point_y);
                }
                points.push(480+offset_x);
                points.push(chartHight+offset_y);
                points.push(offset_x);
                points.push(chartHight+offset_y);
                if(this.spr_kline != null){
                    this.spr_kline.graphics.clear();
                    this.spr_kline.graphics.drawPoly(2,1,points,"#095d5d","#19bcbc",1);
                }

                //获取当前日期
                var nowDate = new Date();
                var tmpDate = new Date();
                var dayTime = 24*60*60*1000;
                for (var j = 5; j > 0; j--) {
                    let tmpLabel:Label = <Label>this.img_kLines.getChildByName("time"+j);
                    if(tmpLabel != null){
                        tmpDate.setTime(nowDate.getTime()-((5-j)*dayTime));
                        tmpLabel.changeText(tmpDate.toLocaleDateString());
                    }
                }
            }
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

                this.txt_highprice.changeText(jsonData["highest_price"]);
                this.txt_lowprice.changeText(jsonData["lowest_price"]);
            }
        }

        onHistoryRecived(data:any){
            var jsonData = JSON.parse(data);
            if(jsonData != null){
                this.list_history.array = jsonData;
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