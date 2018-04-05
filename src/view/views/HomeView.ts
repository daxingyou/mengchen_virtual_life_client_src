/**Created by the LayaAirIDE*/
module view.views{
	export class HomeView extends ui.views.HomeViewUI{
		constructor(){
			super();

			this.btn_stocks.clickHandler = new Handler(this, this.onStocksClicked);
        }

		onStocksClicked(){
			// request for stocks
			NetHelper.getInstance().httpGetStockTrend(this, this.onGetStocks);
		}

		onGetStocks(data:any){
			Stocks.setStocksData(data);
			Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.STOCK);
		}
    }
}