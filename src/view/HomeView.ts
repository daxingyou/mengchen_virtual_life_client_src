/**Created by the LayaAirIDE*/
module view{
	export class HomeView extends ui.HomeViewUI{
		constructor(){
			super();

			this.btn_stocks.clickHandler = new Handler(this, this.onStocksClicked);
			this.btn_trades.clickHandler = new Handler(this, this.onTradesClicked);
			this.btn_pet.clickHandler = new Handler(this, this.onPetClicked);
        }

		private onStocksClicked(){
			// request for stocks
			NetHelper.getInstance().httpGetStockTrend(this, this.onGetStocks);
		}

		onGetStocks(data:any){
			Stocks.setStocksData(data);
			Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.STOCK);
		}

		private onTradesClicked(){
			Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.WALLET);
		}

		private onPetClicked() {
			Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.PET);
		}
    }
}