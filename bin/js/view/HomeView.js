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
    var HomeView = /** @class */ (function (_super) {
        __extends(HomeView, _super);
        function HomeView() {
            var _this = _super.call(this) || this;
            _this.btn_stocks.clickHandler = new Handler(_this, _this.onStocksClicked);
            _this.btn_trades.clickHandler = new Handler(_this, _this.onTradesClicked);
            _this.btn_pet.clickHandler = new Handler(_this, _this.onPetClicked);
            return _this;
        }
        HomeView.prototype.onStocksClicked = function () {
            // request for stocks
            NetHelper.getInstance().httpGetStockTrend(this, this.onGetStocks);
        };
        HomeView.prototype.onGetStocks = function (data) {
            Stocks.setStocksData(data);
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW, ConstViews.STOCK);
        };
        HomeView.prototype.onTradesClicked = function () {
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW, ConstViews.WALLET);
        };
        HomeView.prototype.onPetClicked = function () {
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW, ConstViews.PET);
        };
        return HomeView;
    }(ui.HomeViewUI));
    view.HomeView = HomeView;
})(view || (view = {}));
//# sourceMappingURL=HomeView.js.map