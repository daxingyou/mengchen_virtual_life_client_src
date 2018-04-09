/*
* name;
*/
var ConstGlobal = /** @class */ (function () {
    function ConstGlobal() {
    }
    ConstGlobal.URL = "http://wxgame-api.max78.com/wechat";
    ConstGlobal.HttpValues = {
        petAction: { method: "POST", URI: "/pet/interaction", description: "宠物交互" },
        getPlayerInfo: { method: "GET", URI: "/player/info", description: "获取玩家个人信息" },
        editPlayerInfo: { method: "PUT", URI: "/player/info", description: "编辑玩家个人信息" },
        buy: { method: "POST", URI: "/points/purchase", description: "购买身价" },
        getStockType: { method: "GET", URI: "/stock/type", description: "获取股票类型" },
        newStockType: { method: "POST", URI: "/stock/type", description: "新增玩家自定义的股票类型" },
        getDividendPolicy: { method: "GET", URI: "/stock/dividend-policy", description: "获取股票分红方案" },
        newDividendPolicy: { method: "POST", URI: "/stock/dividend-policy", description: "新增股票分红方案" },
        delDividendPolicy: { method: "DELETE", URI: "/stock/dividend-policy", description: "删除股票分红方案" },
        ipo: { method: "POST", URI: "/stock/ipo", description: "发布个人ipo" },
        getStock: { method: "GET", URI: "/stock/ipo", description: "获取当前市场ipo信息" },
        subscription: { method: "POST", URI: "/stock/ipo/subscription", description: "认购指定的ipo股票" },
        placeOrder: { method: "POST", URI: "/stock/order", description: "发布买/卖单" },
        cancelOrder: { method: "DELETE", URI: "/stock/order", description: "取消指定的订单" },
        getOrder: { method: "GET", URI: "/stock/order", description: "获取指定的订单详情" },
        getOrders: { method: "GET", URI: "/stock/orders", description: "获取当前玩家所有订单信息" },
        getStockOrdersHis: { method: "GET", URI: "/stock/orders/history", description: "获取某只股票的历史交易数据" },
        getOrderDepth: { method: "GET", URI: "/stock/depth", description: "获取某只股票的交易深度" },
        getStockTicker: { method: "GET", URI: "/stock/ticker", description: "获取某只股票的最新成交价" },
        getStockTrend: { method: "GET", URI: "/stock/trend", description: "获取所有股票的趋势（涨跌幅）" },
    };
    return ConstGlobal;
}());
//# sourceMappingURL=ConstGlobal.js.map