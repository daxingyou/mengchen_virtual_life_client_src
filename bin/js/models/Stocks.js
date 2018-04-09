/*
* name;
*/
var Stocks = /** @class */ (function () {
    function Stocks() {
    }
    Stocks.setStocksData = function (data) {
        console.log(data);
        var jsonData = JSON.parse(data);
        if (jsonData != null) {
            Stocks.data = [];
            for (var key in jsonData) {
                if (jsonData.hasOwnProperty(key)) {
                    var element = jsonData[key];
                    element.stock_code = key.toString();
                    Stocks.data.push(element);
                }
            }
        }
    };
    Stocks.data = [];
    Stocks.currentSelected = null;
    return Stocks;
}());
//# sourceMappingURL=Stocks.js.map