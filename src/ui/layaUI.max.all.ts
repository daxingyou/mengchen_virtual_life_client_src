
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class CardInfoViewUI extends View {
		public btn_head:Laya.Button;
		public btn_share:Laya.Button;
		public txt_username:laya.display.Text;
		public txt_job:laya.display.Text;
		public txt_highprice:laya.display.Text;
		public minprice:Laya.Box;
		public txt_lowprice:laya.display.Text;
		public txt_price:laya.display.Text;
		public txt_timeleft:laya.display.Text;
		public txt_number:laya.display.Text;
		public bx_depth:Laya.Box;
		public img_kLines:Laya.Image;
		public list_history:Laya.List;
		public btn_custom:Laya.Button;
		public txt_holdnum:laya.display.Text;
		public txt_action:laya.display.Text;
		public txt_buynum:laya.display.Text;
		public sld_num:Laya.HSlider;
		public btn_checkout:Laya.Button;
		public txt_actionprice:laya.display.Text;
		public txt_totalbuyprice:laya.display.Text;
		public btn_buy:Laya.Button;
		public btn_sell:Laya.Button;
		public ti_price:Laya.TextInput;
		public ti_count:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"top","height":112},"child":[{"type":"Button","props":{"y":54,"x":140,"width":70,"var":"btn_head","top":19,"stateNum":1,"skin":"app/head.jpg","name":"btn_avt","height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Sprite","props":{"y":35,"x":35,"width":70,"renderType":"mask","pivotY":35,"pivotX":35,"height":70},"child":[{"type":"Circle","props":{"y":35,"x":35,"radius":35,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Button","props":{"y":30,"x":30,"stateNum":1,"skin":"app/btn_back.png","runtime":"widget.UIButtonBack","name":"btn_back"}},{"type":"Button","props":{"y":35,"x":633,"width":48,"var":"btn_share","stateNum":1,"skin":"app/btn_share.png","name":"btn_share","labelSize":26,"labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelAlign":"center","height":48}},{"type":"Box","props":{"y":13,"x":197},"child":[{"type":"Box","props":{"y":64,"x":36,"width":74,"renderType":"render","pivotY":19,"pivotX":42,"height":39},"child":[{"type":"Image","props":{"y":7,"x":9,"skin":"comp/bg_tag.png","sizeGrid":"109,10,10,10"}},{"type":"Text","props":{"y":8,"x":21,"width":36,"text":"职业","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#1b2c3c","bold":true}}]},{"type":"Text","props":{"y":4,"x":0,"width":184,"var":"txt_username","text":"Username","name":"name","height":48,"fontSize":34,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":43,"x":73,"width":78,"var":"txt_job","text":"职业","name":"job","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}}]}]},{"type":"Box","props":{"y":122,"x":1,"width":717,"height":955},"child":[{"type":"Box","props":{"y":0,"x":40,"name":"notic"},"child":[{"type":"Text","props":{"width":78,"text":" 介绍：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}}]},{"type":"Image","props":{"y":85,"x":42,"skin":"app/pix_line.png","name":"line","centerX":0}},{"type":"Box","props":{"y":100,"x":40,"width":294,"name":"maxprice","height":44},"child":[{"type":"Text","props":{"width":150,"text":"历史最高价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":160,"width":150,"var":"txt_highprice","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":100,"x":356,"var":"minprice"},"child":[{"type":"Text","props":{"width":150,"text":"历史最低价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":160,"width":150,"var":"txt_lowprice","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":149,"x":40,"name":"nowprice"},"child":[{"type":"Text","props":{"width":173,"text":"即时购买价格：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":180,"width":150,"var":"txt_price","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":200,"x":40,"width":342,"name":"lasttime","height":44},"child":[{"type":"Text","props":{"width":115,"text":"剩余时间","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":122,"width":150,"var":"txt_timeleft","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#f56c6c"}}]},{"type":"Box","props":{"y":200,"x":407,"width":268,"name":"cardnum","height":44},"child":[{"type":"Text","props":{"width":126,"text":"卡片号码：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":129,"width":150,"var":"txt_number","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#fffff"}}]},{"type":"Box","props":{"y":240,"x":40,"var":"bx_depth","name":"pic_point"},"child":[{"type":"Image","props":{"var":"img_kLines","skin":"app/list2.png"}},{"type":"Box","props":{"y":8,"x":490,"name":"s3"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"卖3","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"0","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":40,"x":490,"name":"s2"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"卖2","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"0","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":71,"x":490,"name":"s1"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"卖1","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"0","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":107,"x":490,"name":"b1"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"买1","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"0","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":139,"x":490,"name":"b2"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"买2","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"0","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":170,"x":490,"name":"b3"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"买3","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"0","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":462,"x":40,"width":282,"name":"startprice","height":44},"child":[{"type":"Text","props":{"width":115,"text":"起始价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":99,"width":150,"height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":462,"x":360,"name":"endprice"},"child":[{"type":"Text","props":{"width":105,"text":"结束价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":102,"width":150,"height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":519,"x":40,"name":"history"},"child":[{"type":"Image","props":{"skin":"app/lister1.png"}},{"type":"Box","props":{"y":0,"x":0,"width":633,"name":"type","height":40},"child":[{"type":"Text","props":{"y":6,"x":6,"width":191,"text":"最近交易时间","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":6,"x":204,"width":118,"text":"单价","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":6,"x":329,"width":116,"text":"数量","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":6,"x":455,"width":172,"text":"总价","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"List","props":{"y":40,"x":0,"width":633,"var":"list_history","repeatY":5,"repeatX":1,"height":210},"child":[{"type":"Box","props":{"y":0,"x":0,"width":633,"renderType":"render","name":"lister","height":42},"child":[{"type":"Text","props":{"y":8,"x":6,"width":191,"text":"0000-00-00","name":"his_time","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":8,"x":204,"width":118,"name":"his_unitprice","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":8,"x":329,"width":116,"name":"his_num","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":8,"x":455,"width":172,"name":"his_price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]}]}]}]},{"type":"Box","props":{"x":0,"width":720,"name":"foot","height":380,"bottom":0},"child":[{"type":"Image","props":{"x":0,"width":720,"skin":"app/bg3.png","height":370,"bottom":0}},{"type":"Button","props":{"y":40,"x":520,"width":159,"visible":false,"var":"btn_custom","stateNum":1,"skin":"app/foot_custom.png","sizeGrid":"0,25,0,25","name":"custom","height":48},"child":[{"type":"Text","props":{"y":8,"x":20,"width":120,"text":"自定义数量","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#1b2c3c"}}]},{"type":"Box","props":{"y":40,"x":40,"name":"info"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":317,"skin":"app/foot_info.png","sizeGrid":"0,25,0,25","height":48}},{"type":"Box","props":{"x":24,"name":"have","centerY":0},"child":[{"type":"Text","props":{"y":0,"x":0,"width":96,"text":"已持有：","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":91,"width":73,"var":"txt_holdnum","text":"0","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}}]},{"type":"Box","props":{"y":10,"x":181,"name":"buy","centerY":0},"child":[{"type":"Text","props":{"y":0,"x":0,"width":96,"var":"txt_action","text":"购入：","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":66,"width":73,"var":"txt_buynum","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}}]}]},{"type":"HSlider","props":{"y":126,"x":45,"width":634,"visible":false,"var":"sld_num","value":25,"skin":"app/hslider.png","min":-100,"max":100,"height":52,"centerX":0},"child":[{"type":"Box","props":{"y":26,"width":644,"height":29,"centerX":2},"child":[{"type":"Text","props":{"y":0,"x":-4,"width":40,"text":"100","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#67c23a","align":"center"}},{"type":"Text","props":{"y":0,"x":149,"width":40,"text":"50","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#67c23a","align":"center"}},{"type":"Text","props":{"y":0,"x":301,"width":40,"text":"0","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":453,"width":40,"text":"50","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f56c6c","align":"center"}},{"type":"Text","props":{"y":0,"x":605,"width":40,"text":"100","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f56c6c","align":"center"}}]}]},{"type":"Image","props":{"y":186,"visible":false,"skin":"app/pix_line.png","name":"line","centerX":0}},{"type":"Button","props":{"y":212,"visible":false,"var":"btn_checkout","stateNum":1,"skin":"app/btn_1.png","right":40},"child":[{"type":"Text","props":{"y":26,"x":67,"width":174,"text":"结 算","height":63,"fontSize":46,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":221,"width":231,"visible":false,"name":"total","left":40,"height":104},"child":[{"type":"Text","props":{"y":0,"x":0,"width":127,"var":"txt_actionprice","text":"买入总价","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":40,"x":0,"width":127,"var":"txt_totalbuyprice","height":61,"fontSize":46,"font":"Microsoft YaHei","color":"#f56c6c","align":"left"}}]},{"type":"Button","props":{"y":249,"x":23,"width":310,"var":"btn_buy","stateNum":1,"skin":"app/btn_3.png","sizeGrid":"18,20,17,15","height":120},"child":[{"type":"Label","props":{"y":48,"x":154,"text":"买 入","fontSize":52,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":249,"x":390,"width":310,"var":"btn_sell","stateNum":1,"skin":"app/btn_2.png","sizeGrid":"18,22,19,17","height":120},"child":[{"type":"Label","props":{"y":48,"x":154,"text":"卖 出","fontSize":52,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Label","props":{"y":105,"x":51,"text":"价 格：","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","cacheAs":"normal"}},{"type":"TextInput","props":{"y":106,"x":141,"width":250,"var":"ti_price","text":"0.00","skin":"app/textinput_search.png","sizeGrid":"13,13,17,12","height":36,"fontSize":26,"font":"Arial","color":"#7d7d7d","align":"center"}},{"type":"Label","props":{"y":174,"x":51,"text":"数 量：","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","cacheAs":"normal","align":"center"}},{"type":"TextInput","props":{"y":174,"x":141,"width":250,"var":"ti_count","text":"1","skin":"app/textinput_search.png","sizeGrid":"13,13,17,12","promptColor":"#7d7d7d","height":36,"fontSize":26,"font":"Arial","color":"#7d7d7d","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.CardInfoViewUI.uiView);

        }

    }
}

module ui {
    export class FilterViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"name":"enter2","height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg4.png","name":"bg","height":1280}},{"type":"Box","props":{"y":40,"x":0,"width":720,"name":"top","height":115},"child":[{"type":"Button","props":{"top":10,"stateNum":1,"skin":"app/btn_close2.png","right":40,"name":"btn_back"}},{"type":"Text","props":{"y":0,"x":0,"width":720,"text":"筛选","height":70,"fontSize":52,"font":"Microsoft YaHei","color":"#606266","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":220,"x":110,"name":"enter1"},"child":[{"type":"Text","props":{"y":8,"x":-92,"width":180,"text":"身价代码：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","align":"right"}},{"type":"TextInput","props":{"y":-2,"x":111,"width":320,"skin":"app/textinput.png","sizeGrid":"20,20,20,20","height":60}}]},{"type":"Box","props":{"y":295,"x":110,"name":"enter2"},"child":[{"type":"Text","props":{"y":0,"x":-23,"width":110,"text":"类型：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","align":"right"}},{"type":"Box","props":{"y":0,"x":111},"child":[{"type":"Radio","props":{"skin":"app/radio_d.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":5,"x":24,"width":47,"text":"聚会","height":36,"fontSize":24,"font":"Microsoft YaHei","color":"#409eff","align":"center"}}]},{"type":"Box","props":{"y":0,"x":225,"rotation":0},"child":[{"type":"Radio","props":{"skin":"app/radio_d.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":5,"x":24,"width":47,"text":"音乐","height":36,"fontSize":24,"font":"Microsoft YaHei","color":"#409eff","align":"center"}}]},{"type":"Box","props":{"y":0,"x":340,"rotation":0},"child":[{"type":"Radio","props":{"skin":"app/radio_d.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":5,"x":24,"width":47,"text":"手艺","height":36,"fontSize":24,"font":"Microsoft YaHei","color":"#409eff","align":"center"}}]},{"type":"Box","props":{"y":60,"x":111},"child":[{"type":"Radio","props":{"skin":"app/radio_d.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":5,"x":24,"width":47,"text":"烹饪","height":36,"fontSize":24,"font":"Microsoft YaHei","color":"#409eff","align":"center"}}]},{"type":"Box","props":{"y":60,"x":225,"rotation":0},"child":[{"type":"Radio","props":{"skin":"app/radio_d.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":5,"x":24,"width":47,"text":"教育","height":36,"fontSize":24,"font":"Microsoft YaHei","color":"#409eff","align":"center"}}]},{"type":"Box","props":{"y":60,"x":340,"rotation":0},"child":[{"type":"Radio","props":{"skin":"app/radio_d.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":5,"x":24,"width":47,"text":"驾驶","height":36,"fontSize":24,"font":"Microsoft YaHei","color":"#409eff","align":"center"}}]},{"type":"Box","props":{"y":120,"x":109,"rotation":0},"child":[{"type":"Radio","props":{"skin":"app/radio_d2.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":13,"x":0,"width":320,"text":"自定义","height":47,"fontSize":24,"font":"Microsoft YaHei","color":"#409eff","align":"center"}}]}]},{"type":"Box","props":{"y":501,"x":107,"name":"enter3"},"child":[{"type":"TextInput","props":{"x":113,"width":320,"skin":"app/textinput.png","sizeGrid":"20,20,20,20","height":60}},{"type":"Text","props":{"y":8,"x":-75,"width":163,"text":"买入价格：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","align":"right"}}]},{"type":"Box","props":{"y":588,"x":107,"name":"enter4"},"child":[{"type":"TextInput","props":{"x":113,"width":320,"skin":"app/textinput.png","sizeGrid":"20,20,20,20","height":60}},{"type":"Text","props":{"y":8,"x":-75,"width":163,"text":"买入数量：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","align":"right"}}]},{"type":"Button","props":{"y":755,"width":300,"stateNum":1,"skin":"app/btn_1.png","sizeGrid":"20,20,20,20","labelSize":38,"labelPadding":"-8,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"查询","height":115,"centerX":-166,"bottom":505}},{"type":"Button","props":{"y":755,"width":300,"stateNum":1,"skin":"app/btn_3.png","sizeGrid":"20,20,20,20","labelSize":38,"labelPadding":"-8,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"买入下单","height":115,"centerX":163,"bottom":505}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.FilterViewUI.uiView);

        }

    }
}

module ui {
    export class FriendViewUI extends View {
		public btn_head:Laya.Button;
		public txt_rank:laya.display.Text;
		public txt_name:laya.display.Text;
		public txt_price:laya.display.Text;
		public list_friends:Laya.List;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg4.png","name":"bg","height":1280}},{"type":"Box","props":{"y":40,"x":4,"width":720,"name":"top","height":115},"child":[{"type":"Button","props":{"top":10,"stateNum":1,"skin":"app/btn_close2.png","runtime":"widget.UIButtonClose","right":40,"name":"btn_back"}},{"type":"Box","props":{"y":-15,"x":268,"width":184,"height":123},"child":[{"type":"Text","props":{"y":67,"width":184,"text":"好友圈","height":60,"fontSize":40,"font":"Microsoft YaHei","color":"#606266","bold":true,"align":"center"}},{"type":"Image","props":{"y":0,"skin":"app/rank_friend.png","centerX":0}}]}]},{"type":"Box","props":{"y":161,"width":720,"renderType":"render","name":"myinfo","height":96,"centerX":0},"child":[{"type":"Image","props":{"x":-21,"width":636,"skin":"app/rank_self.png","sizeGrid":"14,14,14,14","height":96,"centerX":0}},{"type":"Button","props":{"x":109,"var":"btn_head","stateNum":1,"skin":"app/btn_avt.png","centerY":0}},{"type":"Text","props":{"y":34,"x":60,"width":37,"var":"txt_rank","text":"00","height":33,"fontSize":30,"font":"Arial","color":"#606266","bold":true}},{"type":"Text","props":{"y":30,"x":201,"width":280,"var":"txt_name","text":"name","height":37,"fontSize":30,"font":"Arial","color":"#606266","bold":false}},{"type":"Text","props":{"y":30,"x":583,"width":94,"var":"txt_price","text":"0身价","height":37,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","bold":false}}]},{"type":"List","props":{"y":259,"x":0,"width":720,"var":"list_friends","height":1033},"child":[{"type":"Box","props":{"width":720,"renderType":"render","name":"list","height":96},"child":[{"type":"Image","props":{"skin":"app/pix_line.png","centerX":0,"bottom":0}},{"type":"Button","props":{"x":109,"stateNum":1,"skin":"app/btn_avt.png","name":"head","centerY":0}},{"type":"Text","props":{"y":34,"x":60,"width":37,"text":"00","name":"rank","height":33,"fontSize":30,"font":"Arial","color":"#606266","bold":true}},{"type":"Text","props":{"y":30,"x":201,"width":280,"text":"name","name":"name","height":37,"fontSize":30,"font":"Arial","color":"#606266","bold":false}},{"type":"Text","props":{"y":30,"x":583,"width":94,"text":"0身价","name":"price","height":37,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","bold":false}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonClose",widget.UIButtonClose);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.FriendViewUI.uiView);

        }

    }
}

