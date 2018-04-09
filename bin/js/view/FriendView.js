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
    var FriendView = /** @class */ (function (_super) {
        __extends(FriendView, _super);
        function FriendView() {
            var _this = _super.call(this) || this;
            _this.list_friends.vScrollBarSkin = "";
            _this.list_friends.renderHandler = new Handler(_this, _this.onListRender);
            // this.list_rank.selectHandler = new Handler(this, this.onListCellSelected);
            var tmp = [{ price: UserInfo.TotalPoints, name: UserInfo.UserName, rank: 1 }];
            for (var index = 0; index < 20; index++) {
                var element = { price: 200 - index, name: "Test" + index, rank: index + 1 };
                tmp.push(element);
            }
            _this.list_friends.array = tmp;
            _this.refreshUserInfo();
            return _this;
        }
        FriendView.prototype.onListCellSelected = function (index) {
            // Stocks.currentSelected = index;
            // Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.CARDINFO);
        };
        FriendView.prototype.onListRender = function (cell, index) {
            if (index > this.list_friends.array.length)
                return;
            var data = this.list_friends.array[index];
            var head = cell.getChildByName("head");
            var rank = cell.getChildByName("rank");
            var name = cell.getChildByName("name");
            var price = cell.getChildByName("price");
            if (null != head)
                head.skin = "app/head.jpg";
            if (null != rank)
                rank.text = data["rank"];
            if (null != name)
                name.text = data["name"];
            if (null != price)
                price.text = Number(data["price"]).toFixed(2) + "身价";
        };
        FriendView.prototype.refreshUserInfo = function () {
            this.btn_head.skin = UserInfo.UserHead;
            this.txt_name.text = UserInfo.UserName;
            this.txt_price.text = UserInfo.TotalPoints.toFixed(2) + "身价";
            this.txt_rank.text = "1";
        };
        return FriendView;
    }(ui.FriendViewUI));
    view.FriendView = FriendView;
})(view || (view = {}));
//# sourceMappingURL=FriendView.js.map