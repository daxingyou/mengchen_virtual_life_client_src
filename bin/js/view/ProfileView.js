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
    var ProfileView = /** @class */ (function (_super) {
        __extends(ProfileView, _super);
        function ProfileView() {
            var _this = _super.call(this) || this;
            _this.list_data.selectHandler = new Handler(_this, _this.onListCellSelected);
            _this.list_data.renderHandler = new Handler(_this, _this.onListRender);
            //Buttons
            _this.btn_edit.clickHandler = new Handler(_this, _this.onEditButtonClicked);
            _this.btn_head.clickHandler = new Handler(_this, _this.onHeadClicked);
            _this.btn_publish.clickHandler = new Handler(_this, _this.onPublishClicked);
            _this.refreshUserInfo();
            return _this;
        }
        ProfileView.prototype.onEditButtonClicked = function () {
            console.log("on edit button clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW, ConstViews.INFOEDIT);
        };
        ProfileView.prototype.onHeadClicked = function () {
            console.log("on head button clicked");
        };
        ProfileView.prototype.onPublishClicked = function () {
            console.log("on publish button clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW, ConstViews.PUBLISH);
        };
        ProfileView.prototype.onListCellSelected = function (index) {
            Stocks.currentSelected = index;
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW, ConstViews.CARDINFO);
        };
        ProfileView.prototype.onListRender = function (cell, index) {
            if (index > UserInfo.UserInfoPriceData.length)
                return;
            var data = UserInfo.UserInfoPriceData[index];
            var username = cell.getChildByName("username");
            var userid = cell.getChildByName("stockid");
            var price = cell.getChildByName("price");
            var diff = cell.getChildByName("diff");
            if (null != username)
                username.text = data["holder_id"];
            if (null != userid)
                userid.text = data["stock_code"];
            if (null != price)
                price.text = Number(data["last_price"]).toFixed(2);
            if (null != diff) {
                var rate = Number(data["changing_rate"]) * 100;
                var tmp = rate.toFixed(2);
                diff.color = rate >= 0 ? "#FF0000" : "#00FF00";
                diff.text = tmp + "%";
            }
        };
        ProfileView.prototype.refreshUserInfo = function () {
            //对list复制数据源，会马上调用一次renderhandler
            this.list_data.array = UserInfo.UserInfoPriceData;
            //Txts
            this.txt_username.text = UserInfo.UserName;
            this.txt_usersex.text = UserInfo.UserSex;
            this.txt_userjob.text = UserInfo.Career;
        };
        return ProfileView;
    }(ui.ProfileViewUI));
    view.ProfileView = ProfileView;
})(view || (view = {}));
//# sourceMappingURL=ProfileView.js.map