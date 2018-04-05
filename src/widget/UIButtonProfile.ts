/**
* name 
*/
module widget{
	export class UIButtonProfile extends laya.ui.Button{
		constructor(){
			super();

			this.clickHandler = new Handler(this,this.onclick)		
		}

		onclick(){
			Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.PROFILE);			
		}
	}
}