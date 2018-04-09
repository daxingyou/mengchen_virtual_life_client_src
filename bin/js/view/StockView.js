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
    var StockView = /** @class */ (function (_super) {
        __extends(StockView, _super);
        function StockView() {
            var _this = _super.call(this) || this;
            _this.btn_friend.clickHandler = new Handler(_this, _this.onFriendClicked);
            _this.btn_rank.clickHandler = new Handler(_this, _this.onRankClicked);
            _this.list_stock.selectHandler = new Handler(_this, _this.onListCellSelected);
            _this.list_stock.renderHandler = new Handler(_this, _this.onListRender);
            _this.list_stock.vScrollBarSkin = "";
            _this.refreshStocksList();
            return _this;
        }
        StockView.prototype.onFriendClicked = function () {
            console.log("on friend clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW, ConstViews.FRIEND);
        };
        StockView.prototype.onRankClicked = function () {
            console.log("on rank clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW, ConstViews.RANK);
        };
        StockView.prototype.onListCellSelected = function (index) {
            Stocks.currentSelected = index;
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW, ConstViews.CARDINFO);
        };
        StockView.prototype.onListRender = function (cell, index) {
            if (index > Stocks.data.length)
                return;
            var data = Stocks.data[index];
            var username = cell.getChildByName("username");
            var userid = cell.getChildByName("stockid");
            var price = cell.getChildByName("price");
            var diff = cell.getChildByName("diff");
            var totalPrice = cell.getChildByName("total_price");
            if (null != username)
                username.text = data["owner"]["nickname"];
            if (null != userid)
                userid.text = data["stock_code"];
            if (null != price)
                price.text = Number(data["last_price"]).toFixed(2);
            if (null != totalPrice)
                totalPrice.text = Number(data["owner"]["rong_yao_points"]).toFixed(2);
            if (null != diff) {
                var rate = Number(data["changing_rate"]) * 100;
                var tmp = rate.toFixed(2);
                diff.color = rate >= 0 ? "#FF0000" : "#00FF00";
                diff.text = tmp + "%";
            }
        };
        StockView.prototype.refreshStocksList = function () {
            this.list_stock.array = Stocks.data;
        };
        return StockView;
    }(ui.StockViewUI));
    view.StockView = StockView;
})(view || (view = {}));
//# sourceMappingURL=StockView.js.map