/**Created by the LayaAirIDE*/
module view{
    import Text = laya.display.Text;
	export class ProfileView extends ui.ProfileViewUI{
        private dataArray:Array<any>;
		constructor(){
			super();

            this.list_data.selectHandler = new Handler(this, this.onListCellSelected);
            this.list_data.renderHandler = new Handler(this, this.onListRender);
            this.list_data.vScrollBarSkin="";
            //Buttons
            this.btn_edit.clickHandler = new Handler(this, this.onEditButtonClicked);
            this.btn_head.clickHandler = new Handler(this, this.onHeadClicked);
            this.btn_publish.clickHandler = new Handler(this, this.onPublishClicked);

            this.refreshUserInfo();
        }

        private onEditButtonClicked() {
            console.log("on edit button clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW,ConstViews.INFOEDIT);
        }

        private onHeadClicked() {
            console.log("on head button clicked");
        }

        private onPublishClicked() {
            console.log("on publish button clicked");
            Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW,ConstViews.PUBLISH);
        }

        private onListCellSelected(index:number){
            Stocks.currentSelected = index;
            Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.CARDINFO);
        }

        private onListRender(cell:laya.ui.Box,index:number){
            if(index > UserInfo.UserInfoPriceData.length) return;

            var data:any = UserInfo.UserInfoPriceData[index];

            var username:Text = <Text>cell.getChildByName("username");
            var userid:Text = <Text>cell.getChildByName("stockid");
            var price:Text = <Text>cell.getChildByName("price");
            var diff:Text = <Text>cell.getChildByName("diff");

            if(null != username) username.text = data["holder_id"];
            if(null != userid) userid.text = data["stock_code"];
            if(null != price) price.text = Number(data["last_price"]).toFixed(2);
            if(null != diff){
                let rate = Number(data["changing_rate"]) * 100; 
                let tmp = rate.toFixed(2);
                diff.color = rate >= 0 ? "#FF0000" : "#00FF00";
                diff.text = tmp+"%";
            }
        }

        public refreshUserInfo(){
            //对list复制数据源，会马上调用一次renderhandler
            this.list_data.array = UserInfo.UserInfoPriceData;
            //Txts
            this.txt_username.text = UserInfo.UserName;
            this.txt_usersex.text = UserInfo.UserSex;
            this.txt_userjob.text = UserInfo.Career;
        }
    }
}