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
    var LoginView = /** @class */ (function (_super) {
        __extends(LoginView, _super);
        function LoginView() {
            var _this = _super.call(this) || this;
            _this.btn_start.clickHandler = new Handler(_this, _this.onClicked);
            return _this;
        }
        LoginView.prototype.onClicked = function () {
            console.log("LoginView start Button click. request login");
            NetHelper.getInstance().httpGetUserInfo(this, this.onGetUserInfo);
            // //tmp
            // this.onLoginSuccessed();
        };
        LoginView.prototype.onGetUserInfo = function (data) {
            UserInfo.setUserInfo(data);
            this.onLoginSuccessed();
        };
        LoginView.prototype.onLoginSuccessed = function () {
            console.log("LoginView login successed!");
            Dispatcher.getInstance().send(ConstEvent.REPLACE_VIEW, ConstViews.HOME);
        };
        return LoginView;
    }(ui.LoginViewUI));
    view.LoginView = LoginView;
})(view || (view = {}));
//# sourceMappingURL=LoginView.js.map