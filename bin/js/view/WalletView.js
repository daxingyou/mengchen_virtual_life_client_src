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
var view;
(function (view) {
    var WalletView = /** @class */ (function (_super) {
        __extends(WalletView, _super);
        function WalletView() {
            var _this = _super.call(this) || this;
            _this.lastCell = null;
            _this.txt_hold.text = UserInfo.UserInfoPriceData.length.toString();
            _this.txt_totalValue.text = UserInfo.TotalPoints.toFixed(2);
            _this.list_orders.renderHandler = new Handler(_this, _this.onListRender);
            _this.list_orders.vScrollBarSkin = "";
            _this.tab_orders.selectHandler = new Handler(_this, _this.onTabChanged);
            _this.tab_orders.selectedIndex = 0;
            _this.onTabChanged(0);
            return _this;
        }
        WalletView.prototype.onOrdersYetRecieved = function (data) {
            console.log("get orders !");
            var jsonData = JSON.parse(data);
            if (jsonData != null)
                UserInfo.UserOrdersYet = jsonData;
            this.list_orders.array = UserInfo.UserOrdersYet;
        };
        WalletView.prototype.onOrdersDoneRecieved = function (data) {
            console.log("get orders !");
            var jsonData = JSON.parse(data);
            if (jsonData != null)
                UserInfo.UserOrdersDone = jsonData;
            this.list_orders.array = UserInfo.UserOrdersDone;
        };
        WalletView.prototype.onTabChanged = function (index) {
            if (this.lastCell != null) {
                Laya.Tween.to(this.lastCell, { x: 0, y: this.lastCell.y }, 100);
                this.lastCell = null;
            }
            if (index == 0) {
                NetHelper.getInstance().httpGetOrdersYet(this, this.onOrdersYetRecieved);
            }
            else if (index == 1) {
                NetHelper.getInstance().httpGetOrdersDone(this, this.onOrdersDoneRecieved);
            }
        };
        WalletView.prototype.onListRender = function (cell, index) {
            var _this = this;
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
            cell.pos(0, cell.y);
            if (this.tab_orders.selectedIndex == 0) {
                cell.on(Laya.Event.MOUSE_DOWN, this, function (e) {
                    if (_this.lastCell != null && _this.lastCell != cell) {
                        Laya.Tween.to(_this.lastCell, { x: 0, y: _this.lastCell.y }, 100);
                        _this.lastCell = null;
                    }
                    var tmpX = Laya.stage.mouseX;
                    var originX = cell.x;
                    var bMove = false;
                    cell.on(Laya.Event.MOUSE_MOVE, _this, function (e) {
                        if (originX > -100 && Laya.stage.mouseX < tmpX) {
                            bMove = true;
                            _this.lastCell = cell;
                            //left slide
                            cell.pos(originX + (Laya.stage.mouseX - tmpX), cell.y);
                        }
                    });
                    cell.on(Laya.Event.MOUSE_UP, _this, function (e) {
                        cell.offAll(Laya.Event.MOUSE_MOVE);
                        cell.offAll(Laya.Event.MOUSE_UP);
                        cell.offAll(Laya.Event.MOUSE_OUT);
                        if (bMove) {
                            Laya.Tween.to(cell, { x: -100, y: cell.y }, 100);
                        }
                    });
                    cell.on(Laya.Event.MOUSE_OUT, _this, function (e) {
                        cell.offAll(Laya.Event.MOUSE_MOVE);
                        cell.offAll(Laya.Event.MOUSE_UP);
                        cell.offAll(Laya.Event.MOUSE_OUT);
                        if (bMove) {
                            Laya.Tween.to(cell, { x: -100, y: cell.y }, 100);
                        }
                    });
                });
            }
            else {
                if (cell.hasListener(Laya.Event.MOUSE_DOWN)) {
                    cell.offAll(Laya.Event.MOUSE_DOWN);
                }
            }
            var btn_del = cell.getChildByName("delete");
            if (btn_del != null) {
                if (this.tab_orders.selectedIndex == 0) {
                    btn_del.visible = true;
                    btn_del.clickHandler = new Handler(this, this.onDeleteButtonClicked, [index]);
                }
                else {
                    btn_del.visible = false;
                }
            }
        };
        WalletView.prototype.onDeleteButtonClicked = function (index) {
            console.log("delete button clicked index : %d", index);
            if (UserInfo.UserOrdersYet.length > index) {
                var data = UserInfo.UserOrdersYet[index];
                var orderid = Number(data["id"]);
                if (orderid != null && orderid > 0) {
                    NetHelper.getInstance().httpCancelOrder(orderid, this, this.onCancelOrder);
                }
            }
        };
        WalletView.prototype.onCancelOrder = function (data) {
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
        return WalletView;
    }(ui.WalletViewUI));
    view.WalletView = WalletView;
})(view || (view = {}));
//# sourceMappingURL=WalletView.js.map