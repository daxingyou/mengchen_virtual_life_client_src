/**
* name 
*/
module view{
	export class InfoEditView extends ui.InfoEditViewUI{
		constructor(){
			super();

			this.btn_save.clickHandler = new Handler(this,this.onSaveClicked);

			this.refreshUserInfo();
		}

		onEditCallback(data:any){
			var jsonData = JSON.parse(data);
			alert(jsonData.message);

			NetHelper.getInstance().httpGetUserInfo(this,(data:any)=>{
				UserInfo.setUserInfo(data);
			});
		}

		private refreshUserInfo(){
			this.ti_nickname.text = UserInfo.UserName;
			this.rg_sex.selectedIndex = UserInfo.UserName == "女" ? 0 : 1;
			this.ti_job.text = UserInfo.Career;
		}

		private onSaveClicked() {
			var nickname = this.ti_nickname.text;
			var sex = this.rg_sex.selectedIndex;
			var job = this.ti_job.text;
			var params = "nickname="+nickname+"&gender="+sex+"&profession="+job;
			NetHelper.getInstance().httpEditUserInfo(params,this,this.onEditCallback);
		}
	}
}