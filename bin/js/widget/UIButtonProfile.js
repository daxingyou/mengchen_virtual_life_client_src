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
var widget;
(function (widget) {
    var UIButtonProfile = /** @class */ (function (_super) {
        __extends(UIButtonProfile, _super);
        function UIButtonProfile() {
            var _this = _super.call(this) || this;
            _this.clickHandler = new Handler(_this, _this.onclick);
            return _this;
        }
        UIButtonProfile.prototype.onclick = function () {
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW, ConstViews.PROFILE);
        };
        return UIButtonProfile;
    }(laya.ui.Button));
    widget.UIButtonProfile = UIButtonProfile;
})(widget || (widget = {}));
//# sourceMappingURL=UIButtonProfile.js.map