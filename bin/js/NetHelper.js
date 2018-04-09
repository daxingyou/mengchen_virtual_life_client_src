/*
* name;
*/
var NetHelper = /** @class */ (function () {
    function NetHelper() {
    }
    NetHelper.prototype.sendHttpRequest = function (url, method, args, caller, complete, error) {
        if (url == null) {
            console.log("Net Helper http request error ,url is null");
            return;
        }
        if (method == null) {
            console.log("Net Helper http request error ,method is null");
            return;
        }
        if (args == null) {
            console.log("Net Helper http request error ,args is null");
            return;
        }
        if (caller == null) {
            console.log("Net Helper http request error ,callback target is null");
            return;
        }
        if (complete == null) {
            console.log("Net Helper http request error ,complete callback function is null");
            return;
        }
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000;
        xhr.once(Laya.Event.COMPLETE, caller, complete);
        xhr.once(Laya.Event.ERROR, caller, error);
        xhr.send(url, args, method, "text");
        console.log("Http request send. url[%s] args[%s] method[%s]", url, args, method);
    };
    NetHelper.prototype.httpGet = function (info, args, caller, complete, error) {
        this.sendHttpRequest(ConstGlobal.URL + info.URI + args, info.method, "", caller, complete, error);
    };
    NetHelper.prototype.httpPost = function (info, args, caller, complete, error) {
        this.sendHttpRequest(ConstGlobal.URL + info.URI, info.method, args, caller, complete, error);
    };
    NetHelper.prototype.httpGetUserInfo = function (caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getPlayerInfo, "", caller, complete, error);
    };
    NetHelper.prototype.httpEditUserInfo = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.editPlayerInfo, args, caller, complete, error);
    };
    NetHelper.prototype.httpPetAction = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.petAction, args, caller, complete, error);
    };
    NetHelper.prototype.httpBuy = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.buy, args, caller, complete, error);
    };
    NetHelper.prototype.httpGetStockType = function (caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getStockType, "", caller, complete, error);
    };
    NetHelper.prototype.httpNewStockType = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.newStockType, args, caller, complete, error);
    };
    NetHelper.prototype.httpGetDividendPolicy = function (caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getDividendPolicy, "", caller, complete, error);
    };
    NetHelper.prototype.httpNewDividendPolicy = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.newDividendPolicy, args, caller, complete, error);
    };
    NetHelper.prototype.httpDelDividendPolicy = function (pid, caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.delDividendPolicy, "?policy_id=" + pid, caller, complete, error);
    };
    NetHelper.prototype.httpIpo = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.ipo, args, caller, complete, error);
    };
    NetHelper.prototype.httpGetStock = function (caller, complete, code, error) {
        this.httpGet(ConstGlobal.HttpValues.getStock, code != null ? "?stock_code=" + code : "", caller, complete, error);
    };
    NetHelper.prototype.httpSubscription = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.subscription, args, caller, complete, error);
    };
    NetHelper.prototype.httpPlaceOrder = function (args, caller, complete, error) {
        this.httpPost(ConstGlobal.HttpValues.placeOrder, args, caller, complete, error);
    };
    NetHelper.prototype.httpCancelOrder = function (orderID, caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.cancelOrder, "/" + orderID, caller, complete, error);
    };
    NetHelper.prototype.httpGetOrder = function (orderID, caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getOrder, "/" + orderID, caller, complete, error);
    };
    NetHelper.prototype.httpGetOrdersYet = function (caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getOrders, "?status=1,2", caller, complete, error);
    };
    NetHelper.prototype.httpGetOrdersDone = function (caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getOrders, "?status=3", caller, complete, error);
    };
    NetHelper.prototype.httpGetOrderHis = function (code, caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getStockOrdersHis, "?stock_code=" + code, caller, complete, error);
    };
    NetHelper.prototype.httpGetOrderDepth = function (code, caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getOrderDepth, "?stock_code=" + code, caller, complete, error);
    };
    NetHelper.prototype.httpGetStockTicker = function (code, caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getStockTicker, "?stock_code=" + code, caller, complete, error);
    };
    NetHelper.prototype.httpGetStockTrend = function (caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getStockTrend, "", caller, complete, error);
    };
    NetHelper.prototype.httpGetKline = function (args, caller, complete, error) {
        this.httpGet(ConstGlobal.HttpValues.getStockKline, "?stock_code=" + args, caller, complete, error);
    };
    NetHelper.getInstance = function () {
        if (NetHelper.Instance == null)
            NetHelper.Instance = new NetHelper();
        return NetHelper.Instance;
    };
    NetHelper.Instance = new NetHelper();
    return NetHelper;
}());
//# sourceMappingURL=NetHelper.js.map