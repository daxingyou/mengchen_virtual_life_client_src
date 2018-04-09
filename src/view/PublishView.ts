/**
* name 
*/
module view{
	export class PublishView extends ui.PublishViewUI{
		constructor(){
			super();

			this.com_type.selectHandler = new Handler(this,this.onComboSelected);
			this.btn_publish.clickHandler = new Handler(this, this.onPublishClicked);
			this.btn_custom.clickHandler = new Handler(this, this.onCustomClicked);

			this.ti_price.on(Laya.Event.INPUT,this,this.onInput);
		}

		onPublishCallBack(data:any){
			var jsonData:Object = JSON.parse(data);
			if(jsonData != null){
				if(jsonData.hasOwnProperty("code")){
					if(jsonData["code"] < 0){
						alert(jsonData["message"]);
					}else{
						alert(jsonData["error"]);
					}
				}
			}
		}

		private onComboSelected(index:number) {
			this.ti_custom.visible = false;	
		}

		private onPublishClicked() {
			if(this.ti_code.text.match("^[0-9a-zA-Z]+$") && this.ti_code.text.length == 6){
				var code:any = this.ti_code.text;
				var price:Number = Number(this.ti_price.text);
				var params = "stock_code="+code+"&stock_type_id=1&ipo_price="+price.toFixed(0)+"&ipo_shares=20&dividend_policy_id=1&intro="+this.ti_intro.text;
				NetHelper.getInstance().httpIpo(params,this,this.onPublishCallBack);
			}else{
				alert("身价代码不合法，必须为6位英文和数字的组合");
			}
		}

		private onCustomClicked() {
			this.com_type.selectedIndex = -1;
			this.ti_custom.visible = true;
		}

		private onInput(){
			this.txt_totalPrice.text = (Number(this.ti_price.text) * 20).toFixed(2);
		}
	}
}