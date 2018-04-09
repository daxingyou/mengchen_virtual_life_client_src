var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var CardInfoView = /** @class */ (function (_super) {
        __extends(CardInfoView, _super);
        function CardInfoView() {
            var _this = _super.call(this) || this;
            _this.stockData = null;
            _this.btn_checkout.clickHandler = new Handler(_this, _this.onCheckout);
            _this.btn_head.clickHandler = new Handler(_this, _this.onHead);
            _this.btn_share.clickHandler = new Handler(_this, _this.onShare);
            _this.btn_buy.clickHandler = new Handler(_this, _this.onBuy);
            _this.btn_sell.clickHandler = new Handler(_this, _this.onSell);
            _this.sld_num.changeHandler = new Handler(_this, _this.onNumSliderChanged);
            _this.list_history.renderHandler = new Handler(_this, _this.onListRender);
            var stockIdx = Stocks.currentSelected;
            Stocks.currentSelected = null;
            if (Stocks.data.length > stockIdx) {
                _this.stockData = Stocks.data[stockIdx.valueOf()];
                NetHelper.getInstance().httpGetStockTicker(_this.stockData["stock_code"], _this, _this.onTickerRecived);
                NetHelper.getInstance().httpGetOrderDepth(_this.stockData["stock_code"], _this, _this.onDepthRecived);
                NetHelper.getInstance().httpGetOrderHis(_this.stockData["stock_code"], _this, _this.onHistoryRecived);
                NetHelper.getInstance().httpGetKline(_this.stockData["stock_code"], _this, _this.onKlineRecived);
            }
            _this.refreshInfo();
            return _this;
        }
        CardInfoView.prototype.onKlineRecived = function (data) {
            console.log(data);
            var jsonData = JSON.parse(data);
            if (jsonData != null) {
                var chartHight = 206;
                var offset_x = -2;
                var offset_y = -3;
                var space_x = 480 / 4;
                var points = [];
                var highest = Number.MIN_VALUE;
                var lowest = 0;
                for (var index = 0; index < jsonData.length; index++) {
                    var element = Number(jsonData[index]);
                    if (element > highest)
                        highest = element;
                }
                //创建k线图点
                for (var i = 0; i < jsonData.length; i++) {
                    var value = Number(jsonData[i]);
                    var point_x = i * space_x + offset_x;
                    var point_y = chartHight - (chartHight / (highest * 2) * value);
                    points.push(point_x);
                    points.push(point_y);
                }
                points.push(480 + offset_x);
                points.push(chartHight + offset_y);
                points.push(offset_x);
                points.push(chartHight + offset_y);
                if (this.spr_kline != null) {
                    this.spr_kline.graphics.clear();
                    this.spr_kline.graphics.drawPoly(2, 1, points, "#095d5d", "#19bcbc", 1);
                }
                //获取当前日期
                var nowDate = new Date();
                var tmpDate = new Date();
                var dayTime = 24 * 60 * 60 * 1000;
                for (var j = 5; j > 0; j--) {
                    var tmpLabel = this.img_kLines.getChildByName("time" + j);
                    if (tmpLabel != null) {
                        tmpDate.setTime(nowDate.getTime() - ((5 - j) * dayTime));
                        tmpLabel.changeText(tmpDate.toLocaleDateString());
                    }
                }
            }
        };
        CardInfoView.prototype.onDepthRecived = function (data) {
            var jsonData = JSON.parse(data);
            if (jsonData != null) {
                var sellData = jsonData["sell"];
                var buyData = jsonData["buy"];
                if (sellData != null) {
                    for (var index = 0; index < sellData.length; index++) {
                        var element = sellData[index];
                        var sellBox = this.bx_depth.getChildByName("s" + (index + 1));
                        if (sellBox != null) {
                            var priceText = sellBox.getChildByName("price");
                            var countText = sellBox.getChildByName("count");
                            if (priceText != null)
                                priceText.text = Number(element[0]).toFixed(2);
                            if (countText != null)
                                countText.text = Number(element[1]).toFixed(0);
                        }
                    }
                }
                if (buyData != null) {
                    for (var index = 0; index < buyData.length; index++) {
                        var element = buyData[index];
                        var buyBox = this.bx_depth.getChildByName("b" + (index + 1));
                        if (buyBox != null) {
                            var priceText = buyBox.getChildByName("price");
                            var countText = buyBox.getChildByName("count");
                            if (priceText != null)
                                priceText.text = Number(element[0]).toFixed(2);
                            if (countText != null)
                                countText.text = Number(element[1]).toFixed(0);
                        }
                    }
                }
            }
        };
        CardInfoView.prototype.onTickerRecived = function (data) {
            var jsonData = JSON.parse(data);
            if (jsonData != null) {
                this.txt_price.text = Number(jsonData["price"]).toFixed(2);
                this.ti_price.text = this.txt_price.text;
            }
        };
        CardInfoView.prototype.onHistoryRecived = function (data) {
            var jsonData = JSON.parse(data);
            if (jsonData != null) {
                this.list_history.array = jsonData;
            }
        };
        CardInfoView.prototype.onOrderComplete = function (data) {
            var jsonData = JSON.parse(data);
            if (jsonData != null) {
                if (jsonData.hasOwnProperty("code")) {
                    if (jsonData["code"] >= 0) {
                        alert(jsonData["error"]);
                    }
                    else {
                        alert(jsonData["message"]);
                    }
                }
            }
        };
        CardInfoView.prototype.onListRender = function (cell, index) {
            if (index > this.list_history.array.length)
                return;
            var data = this.list_history.array[index];
            var time = cell.getChildByName("his_time");
            var price = cell.getChildByName("his_unitprice");
            var count = cell.getChildByName("his_num");
            var totalPrice = cell.getChildByName("his_price");
            if (null != time)
                time.text = data["created_at"];
            if (null != price)
                price.text = Number(data["price"]).toFixed(2);
            if (null != count)
                count.text = Number(data["shares"]).toFixed(0);
            if (null != totalPrice)
                totalPrice.text = (Number(data["price"]) * Number(data["shares"])).toFixed(2);
        };
        CardInfoView.prototype.onNumSliderChanged = function (value) {
            // if(value >= 0 ){
            //     this.txt_action.text = "购入：";
            //     this.txt_actionprice.text = "买入总价";
            // }else{
            //     this.txt_action.text = "卖出：";
            //     this.txt_actionprice.text = "卖出总价";
            // }
            // this.txt_buynum.text = value.toString();
            // this.txt_totalbuyprice.text = (Math.abs(parseInt(value.toString())) * Number(this.txt_price.text)).toString();
        };
        CardInfoView.prototype.onCheckout = function () {
            console.log("on checkout clicked!");
        };
        CardInfoView.prototype.onHead = function () {
            console.log("on head clicked!");
        };
        CardInfoView.prototype.onShare = function () {
            console.log("on share clicked!");
        };
        CardInfoView.prototype.onBuy = function () {
            console.log("on buy clicked!");
            var params = "direction=buy&stock_code=" + this.txt_number.text + "&price=" + this.ti_price.text + "&shares=" + this.ti_count.text;
            NetHelper.getInstance().httpPlaceOrder(params, this, this.onOrderComplete);
        };
        CardInfoView.prototype.onSell = function () {
            console.log("on sell clicked!");
            var params = "direction=sell&stock_code=" + this.txt_number.text + "&price=" + this.ti_price.text + "&shares=" + this.ti_count.text;
            NetHelper.getInstance().httpPlaceOrder(params, this, this.onOrderComplete);
        };
        CardInfoView.prototype.refreshInfo = function () {
            // this.txt_highprice
            var tmp = UserInfo.UserInfoPriceData;
            for (var _i = 0, tmp_1 = tmp; _i < tmp_1.length; _i++) {
                var value = tmp_1[_i];
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
        };
        return CardInfoView;
    }(ui.CardInfoViewUI));
    view.CardInfoView = CardInfoView;
})(view || (view = {}));
//# sourceMappingURL=CardInfoView.js.map