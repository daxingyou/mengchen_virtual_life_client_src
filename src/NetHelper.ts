/*
* name;
*/
class NetHelper{
    public static Instance:NetHelper = new NetHelper();

    constructor(){

    }

    private sendHttpRequest(url:string, method:string, args:string, caller:any, complete:Function, error?:Function) {
        if(url == null){ console.log("Net Helper http request error ,url is null"); return;}
        if(method == null){console.log("Net Helper http request error ,method is null"); return;}
        if(args == null){console.log("Net Helper http request error ,args is null"); return;}
        if(caller == null){console.log("Net Helper http request error ,callback target is null"); return;}
        if(complete == null){console.log("Net Helper http request error ,complete callback function is null"); return;}

        var xhr: Laya.HttpRequest = new Laya.HttpRequest();
        xhr.http.timeout = 10000;
        xhr.once(Laya.Event.COMPLETE, caller, complete);
        xhr.once(Laya.Event.ERROR, caller, error);
        xhr.send(url,args,method,"text");
        console.log("Http request send. url[%s] args[%s] method[%s]",url,args,method);
    }

    private httpGet(info:any, args:string, caller:any, complete:Function, error?:Function){
        this.sendHttpRequest(ConstGlobal.URL+info.URI+args, info.method, "", caller, complete, error);
    }

    private httpPost(info:any, args:string, caller:any, complete:Function, error?:Function){
        this.sendHttpRequest(ConstGlobal.URL+info.URI, info.method, args, caller, complete, error);
    }

    httpGetUserInfo(caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getPlayerInfo, "", caller, complete, error);
    }

    httpEditUserInfo(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.editPlayerInfo, args, caller, complete, error);
    }

    httpPetAction(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.petAction, args, caller, complete, error);
    }

    httpBuy(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.buy, args, caller, complete, error);
    }

    httpGetStockType(caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getStockType, "", caller, complete, error);
    }

    httpNewStockType(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.newStockType, args, caller, complete, error);
    }
    
    httpGetDividendPolicy(caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getDividendPolicy, "", caller, complete, error);
    }

    httpNewDividendPolicy(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.newDividendPolicy, args, caller, complete, error);
    }
    
    httpDelDividendPolicy(pid:Number, caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.delDividendPolicy, "?policy_id="+pid, caller, complete, error);
    }

    httpIpo(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.ipo, args, caller, complete, error);
    }

    httpGetStock(caller:any, complete:Function, code?:string, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getStock,code!=null?"?stock_code="+code:"",caller,complete,error);
    }

    httpSubscription(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.subscription, args, caller, complete, error);
    }

    httpPlaceOrder(args:string, caller:any, complete:Function, error?:Function){
        this.httpPost(ConstGlobal.HttpValues.placeOrder, args, caller, complete, error);
    }

    httpCancelOrder(orderID:Number, caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.cancelOrder, "/"+orderID, caller, complete, error);
    }

    httpGetOrder(orderID:Number, caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getOrder, "/"+orderID, caller, complete, error);
    }

    httpGetOrdersYet(caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getOrders, "?status=1,2", caller, complete, error);
    }

    httpGetOrdersDone(caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getOrders, "?status=3", caller, complete, error);
    }

    httpGetOrderHis(code:string, caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getStockOrdersHis, "?stock_code="+code, caller, complete, error);
    }

    httpGetOrderDepth(code:string, caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getOrderDepth, "?stock_code="+code, caller, complete, error);
    }

    httpGetStockTicker(code:string, caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getStockTicker, "?stock_code="+code, caller, complete, error);
    }

    httpGetStockTrend(caller:any, complete:Function, error?:Function){
        this.httpGet(ConstGlobal.HttpValues.getStockTrend, "", caller, complete, error);
    }             

    static getInstance():NetHelper{
        if(NetHelper.Instance == null)
            NetHelper.Instance = new NetHelper();
        return NetHelper.Instance;
    }
}