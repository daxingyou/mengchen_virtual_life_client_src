/**Created by the LayaAirIDE*/
module view.views{
	export class WelcomeView extends ui.views.WelcomeViewUI{
		constructor(){
			super();

			this.Btn_Test.clickHandler = new Handler(this, this.onTestClick);
		}

		onTestClick(){
			Dispatcher.getInstance().send(ConstEvent.POPUP_VIEW,ConstViews.POPUPTEST);
		}
	}
}