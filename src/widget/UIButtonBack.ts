/**
* name 
*/
module widget{
	export class UIButtonBack extends laya.ui.Button{
		constructor(){
			super();

			this.clickHandler = new Handler(this,this.onclick)		
		}

		onclick(){
			Dispatcher.getInstance().send(ConstEvent.POP_VIEW);			
		}
	}
}