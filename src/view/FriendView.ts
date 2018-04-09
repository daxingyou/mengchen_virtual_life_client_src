/**
* name 
*/
module view{
	import Text = Laya.Text;
	import Button = Laya.Button;

	export class FriendView extends ui.FriendViewUI{
		constructor(){
			super();
			this.list_friends.vScrollBarSkin="";
			this.list_friends.renderHandler = new Handler(this, this.onListRender);
			// this.list_rank.selectHandler = new Handler(this, this.onListCellSelected);

			var tmp:Array<any> = [{price:UserInfo.Points,name:UserInfo.UserName,rank:1}]
			for (var index = 0; index < 20; index++) {
				var element = {price:200-index,name:"Test"+index,rank:index+1};
				tmp.push(element);
			}
			this.list_friends.array = tmp;

			this.refreshUserInfo();			
		}

        private onListCellSelected(index:number){
            // Stocks.currentSelected = index;
            // Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.CARDINFO);
        }

        private onListRender(cell:laya.ui.Box,index:number){
            if(index > this.list_friends.array.length) return;

            var data:any = this.list_friends.array[index];

            var head:Button = <Button>cell.getChildByName("head");
            var rank:Text = <Text>cell.getChildByName("rank");
            var name:Text = <Text>cell.getChildByName("name");
            var price:Text = <Text>cell.getChildByName("price");

            if(null != head) head.skin = "app/head.jpg";
            if(null != rank) rank.text = data["rank"];
            if(null != name) name.text = data["name"];
            if(null != price) price.text = Number(data["price"]).toFixed(2)+"身价";
        }

		private refreshUserInfo() {
			this.btn_head.skin = UserInfo.UserHead;
			this.txt_name.text = UserInfo.UserName;
			this.txt_price.text = UserInfo.TotalPoints.toFixed(2)+"身价";
			this.txt_rank.text = "1";
		}			
	}
}