module ui {
    export class HomeViewUI extends View {
		public btn_stocks:Laya.Button;
		public btn_trades:Laya.Button;
		public btn_pet:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","height":1280,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":497,"x":0,"width":720,"skin":"app/home_bgdeep.png","name":"deeper","height":783,"bottom":0}},{"type":"Image","props":{"y":1015,"x":0,"skin":"app/home_bottomcard.png","name":"bgcard","bottom":0}}]},{"type":"Image","props":{"y":0,"x":0,"skin":"app/topbar.png","name":"top"},"child":[{"type":"Button","props":{"y":72,"x":62,"width":70,"stateNum":1,"skin":"app/head.jpg","runtime":"widget.UIButtonProfile","label":" ","height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Sprite","props":{"y":35,"x":35,"width":70,"renderType":"mask","pivotY":35,"pivotX":35,"height":70},"child":[{"type":"Circle","props":{"y":35,"x":35,"radius":35,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Button","props":{"y":185,"x":32,"var":"btn_stocks","stateNum":1,"skin":"app/btn_card.png","name":"btn","height":0},"child":[{"type":"Text","props":{"y":314,"x":112,"width":90,"text":"市 场","scaleX":1,"overflow":"hidden","height":39,"fontSize":30,"font":"Microsoft YaHei","color":"303133","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":565,"x":367,"stateNum":1,"skin":"app/btn_card.png","name":"btn_add","height":0},"child":[{"type":"Image","props":{"x":40,"top":45,"skin":"app/home_card_add.png"}}]},{"type":"Button","props":{"y":185,"x":367,"var":"btn_trades","stateNum":1,"skin":"app/btn_card.png","name":"btn","height":0,"clickView":"stock.ui"},"child":[{"type":"Text","props":{"y":314,"x":94,"width":139,"text":"我的钱包","scaleX":1,"overflow":"hidden","height":39,"fontSize":30,"font":"Microsoft YaHei","color":"303133","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":565,"x":32,"var":"btn_pet","stateNum":1,"skin":"app/btn_card.png","height":0,"clickView":"stock.ui"},"child":[{"type":"Text","props":{"y":314,"x":94,"width":139,"text":"我的宠物","scaleX":1,"overflow":"hidden","height":39,"fontSize":30,"font":"Microsoft YaHei","color":"303133","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonProfile",widget.UIButtonProfile);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HomeViewUI.uiView);

        }

    }
}

module ui {
    export class InfoEditViewUI extends View {
		public ti_nickname:Laya.TextInput;
		public rg_sex:Laya.RadioGroup;
		public ti_job:Laya.TextInput;
		public btn_save:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"name":"enter2","height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg4.png","name":"bg","height":1280}},{"type":"Box","props":{"y":40,"x":0,"width":720,"name":"top","height":115},"child":[{"type":"Button","props":{"top":10,"stateNum":1,"skin":"app/btn_close2.png","runtime":"widget.UIButtonClose","right":40,"name":"btn_back"}},{"type":"Text","props":{"y":0,"x":0,"width":720,"text":"编辑个人信息","height":70,"fontSize":52,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":200,"x":110,"name":"enter1"},"child":[{"type":"TextInput","props":{"x":113,"width":320,"var":"ti_nickname","skin":"app/textinput.png","sizeGrid":"20,20,20,20","overflow":"hidden","height":60,"fontSize":32,"color":"#000000","align":"center"}},{"type":"Text","props":{"y":8,"width":110,"text":"昵称：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","align":"left"}}]},{"type":"Box","props":{"y":314,"x":110,"name":"enter2"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":110,"text":"性别：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","align":"left"}},{"type":"RadioGroup","props":{"y":24,"x":288,"var":"rg_sex","space":40,"skin":"app/radio.png","selectedIndex":0,"labels":"女,男","labelSize":34,"labelFont":"Microsoft YaHei","labelColors":"#000000","labelAlign":"center","direction":"horizontal","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":414,"x":110,"name":"enter3"},"child":[{"type":"TextInput","props":{"x":113,"width":320,"var":"ti_job","skin":"app/textinput.png","sizeGrid":"20,20,20,20","overflow":"hidden","height":60,"fontSize":32,"color":"#000000","align":"center"}},{"type":"Text","props":{"y":8,"width":110,"text":"职业：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","align":"left"}}]},{"type":"Button","props":{"y":577,"width":487,"var":"btn_save","stateNum":1,"skin":"app/btn_1.png","sizeGrid":"20,20,20,20","labelSize":38,"labelPadding":"-5,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"保存","height":115,"centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonClose",widget.UIButtonClose);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.InfoEditViewUI.uiView);

        }

    }
}

module ui {
    export class LoadingViewUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_loading:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"compId":1,"child":[{"type":"Image","props":{"y":640,"x":360,"var":"img_loading","skin":"comp/Img_Pregress.png","name":"loading","anchorY":0.5,"anchorX":0.5},"compId":6}],"animations":[{"nodes":[{"target":6,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":20},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":40}]}},{"target":1,"keyframes":{"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":1,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":1,"key":"x","index":12}],"sceneColor":[{"value":"#000000","tweenMethod":"linearNone","tween":false,"target":1,"key":"sceneColor","index":0},{"value":"#ffffff","tweenMethod":"linearNone","tween":false,"target":1,"key":"sceneColor","index":12}],"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":1,"key":"name","index":0},{"value":"LoadingView","tweenMethod":"linearNone","tween":false,"target":1,"key":"name","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingViewUI.uiView);

        }

    }
}

module ui {
    export class LoginViewUI extends View {
		public btn_start:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","sizeGrid":"1,1,1,1","name":"bg","height":1280,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":497,"x":0,"width":720,"skin":"app/home_bgdeep.png","name":"deeper","height":783,"bottom":0}},{"type":"Image","props":{"y":1015,"x":0,"skin":"app/home_bottomcard.png","name":"bgcard","bottom":0}}]},{"type":"Button","props":{"y":966,"var":"btn_start","stateNum":1,"skin":"app/login_btn.png","clickView":"home.ui","centerX":0}},{"type":"Image","props":{"y":25,"x":449,"skin":"app/login_logo.png","name":"logo","cacheAsBitmap":true,"cacheAs":"bitmap"}},{"type":"Box","props":{"y":527,"width":550,"name":"pic","height":410,"centerX":0},"child":[{"type":"Image","props":{"x":-43,"skin":"app/login_pic.png","name":"pic","centerX":0}}]},{"type":"Box","props":{"y":106,"x":90,"width":456,"name":"wctexe","height":405,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Text","props":{"text":"在这里","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Text","props":{"y":100,"text":"提高你的身价","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Text","props":{"y":200,"text":"就此刻","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Text","props":{"y":300,"text":"活出你的精彩","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.LoginViewUI.uiView);

        }

    }
}

module ui {
    export class PetViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280}},{"type":"Box","props":{"y":40,"x":4,"width":720,"name":"top","height":137},"child":[{"type":"Button","props":{"top":10,"stateNum":1,"skin":"app/btn_close.png","runtime":"widget.UIButtonBack","right":40,"name":"btn_back"}},{"type":"Text","props":{"y":0,"x":268,"width":184,"text":"我的宠物","height":60,"fontSize":46,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Text","props":{"y":58,"x":223,"width":272,"text":"name","height":60,"fontSize":40,"font":"Arial","color":"#e6a23c","align":"center"}}]},{"type":"Box","props":{"y":179,"width":720,"name":"pet","centerX":0},"child":[{"type":"Image","props":{"x":-20,"width":640,"skin":"app/petk.png","sizeGrid":"40,40,40,40","height":640,"centerX":0}},{"type":"Box","props":{"y":38,"x":551},"child":[{"type":"Image","props":{"skin":"app/pet_btn_heart.png"}},{"type":"Text","props":{"y":37,"x":23,"text":"X","fontSize":26,"font":"Arial","color":"#ffffff","align":"left"}}]}]},{"type":"Box","props":{"y":855,"width":241,"right":40,"height":52},"child":[{"type":"ProgressBar","props":{"skin":"app/progress_pet.png"}},{"type":"Box","props":{"y":-12,"x":-31},"child":[{"type":"Image","props":{"skin":"app/icon_heart.png","centerY":0,"centerX":0}},{"type":"Text","props":{"y":15,"x":15,"text":"%","fontSize":26,"font":"Arial","color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":940,"stateNum":1,"skin":"app/pet_btn.png","right":40,"name":"3","labelSize":30,"labelPadding":"-6,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"洗澡"}},{"type":"Button","props":{"y":940,"stateNum":1,"skin":"app/pet_btn.png","name":"2","labelSize":30,"labelPadding":"-6,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"喂养","centerX":5}},{"type":"Button","props":{"y":940,"stateNum":1,"skin":"app/pet_btn.png","name":"1","left":40,"labelSize":30,"labelPadding":"-6,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"玩耍"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.PetViewUI.uiView);

        }

    }
}

module ui {
    export class ProfileViewUI extends View {
		public btn_head:Laya.Button;
		public btn_publish:Laya.Button;
		public btn_edit:Laya.Button;
		public txt_username:laya.display.Text;
		public txt_userjob:laya.display.Text;
		public txt_usersex:laya.display.Text;
		public list_data:Laya.List;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"top","height":220},"child":[{"type":"Button","props":{"y":130,"x":63,"width":70,"var":"btn_head","top":95,"stateNum":1,"skin":"app/head.jpg","name":"btn_avt","height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Sprite","props":{"y":35,"x":35,"width":70,"renderType":"mask","pivotY":35,"pivotX":35,"height":70},"child":[{"type":"Circle","props":{"y":35,"x":35,"radius":35,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Button","props":{"y":144,"x":489,"var":"btn_publish","stateNum":1,"skin":"app/btn_useradd.png","name":"btn_add","labelSize":26,"labelPadding":"0,0,0,18","labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"发布身价"}},{"type":"Button","props":{"y":30,"x":30,"stateNum":1,"skin":"app/btn_back.png","runtime":"widget.UIButtonBack","name":"btn_back"}},{"type":"Button","props":{"y":24,"x":597,"width":85,"var":"btn_edit","name":"btn_edit","labelSize":26,"labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelAlign":"center","label":"编辑","height":48}},{"type":"Box","props":{"y":85,"x":119},"child":[{"type":"Text","props":{"y":0,"x":0,"width":184,"var":"txt_username","text":"Username","name":"name","height":48,"fontSize":38,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":45,"x":0,"width":78,"var":"txt_userjob","text":"职业：","name":"job","height":34,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":80,"x":0,"width":78,"var":"txt_usersex","text":"性别：","name":"sexual","height":34,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}}]}]},{"type":"Image","props":{"y":220,"x":0,"width":720,"skin":"app/bg_sub.png","name":"tag","height":67},"child":[{"type":"Label","props":{"y":17,"x":149,"text":"代码","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":17,"x":380,"text":"现价","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":17,"x":599,"text":"走势","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"List","props":{"y":297,"x":10,"width":720,"var":"list_data","repeatX":1,"height":987},"child":[{"type":"Box","props":{"y":0,"x":0,"width":720,"renderType":"render","height":100},"child":[{"type":"Text","props":{"y":36,"x":204,"width":149,"text":"user","pivotY":24,"pivotX":74,"name":"username","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":48,"x":62,"width":74,"renderType":"render","pivotY":19,"pivotX":42,"height":39},"child":[{"type":"Image","props":{"y":7,"x":9,"skin":"comp/bg_tag.png","sizeGrid":"109,10,10,10"}},{"type":"Text","props":{"y":8,"x":21,"width":36,"text":"职业","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#1b2c3c","bold":true}}]},{"type":"Text","props":{"y":73,"x":204,"width":149,"text":"id","pivotY":24,"pivotX":74,"name":"stockid","height":45,"fontSize":26,"font":"Arial","color":"#8397a9","align":"left"}},{"type":"Text","props":{"y":58,"x":390,"width":250,"text":"num","pivotY":23,"pivotX":125,"name":"price","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":59,"x":622,"width":149,"text":"num","pivotY":24,"pivotX":74,"name":"diff","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ProfileViewUI.uiView);

        }

    }
}

module ui {
    export class PublishViewUI extends View {
		public ti_code:Laya.TextInput;
		public com_type:Laya.ComboBox;
		public btn_custom:Laya.Button;
		public ti_custom:Laya.TextInput;
		public ti_price:Laya.TextInput;
		public txt_totalPrice:laya.display.Text;
		public ti_intro:Laya.TextInput;
		public btn_publish:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"name":"enter2","height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg4.png","name":"bg","height":1280}},{"type":"Box","props":{"y":40,"x":0,"width":720,"name":"top","height":115},"child":[{"type":"Button","props":{"top":10,"stateNum":1,"skin":"app/btn_close2.png","runtime":"widget.UIButtonClose","right":40,"name":"btn_back"}},{"type":"Text","props":{"y":0,"x":0,"width":720,"text":"发布","height":70,"fontSize":52,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":132,"x":110,"name":"enter1"},"child":[{"type":"Text","props":{"y":8,"x":-92,"width":180,"text":"身价代码：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","align":"right"}},{"type":"TextInput","props":{"y":35,"x":265,"width":320,"var":"ti_code","skin":"app/textinput.png","sizeGrid":"20,20,20,20","promptColor":"#d9d3d3","prompt":"输入6位数字英文组合","height":60,"fontSize":30,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Box","props":{"y":207,"x":110,"name":"enter2"},"child":[{"type":"Text","props":{"y":0,"x":-23,"width":110,"text":"类型：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","align":"right"}},{"type":"ComboBox","props":{"y":27,"x":269,"width":320,"var":"com_type","skin":"app/combobox.png","selectedIndex":0,"labels":"聚会,音乐,手艺,烹饪,教育,驾驶","labelSize":28,"labelFont":"SimHei","height":50,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":59,"x":109,"width":326,"var":"btn_custom","skin":"app/radio_d.png","sizeGrid":"10,15,12,16","labelSize":26,"labelFont":"SimHei","labelColors":"#db1828","label":"自定义","height":60}},{"type":"TextInput","props":{"y":129,"x":109,"width":326,"visible":false,"var":"ti_custom","skin":"app/textinput.png","sizeGrid":"12,14,16,15","promptColor":"#d9d3d3","prompt":"输入自定义的类型","height":60,"fontSize":28,"align":"center"}}]},{"type":"Box","props":{"y":413,"x":107,"name":"enter3"},"child":[{"type":"TextInput","props":{"x":113,"width":320,"var":"ti_price","type":"number","skin":"app/textinput.png","sizeGrid":"20,20,20,20","promptColor":"#d9d3d3","prompt":"输入你的发行价","height":60,"fontSize":30,"align":"center"}},{"type":"Text","props":{"y":8,"x":-75,"width":163,"text":"基础身价：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","align":"right"}}]},{"type":"Box","props":{"y":500,"x":107,"name":"enter4"},"child":[{"type":"Text","props":{"y":8,"x":-75,"width":163,"text":"发行数量：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","align":"right"}},{"type":"Label","props":{"y":25,"x":331,"text":"首次发行默认20股(实名认证用户为30)","fontSize":26,"font":"Microsoft YaHei","color":"#ff0000","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":589,"x":110,"name":"enter5"},"child":[{"type":"Text","props":{"y":8,"x":-92,"width":180,"text":"总身价：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","align":"right"}},{"type":"Text","props":{"y":6,"x":111,"width":128,"var":"txt_totalPrice","text":"0身价","height":44,"fontSize":34,"font":"Microsoft YaHei","color":"#409eff","align":"left"}}]},{"type":"Image","props":{"y":672,"skin":"app/pix_line.png","rotation":0,"centerX":0}},{"type":"Box","props":{"y":702,"x":107,"name":"enter6"},"child":[{"type":"TextInput","props":{"y":0,"x":113,"width":320,"var":"ti_intro","skin":"app/textinput.png","sizeGrid":"20,20,20,20","height":112,"fontSize":20,"align":"left"}},{"type":"Text","props":{"y":8,"x":-75,"width":163,"text":"简介：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","align":"right"}}]},{"type":"Image","props":{"y":847,"x":10,"skin":"app/pix_line.png","rotation":0,"centerX":0}},{"type":"Box","props":{"y":888,"x":107,"name":"enter7"},"child":[{"type":"Text","props":{"y":0,"x":-23,"width":110,"text":"类型：","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","cacheAs":"normal","align":"right"}},{"type":"Box","props":{"y":-11,"x":109,"rotation":0},"child":[{"type":"Radio","props":{"skin":"app/radio_d2.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":13,"x":0,"width":320,"text":"定期身价分红","height":47,"fontSize":24,"font":"Microsoft YaHei","color":"#db1828","cacheAs":"normal","align":"center"}}]},{"type":"Box","props":{"y":65,"x":109,"rotation":0},"child":[{"type":"Radio","props":{"skin":"app/radio_d2.png","sizeGrid":"14,14,14,14"}},{"type":"Text","props":{"y":13,"x":0,"width":320,"text":"自定义","height":47,"fontSize":24,"font":"Microsoft YaHei","color":"#db1828","cacheAs":"normal","align":"center"}}]}]},{"type":"Button","props":{"x":60,"width":600,"var":"btn_publish","stateNum":1,"skin":"app/btn_1.png","sizeGrid":"20,20,20,20","labelSize":38,"labelPadding":"-5,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"发布","height":115,"centerX":0,"bottom":63}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonClose",widget.UIButtonClose);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.PublishViewUI.uiView);

        }

    }
}

module ui {
    export class RankViewUI extends View {
		public btn_head:Laya.Button;
		public txt_rank:laya.display.Text;
		public txt_name:laya.display.Text;
		public txt_price:laya.display.Text;
		public list_rank:Laya.List;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg4.png","name":"bg","height":1280}},{"type":"Box","props":{"y":40,"x":4,"width":720,"name":"top","height":115},"child":[{"type":"Button","props":{"top":10,"stateNum":1,"skin":"app/btn_close2.png","runtime":"widget.UIButtonClose","right":40,"name":"btn_back"}},{"type":"Box","props":{"y":-15,"x":268,"width":184,"height":123},"child":[{"type":"Text","props":{"y":67,"width":184,"text":"排行榜","height":60,"fontSize":40,"font":"Microsoft YaHei","color":"#606266","bold":true,"align":"center"}},{"type":"Image","props":{"y":0,"skin":"app/rank_total.png","centerX":0}}]}]},{"type":"Box","props":{"y":161,"width":720,"renderType":"render","name":"myinfo","height":96,"centerX":0},"child":[{"type":"Image","props":{"x":-21,"width":636,"skin":"app/rank_self.png","sizeGrid":"14,14,14,14","height":96,"centerX":0}},{"type":"Button","props":{"x":109,"var":"btn_head","stateNum":1,"skin":"app/btn_avt.png","centerY":0}},{"type":"Text","props":{"y":34,"x":60,"width":37,"var":"txt_rank","text":"00","height":33,"fontSize":30,"font":"Arial","color":"#606266","bold":true}},{"type":"Text","props":{"y":30,"x":201,"width":280,"var":"txt_name","text":"name","height":37,"fontSize":30,"font":"Arial","color":"#606266","bold":false}},{"type":"Text","props":{"y":30,"x":583,"width":94,"var":"txt_price","text":"0身价","height":37,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","bold":false}}]},{"type":"List","props":{"y":259,"x":0,"width":720,"var":"list_rank","height":1033},"child":[{"type":"Box","props":{"width":720,"renderType":"render","name":"list","height":96},"child":[{"type":"Image","props":{"skin":"app/pix_line.png","centerX":0,"bottom":0}},{"type":"Button","props":{"x":109,"stateNum":1,"skin":"app/btn_avt.png","name":"head","centerY":0}},{"type":"Text","props":{"y":34,"x":60,"width":37,"text":"00","name":"rank","height":33,"fontSize":30,"font":"Arial","color":"#606266","bold":true}},{"type":"Text","props":{"y":30,"x":201,"width":280,"text":"name","name":"name","height":37,"fontSize":30,"font":"Arial","color":"#606266","bold":false}},{"type":"Text","props":{"y":30,"x":583,"width":94,"text":"0身价","name":"price","height":37,"fontSize":30,"font":"Microsoft YaHei","color":"#606266","bold":false}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonClose",widget.UIButtonClose);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.RankViewUI.uiView);

        }

    }
}

module ui {
    export class StockViewUI extends View {
		public ti_search:Laya.TextInput;
		public btn_friend:Laya.Button;
		public btn_rank:Laya.Button;
		public list_stock:Laya.List;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280,"cacheAsBitmap":true,"cacheAs":"bitmap"}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"top","height":220},"child":[{"type":"TextInput","props":{"y":42,"x":122,"width":500,"var":"ti_search","type":"text","text":"请输入要搜索的标签","skin":"app/textinput_search.png","sizeGrid":"22,15,22,15","name":"searchbar","height":70,"fontSize":30,"font":"Microsoft YaHei","color":"#c0c4cc","bold":false,"align":"left"}},{"type":"Button","props":{"y":75,"x":62,"width":70,"top":40,"stateNum":1,"skin":"app/head.jpg","name":"btn_avt","height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Sprite","props":{"renderType":"mask"},"child":[{"type":"Circle","props":{"y":35,"x":35,"radius":35,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Button","props":{"x":0,"top":40,"stateNum":1,"skin":"app/btn_home.png","runtime":"widget.UIButtonBack","right":0,"name":"btn_back"}},{"type":"Button","props":{"y":132,"x":120,"width":180,"var":"btn_friend","name":"btn_friendrank","height":72},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"app/btn_friendrank.png"}},{"type":"Text","props":{"y":16,"x":80,"text":"好友圈","fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":132,"x":420,"width":180,"var":"btn_rank","name":"btn_totalrank","height":72},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"app/btn_ranktotal.png"}},{"type":"Text","props":{"y":16,"x":75,"text":"排行榜","fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]}]},{"type":"Image","props":{"y":220,"x":0,"width":720,"skin":"app/bg_sub.png","name":"tag","height":67,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Label","props":{"y":16,"x":149,"text":"代码","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":16,"x":375,"text":"现价","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":16,"x":599,"text":"走势","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"List","props":{"y":287,"x":0,"width":720,"var":"list_stock","selectEnable":true,"repeatX":1,"height":987},"child":[{"type":"Box","props":{"y":0,"x":0,"width":720,"renderType":"render","height":100},"child":[{"type":"Text","props":{"y":36,"x":204,"width":149,"text":"user","pivotY":24,"pivotX":74,"overflow":"hidden","name":"username","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":48,"x":62,"width":74,"renderType":"render","pivotY":19,"pivotX":42,"height":39},"child":[{"type":"Image","props":{"y":7,"x":9,"skin":"comp/bg_tag.png","sizeGrid":"109,10,10,10"}},{"type":"Text","props":{"y":8,"x":21,"width":36,"text":"职业","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#1b2c3c","bold":true}}]},{"type":"Text","props":{"y":73,"x":204,"width":149,"text":"id","pivotY":24,"pivotX":74,"overflow":"visible","name":"stockid","height":45,"fontSize":26,"font":"Arial","color":"#8397a9","align":"left"}},{"type":"Text","props":{"y":59,"x":403,"width":200,"text":"num","pivotY":24,"pivotX":100,"overflow":"visible","name":"price","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":55,"x":622,"width":149,"text":"num","pivotY":24,"pivotX":74,"name":"diff","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.StockViewUI.uiView);

        }

    }
}

module ui {
    export class WalletViewUI extends View {
		public txt_hold:laya.display.Text;
		public txt_totalValue:laya.display.Text;
		public txt_myDiff:laya.display.Text;
		public tab_orders:Laya.Tab;
		public list_orders:Laya.List;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280,"cacheAsBitmap":true,"cacheAs":"bitmap"}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"top","height":310,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Button","props":{"y":76,"x":63,"width":70,"top":40,"stateNum":1,"skin":"app/head.jpg","name":"btn_avt","height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Sprite","props":{"y":35,"x":35,"width":70,"renderType":"mask","pivotY":35,"pivotX":35,"height":70},"child":[{"type":"Circle","props":{"y":35,"x":35,"radius":35,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Button","props":{"y":40,"x":633,"top":40,"stateNum":1,"skin":"app/btn_home.png","runtime":"widget.UIButtonBack","right":0,"name":"btn_back"}},{"type":"Text","props":{"y":40,"x":270,"width":184,"text":"我的钱包","renderType":"instance","height":60,"fontSize":46,"font":"Microsoft YaHei","color":"#ffffff","cacheAs":"normal","bold":true}},{"type":"Box","props":{"y":124,"name":"info1","left":27},"child":[{"type":"Image","props":{"y":0,"x":0,"width":190,"skin":"app/wallet_info.png","sizeGrid":"42,19,16,17","height":96}},{"type":"Text","props":{"y":3,"x":4,"width":183,"text":"持有","height":32,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":39,"x":4,"width":183,"var":"txt_hold","height":59,"fontSize":42,"font":"Arial","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":124,"name":"info2","centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":190,"skin":"app/wallet_info.png","sizeGrid":"42,19,16,17","height":96}},{"type":"Text","props":{"y":3,"x":4,"width":183,"text":"总资产","height":32,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":39,"x":4,"width":183,"var":"txt_totalValue","height":59,"fontSize":42,"font":"Arial","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":122,"right":27,"name":"info3"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":190,"skin":"app/wallet_info.png","sizeGrid":"42,19,16,17","height":96}},{"type":"Text","props":{"y":3,"x":4,"width":183,"text":"走势","height":32,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":39,"x":4,"width":183,"var":"txt_myDiff","height":59,"fontSize":42,"font":"Arial","color":"#ffffff","align":"center"}}]}]},{"type":"Tab","props":{"y":234,"var":"tab_orders","space":40,"skin":"app/wallet_tab.png","selectedIndex":0,"labels":"待交易,交易记录","labelSize":30,"labelPadding":"-8,0,0,0","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelAlign":"center","direction":"horizontal","centerX":0}},{"type":"Image","props":{"y":310,"x":1,"width":720,"skin":"app/bg_sub.png","name":"tag","height":67,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Label","props":{"y":14,"x":129,"text":"代 码","fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":288,"text":"操 作","fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":449,"text":"价 格","fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":622,"text":"数 量","fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"List","props":{"y":378,"x":0,"width":720,"var":"list_orders","repeatX":1,"height":896},"child":[{"type":"Box","props":{"y":0,"x":0,"width":720,"renderType":"render","height":100},"child":[{"type":"Text","props":{"y":50,"x":129,"width":149,"pivotY":24,"pivotX":74,"name":"code","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":50,"x":293,"width":149,"pivotY":24,"pivotX":74,"name":"action","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":50,"x":453,"width":149,"pivotY":24,"pivotX":74,"name":"price","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":50,"x":625,"width":149,"pivotY":24,"pivotX":74,"name":"count","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":50,"x":772,"width":100,"name":"delete","labelSize":32,"labelColors":"#ffffff","labelAlign":"center","label":"删 除","height":100,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Rect","props":{"width":100,"lineWidth":1,"height":100,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":232,"x":0,"skin":"app/wallet_line.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.WalletViewUI.uiView);

        }

    }
}
