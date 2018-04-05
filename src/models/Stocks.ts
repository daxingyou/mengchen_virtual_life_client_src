/*
* name;
*/
class Stocks{

    public static data:Array<any> = [];

    public static currentSelected:Number = null;

    constructor(){

    }

    static setStocksData(data:any){
        var jsonData = JSON.parse(data);
        if(jsonData != null){
            Stocks.data = [];
            for (var key in jsonData) {
                if (jsonData.hasOwnProperty(key)) {
                    var element = jsonData[key];
                    element.stock_code = key.toString();

                    Stocks.data.push(element);
                }
            }
        }
    }
}