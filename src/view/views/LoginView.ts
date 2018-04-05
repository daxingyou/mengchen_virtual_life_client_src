/**Created by the LayaAirIDE*/
module view.views{
	export class LoginView extends ui.views.LoginViewUI{
		constructor(){
			super();

            this.btn_start.clickHandler = new Handler(this, this.onClicked);
		}

        onClicked(){
            console.log("LoginView start Button click. request login");
            NetHelper.getInstance().httpGetUserInfo(this, this.onGetUserInfo);
            // //tmp
            // this.onLoginSuccessed();
        }

        onGetUserInfo(data:any){
            UserInfo.setUserInfo(data);
            this.onLoginSuccessed();
        }

        onLoginSuccessed(){
            console.log("LoginView login successed!");

            Dispatcher.getInstance().send(ConstEvent.REPLACE_VIEW,ConstViews.HOME);
        }
	}   
}