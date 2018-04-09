/**Created by the LayaAirIDE*/
module view{
    import Text = laya.display.Text;
	export class StockView extends ui.StockViewUI{
		constructor(){
			super();

            this.btn_friend.clickHandler = new Handler(this, this.onFriendClicked);
            this.btn_rank.clickHandler = new Handler(this, this.onRankClicked);

            this.list_stock.selectHandler = new Handler(this, this.onListCellSelected);
            this.list_stock.renderHandler = new Handler(this, this.onListRender);
            this.list_stock.vScrollBarSkin="";
            
            this.refreshStocksList();
        }

        private onFriendClicked() {
            console.log("on friend clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW,ConstViews.FRIEND);
        }

        private onRankClicked() {
            console.log("on rank clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW,ConstViews.RANK); 
        }

        private onListCellSelected(index:number){
            Stocks.currentSelected = index;
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.CARDINFO);
        }

        private onListRender(cell:laya.ui.Box,index:number){
            if(index > Stocks.data.length) return;

            var data:any = Stocks.data[index];

            var username:Text = <Text>cell.getChildByName("username");
            var userid:Text = <Text>cell.getChildByName("stockid");
            var price:Text = <Text>cell.getChildByName("price");
            var diff:Text = <Text>cell.getChildByName("diff");

            if(null != username) username.text = data["owner"]["nickname"];
            if(null != userid) userid.text = data["stock_code"];
            if(null != price) price.text = Number(data["last_price"]).toFixed(2);
            if(null != diff){
                let rate = Number(data["changing_rate"]) * 100;
                let tmp = rate.toFixed(2);
                diff.color = rate >= 0 ? "#FF0000" : "#00FF00";
                diff.text = tmp+"%";
            }
        }

        refreshStocksList(){
            this.list_stock.array = Stocks.data;
        }
    }
}