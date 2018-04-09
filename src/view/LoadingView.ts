/**Created by the HoJanHoi*/
module view{
	export class LoadingView extends ui.LoadingViewUI{
		constructor(){
			super();
			this.showLoading();

			Laya.timer.once(2000,this, this.timerTest);
		}

		/**
		 * showLoading
		 */
		showLoading() {
			if(this.visible != true){
				this.visible = true;
			}
			if(this.ani1 != null){
				this.ani1.play();
			}
		}

		/**
		 * hideLoading
		 */
		hideLoading() {
			this.visible = false;
			this.ani1.stop();
		}

		timerTest(){
			Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.WELCOME);
		}
	}
}