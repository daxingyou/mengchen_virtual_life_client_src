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
    var PublishView = /** @class */ (function (_super) {
        __extends(PublishView, _super);
        function PublishView() {
            var _this = _super.call(this) || this;
            _this.com_type.selectHandler = new Handler(_this, _this.onComboSelected);
            _this.btn_publish.clickHandler = new Handler(_this, _this.onPublishClicked);
            _this.btn_custom.clickHandler = new Handler(_this, _this.onCustomClicked);
            _this.ti_price.on(Laya.Event.INPUT, _this, _this.onInput);
            return _this;
        }
        PublishView.prototype.onPublishCallBack = function (data) {
            var jsonData = JSON.parse(data);
            if (jsonData != null) {
                if (jsonData.hasOwnProperty("code")) {
                    if (jsonData["code"] < 0) {
                        alert(jsonData["message"]);
                    }
                    else {
                        alert(jsonData["error"]);
                    }
                }
            }
        };
        PublishView.prototype.onComboSelected = function (index) {
            this.ti_custom.visible = false;
        };
        PublishView.prototype.onPublishClicked = function () {
            if (this.ti_code.text.match("^[0-9a-zA-Z]+$") && this.ti_code.text.length == 6) {
                var code = this.ti_code.text;
                var price = Number(this.ti_price.text);
                var params = "stock_code=" + code + "&stock_type_id=1&ipo_price=" + price.toFixed(0) + "&ipo_shares=20&dividend_policy_id=1&intro=" + this.ti_intro.text;
                NetHelper.getInstance().httpIpo(params, this, this.onPublishCallBack);
            }
            else {
                alert("身价代码不合法，必须为6位英文和数字的组合");
            }
        };
        PublishView.prototype.onCustomClicked = function () {
            this.com_type.selectedIndex = -1;
            this.ti_custom.visible = true;
        };
        PublishView.prototype.onInput = function () {
            this.txt_totalPrice.text = (Number(this.ti_price.text) * 20).toFixed(2);
        };
        return PublishView;
    }(ui.PublishViewUI));
    view.PublishView = PublishView;
})(view || (view = {}));
//# sourceMappingURL=PublishView.js.map