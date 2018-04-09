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
/**
* name
*/
var view;
(function (view) {
    var InfoEditView = /** @class */ (function (_super) {
        __extends(InfoEditView, _super);
        function InfoEditView() {
            var _this = _super.call(this) || this;
            _this.btn_save.clickHandler = new Handler(_this, _this.onSaveClicked);
            _this.refreshUserInfo();
            return _this;
        }
        InfoEditView.prototype.onEditCallback = function (data) {
            var jsonData = JSON.parse(data);
            alert(jsonData.message);
            NetHelper.getInstance().httpGetUserInfo(this, function (data) {
                UserInfo.setUserInfo(data);
            });
        };
        InfoEditView.prototype.refreshUserInfo = function () {
            this.ti_nickname.text = UserInfo.UserName;
            this.rg_sex.selectedIndex = UserInfo.UserName == "女" ? 0 : 1;
            this.ti_job.text = UserInfo.Career;
        };
        InfoEditView.prototype.onSaveClicked = function () {
            var nickname = this.ti_nickname.text;
            var sex = this.rg_sex.selectedIndex;
            var job = this.ti_job.text;
            var params = "nickname=" + nickname + "&gender=" + sex + "&profession=" + job;
            NetHelper.getInstance().httpEditUserInfo(params, this, this.onEditCallback);
        };
        return InfoEditView;
    }(ui.InfoEditViewUI));
    view.InfoEditView = InfoEditView;
})(view || (view = {}));
//# sourceMappingURL=InfoEditView.js.map