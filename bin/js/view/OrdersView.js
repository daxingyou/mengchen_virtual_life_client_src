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
    var OrdersView = /** @class */ (function (_super) {
        __extends(OrdersView, _super);
        function OrdersView() {
            var _this = _super.call(this) || this;
            _this.list_orders.renderHandler = new Handler(_this, _this.onListRender);
            _this.tab_order.selectHandler = new Handler(_this, _this.onTabChanged);
            _this.tab_order.selectedIndex = 0;
            _this.onTabChanged(0);
            return _this;
        }
        OrdersView.prototype.onOrdersYetRecieved = function (data) {
            console.log("get orders !");
            var jsonData = JSON.parse(data);
            if (jsonData != null)
                UserInfo.UserOrdersYet = jsonData;
            this.list_orders.array = UserInfo.UserOrdersYet;
        };
        OrdersView.prototype.onOrdersDoneRecieved = function (data) {
            console.log("get orders !");
            var jsonData = JSON.parse(data);
            if (jsonData != null)
                UserInfo.UserOrdersDone = jsonData;
            this.list_orders.array = UserInfo.UserOrdersDone;
        };
        OrdersView.prototype.onTabChanged = function (index) {
            if (index == 0) {
                NetHelper.getInstance().httpGetOrdersYet(this, this.onOrdersYetRecieved);
            }
            else if (index == 1) {
                NetHelper.getInstance().httpGetOrdersDone(this, this.onOrdersDoneRecieved);
            }
        };
        OrdersView.prototype.onListRender = function (cell, index) {
            if (index > this.list_orders.array.length)
                return;
            var data = this.list_orders.array[index];
            var code = cell.getChildByName("code");
            var action = cell.getChildByName("action");
            var price = cell.getChildByName("price");
            var count = cell.getChildByName("count");
            if (null != code)
                code.text = data["stock_code"];
            if (null != action)
                action.text = data["direction"];
            if (null != count)
                count.text = Number(data["shares"]).toFixed(0);
            if (null != price)
                price.text = (Number(data["price"]) * Number(data["shares"])).toFixed(2);
            var btn_del = cell.getChildByName("delete");
            if (btn_del != null) {
                if (this.tab_order.selectedIndex == 0) {
                    btn_del.visible = true;
                    btn_del.clickHandler = new Handler(this, this.onDeleteButtonClicked, [index]);
                }
                else {
                    btn_del.visible = false;
                }
            }
        };
        OrdersView.prototype.onDeleteButtonClicked = function (index) {
            console.log("delete button clicked index : %d", index);
            if (UserInfo.UserOrdersYet.length > index) {
                var data = UserInfo.UserOrdersYet[index];
                var orderid = Number(data["id"]);
                if (orderid != null && orderid > 0) {
                    NetHelper.getInstance().httpCancelOrder(orderid, this, this.onCancelOrder);
                }
            }
        };
        OrdersView.prototype.onCancelOrder = function (data) {
            var jsonData = JSON.parse(data);
            if (jsonData != null) {
                if (jsonData.hasOwnProperty("code")) {
                    if (jsonData["code"] >= 0) {
                        alert(jsonData["error"]);
                    }
                    else {
                        alert(jsonData["message"]);
                        NetHelper.getInstance().httpGetOrdersYet(this, this.onOrdersYetRecieved);
                    }
                }
            }
        };
        return OrdersView;
    }(ui.OrdersViewUI));
    view.OrdersView = OrdersView;
})(view || (view = {}));
//# sourceMappingURL=OrdersView.js.map