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
/**Created by the HoJanHoi*/
var view;
(function (view) {
    var LoadingView = /** @class */ (function (_super) {
        __extends(LoadingView, _super);
        function LoadingView() {
            var _this = _super.call(this) || this;
            _this.showLoading();
            Laya.timer.once(2000, _this, _this.timerTest);
            return _this;
        }
        /**
         * showLoading
         */
        LoadingView.prototype.showLoading = function () {
            if (this.visible != true) {
                this.visible = true;
            }
            if (this.ani1 != null) {
                this.ani1.play();
            }
        };
        /**
         * hideLoading
         */
        LoadingView.prototype.hideLoading = function () {
            this.visible = false;
            this.ani1.stop();
        };
        LoadingView.prototype.timerTest = function () {
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW, ConstViews.WELCOME);
        };
        return LoadingView;
    }(ui.LoadingViewUI));
    view.LoadingView = LoadingView;
})(view || (view = {}));
//# sourceMappingURL=LoadingView.js.map