/**
* name 
*/

module widget{
	export class UIButtonClose extends laya.ui.Button{
		constructor(){
			super();

			this.clickHandler = new Handler(this,this.onclick)		
		}

		onclick(){
			Dispatcher.getInstance().send(ConstEvent.DESTORY_VIEW);
		}
	}
}