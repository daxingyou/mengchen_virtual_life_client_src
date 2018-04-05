
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.views {
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
		public txt_buynum:laya.display.Text;
		public sld_num:Laya.HSlider;
		public btn_checkout:Laya.Button;
		public txt_totalbuyprice:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"top","height":112},"child":[{"type":"Button","props":{"x":105,"var":"btn_head","top":19,"stateNum":1,"skin":"app/btn_avt.png","name":"btn_avt"}},{"type":"Button","props":{"y":30,"x":30,"stateNum":1,"skin":"app/btn_back.png","runtime":"widget.UIButtonBack","name":"btn_back"}},{"type":"Button","props":{"y":35,"x":633,"width":48,"var":"btn_share","stateNum":1,"skin":"app/btn_share.png","name":"btn_share","labelSize":26,"labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelAlign":"center","height":48}},{"type":"Box","props":{"y":13,"x":197},"child":[{"type":"Box","props":{"y":64,"x":36,"width":74,"renderType":"render","pivotY":19,"pivotX":42,"height":39},"child":[{"type":"Image","props":{"y":7,"x":9,"skin":"comp/bg_tag.png","sizeGrid":"109,10,10,10"}},{"type":"Text","props":{"y":8,"x":21,"width":36,"text":"职业","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#1b2c3c","bold":true}}]},{"type":"Text","props":{"y":4,"x":0,"width":184,"var":"txt_username","text":"Username","name":"name","height":48,"fontSize":34,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":43,"x":73,"width":78,"var":"txt_job","text":"职业","name":"job","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}}]}]},{"type":"Box","props":{"y":122,"x":1,"width":717,"height":955},"child":[{"type":"Box","props":{"y":0,"x":40,"name":"notic"},"child":[{"type":"Text","props":{"width":78,"text":" 介绍：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}}]},{"type":"Image","props":{"y":85,"x":42,"skin":"app/pix_line.png","name":"line","centerX":0}},{"type":"Box","props":{"y":100,"x":40,"width":294,"name":"maxprice","height":44},"child":[{"type":"Text","props":{"width":150,"text":"历史最高价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":160,"width":150,"var":"txt_highprice","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":100,"x":356,"var":"minprice"},"child":[{"type":"Text","props":{"width":150,"text":"历史最低价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":160,"width":150,"var":"txt_lowprice","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":149,"x":40,"name":"nowprice"},"child":[{"type":"Text","props":{"width":173,"text":"即时购买价格：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":180,"width":150,"var":"txt_price","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":200,"x":40,"width":342,"name":"lasttime","height":44},"child":[{"type":"Text","props":{"width":115,"text":"剩余时间","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":122,"width":150,"var":"txt_timeleft","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#f56c6c"}}]},{"type":"Box","props":{"y":200,"x":407,"width":268,"name":"cardnum","height":44},"child":[{"type":"Text","props":{"width":126,"text":"卡片号码：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":129,"width":150,"var":"txt_number","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#fffff"}}]},{"type":"Box","props":{"y":240,"x":40,"var":"bx_depth","name":"pic_point"},"child":[{"type":"Image","props":{"var":"img_kLines","skin":"app/list2.png"}},{"type":"Box","props":{"y":8,"x":490,"name":"s3"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"卖3","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"3","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":40,"x":490,"name":"s2"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"卖2","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"3","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":71,"x":490,"name":"s1"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"卖1","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"3","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":107,"x":490,"name":"b1"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"买1","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"3","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":139,"x":490,"name":"b2"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"买2","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"3","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":170,"x":490,"name":"b3"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":34,"text":"买3","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":42,"width":60,"text":"00.00","name":"price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#bd3516","align":"center"}},{"type":"Text","props":{"y":0,"x":106,"width":27,"text":"3","name":"count","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":462,"x":40,"width":282,"name":"startprice","height":44},"child":[{"type":"Text","props":{"width":115,"text":"起始价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":99,"width":150,"height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":462,"x":360,"name":"endprice"},"child":[{"type":"Text","props":{"width":105,"text":"结束价：","height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":102,"width":150,"height":44,"fontSize":26,"font":"Microsoft YaHei","color":"#409eff"}}]},{"type":"Box","props":{"y":519,"x":40,"name":"history"},"child":[{"type":"Image","props":{"skin":"app/lister1.png"}},{"type":"Box","props":{"y":0,"x":0,"width":633,"name":"type","height":40},"child":[{"type":"Text","props":{"y":6,"x":6,"width":191,"text":"最近交易时间","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":6,"x":204,"width":118,"text":"单价","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":6,"x":329,"width":116,"text":"数量","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":6,"x":455,"width":172,"text":"总价","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"List","props":{"y":40,"x":0,"width":633,"var":"list_history","repeatY":5,"repeatX":1,"height":210},"child":[{"type":"Box","props":{"y":0,"x":0,"width":633,"renderType":"render","name":"lister","height":42},"child":[{"type":"Text","props":{"y":8,"x":6,"width":191,"text":"0000-00-00","name":"his_time","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":8,"x":204,"width":118,"name":"his_unitprice","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":8,"x":329,"width":116,"name":"his_num","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":8,"x":455,"width":172,"name":"his_price","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]}]}]}]},{"type":"Box","props":{"x":0,"width":720,"name":"foot","height":380,"bottom":0},"child":[{"type":"Image","props":{"x":0,"width":720,"skin":"app/bg3.png","height":370,"bottom":0}},{"type":"Button","props":{"y":40,"x":520,"width":159,"var":"btn_custom","stateNum":1,"skin":"app/foot_custom.png","sizeGrid":"0,25,0,25","name":"custom","height":48},"child":[{"type":"Text","props":{"y":8,"x":20,"width":120,"text":"自定义数量","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#1b2c3c"}}]},{"type":"Box","props":{"y":40,"x":40,"name":"info"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":317,"skin":"app/foot_info.png","sizeGrid":"0,25,0,25","height":48}},{"type":"Box","props":{"x":24,"name":"have","centerY":0},"child":[{"type":"Text","props":{"y":0,"x":0,"width":96,"text":"已持有：","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":91,"width":73,"var":"txt_holdnum","text":"0","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}}]},{"type":"Box","props":{"y":10,"x":181,"name":"buy","centerY":0},"child":[{"type":"Text","props":{"y":0,"x":0,"width":96,"text":"购入：","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":0,"x":66,"width":73,"var":"txt_buynum","height":34,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff"}}]}]},{"type":"HSlider","props":{"y":126,"x":45,"width":634,"var":"sld_num","value":25,"skin":"app/hslider.png","min":-100,"max":100,"height":52,"centerX":0},"child":[{"type":"Box","props":{"y":26,"width":644,"height":29,"centerX":2},"child":[{"type":"Text","props":{"y":0,"x":-4,"width":40,"text":"100","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#67c23a","align":"center"}},{"type":"Text","props":{"y":0,"x":149,"width":40,"text":"50","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#67c23a","align":"center"}},{"type":"Text","props":{"y":0,"x":301,"width":40,"text":"0","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":0,"x":453,"width":40,"text":"50","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f56c6c","align":"center"}},{"type":"Text","props":{"y":0,"x":605,"width":40,"text":"100","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f56c6c","align":"center"}}]}]},{"type":"Image","props":{"y":186,"skin":"app/pix_line.png","name":"line","centerX":0}},{"type":"Button","props":{"y":212,"var":"btn_checkout","stateNum":1,"skin":"app/btn_1.png","right":40},"child":[{"type":"Text","props":{"y":26,"x":67,"width":174,"text":"结 算","height":63,"fontSize":46,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":221,"width":231,"name":"total","left":40,"height":104},"child":[{"type":"Text","props":{"y":0,"x":0,"width":127,"text":"买入总价","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":40,"x":0,"width":127,"var":"txt_totalbuyprice","height":61,"fontSize":46,"font":"Microsoft YaHei","color":"#f56c6c","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.views.CardInfoViewUI.uiView);

        }

    }
}

module ui.views {
    export class HomeViewUI extends View {
		public btn_stocks:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","height":1280,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":497,"x":0,"width":720,"skin":"app/home_bgdeep.png","name":"deeper","height":783,"bottom":0}},{"type":"Image","props":{"y":1015,"x":0,"skin":"app/home_bottomcard.png","name":"bgcard","bottom":0}}]},{"type":"Image","props":{"y":0,"x":0,"skin":"app/topbar.png","name":"top"},"child":[{"type":"Button","props":{"y":36,"x":26,"stateNum":1,"skin":"app/btn_avt.png","runtime":"widget.UIButtonProfile","label":" "}}]},{"type":"Button","props":{"y":186,"x":32,"var":"btn_stocks","stateNum":1,"skin":"app/btn_card.png","name":"btn","height":0,"clickView":"stock.ui"},"child":[{"type":"Text","props":{"y":314,"x":112,"width":90,"text":"卡片名","scaleX":1,"overflow":"hidden","height":39,"fontSize":30,"font":"Microsoft YaHei","color":"303133","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":186,"x":367,"stateNum":1,"skin":"app/btn_card.png","name":"btn_add","height":0},"child":[{"type":"Image","props":{"x":40,"top":45,"skin":"app/home_card_add.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonProfile",widget.UIButtonProfile);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.views.HomeViewUI.uiView);

        }

    }
}

module ui.views {
    export class LoadingViewUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_loading:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"compId":1,"child":[{"type":"Image","props":{"y":640,"x":360,"var":"img_loading","skin":"comp/Img_Pregress.png","name":"loading","anchorY":0.5,"anchorX":0.5},"compId":6}],"animations":[{"nodes":[{"target":6,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":-180,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":20},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":40}]}},{"target":1,"keyframes":{"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":1,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":1,"key":"x","index":12}],"sceneColor":[{"value":"#000000","tweenMethod":"linearNone","tween":false,"target":1,"key":"sceneColor","index":0},{"value":"#ffffff","tweenMethod":"linearNone","tween":false,"target":1,"key":"sceneColor","index":12}],"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":1,"key":"name","index":0},{"value":"LoadingView","tweenMethod":"linearNone","tween":false,"target":1,"key":"name","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.views.LoadingViewUI.uiView);

        }

    }
}

module ui.views {
    export class LoginViewUI extends View {
		public btn_start:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"bg","height":1280,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":497,"x":0,"width":720,"skin":"app/home_bgdeep.png","name":"deeper","height":783,"bottom":0}},{"type":"Image","props":{"y":1015,"x":0,"skin":"app/home_bottomcard.png","name":"bgcard","bottom":0}}]},{"type":"Button","props":{"y":966,"var":"btn_start","stateNum":1,"skin":"app/login_btn.png","clickView":"home.ui","centerX":0}},{"type":"Image","props":{"y":25,"x":449,"skin":"app/login_logo.png","name":"logo","cacheAsBitmap":true,"cacheAs":"bitmap"}},{"type":"Box","props":{"y":527,"width":550,"name":"pic","height":410,"centerX":0},"child":[{"type":"Image","props":{"x":-43,"skin":"app/login_pic.png","name":"pic","centerX":0}}]},{"type":"Box","props":{"y":106,"x":90,"width":456,"name":"wctexe","height":405,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Text","props":{"text":"在这里","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Text","props":{"y":100,"text":"提高你的身价","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Text","props":{"y":200,"text":"就此刻","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Text","props":{"y":300,"text":"活出你的精彩","fontSize":76,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.views.LoginViewUI.uiView);

        }

    }
}

module ui.views {
    export class PopupTestViewUI extends View {
		public Btn_Close:widget.UIButtonClose;

        public static  uiView:any ={"type":"View","props":{"y":640,"x":360,"width":720,"height":1280,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"comp/zhuangtaikuang.png","height":1280,"sizeGrid":"12,18,11,16"}},{"type":"Button","props":{"y":33,"x":589,"var":"Btn_Close","stateNum":1,"skin":"comp/Close.png","runtime":"widget.UIButtonClose","name":"ButtonClose"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonClose",widget.UIButtonClose);

            super.createChildren();
            this.createView(ui.views.PopupTestViewUI.uiView);

        }

    }
}

module ui.views {
    export class ProfileViewUI extends View {
		public btn_head:Laya.Button;
		public btn_publish:Laya.Button;
		public btn_edit:Laya.Button;
		public txt_username:laya.display.Text;
		public txt_userjob:laya.display.Text;
		public txt_usersex:laya.display.Text;
		public list_data:Laya.List;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"top","height":220},"child":[{"type":"Button","props":{"x":28,"var":"btn_head","top":95,"stateNum":1,"skin":"app/btn_avt.png","name":"btn_avt"}},{"type":"Button","props":{"y":144,"x":489,"var":"btn_publish","stateNum":1,"skin":"app/btn_useradd.png","name":"btn_add","labelSize":26,"labelPadding":"0,0,0,18","labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"发布身价"}},{"type":"Button","props":{"y":30,"x":30,"stateNum":1,"skin":"app/btn_back.png","runtime":"widget.UIButtonBack","name":"btn_back"}},{"type":"Button","props":{"y":24,"x":597,"width":85,"var":"btn_edit","name":"btn_edit","labelSize":26,"labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelAlign":"center","label":"编辑","height":48}},{"type":"Box","props":{"y":85,"x":119},"child":[{"type":"Text","props":{"y":0,"x":0,"width":184,"var":"txt_username","text":"Username","name":"name","height":48,"fontSize":38,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":45,"x":0,"width":78,"var":"txt_userjob","text":"职业：","name":"job","height":34,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":80,"x":0,"width":78,"var":"txt_usersex","text":"性别：","name":"sexual","height":34,"fontSize":26,"font":"Microsoft YaHei","color":"#ffffff"}}]}]},{"type":"Image","props":{"y":220,"x":0,"width":720,"skin":"app/bg_sub.png","name":"tag","height":67},"child":[{"type":"Label","props":{"y":17,"x":149,"text":"代码","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":17,"x":380,"text":"现价","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":17,"x":599,"text":"走势","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"List","props":{"y":297,"x":10,"width":720,"var":"list_data","repeatX":1,"height":987},"child":[{"type":"Box","props":{"y":0,"x":0,"width":720,"renderType":"render","height":100},"child":[{"type":"Text","props":{"y":36,"x":204,"width":149,"text":"user","pivotY":24,"pivotX":74,"name":"username","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":48,"x":62,"width":74,"renderType":"render","pivotY":19,"pivotX":42,"height":39},"child":[{"type":"Image","props":{"y":7,"x":9,"skin":"comp/bg_tag.png","sizeGrid":"109,10,10,10"}},{"type":"Text","props":{"y":8,"x":21,"width":36,"text":"职业","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#1b2c3c","bold":true}}]},{"type":"Text","props":{"y":73,"x":204,"width":149,"text":"id","pivotY":24,"pivotX":74,"name":"stockid","height":45,"fontSize":26,"font":"Arial","color":"#8397a9","align":"left"}},{"type":"Text","props":{"y":58,"x":390,"width":250,"text":"num","pivotY":23,"pivotX":125,"name":"price","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":59,"x":622,"width":149,"text":"num","pivotY":24,"pivotX":74,"name":"diff","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.views.ProfileViewUI.uiView);

        }

    }
}

module ui.views {
    export class StockViewUI extends View {
		public ti_search:Laya.TextInput;
		public btn_friend:Laya.Button;
		public btn_rank:Laya.Button;
		public list_stock:Laya.List;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"height":1280,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg2.png","name":"bg","height":1280,"cacheAsBitmap":true,"cacheAs":"bitmap"}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"app/bg.png","name":"top","height":220},"child":[{"type":"TextInput","props":{"y":42,"x":122,"width":500,"var":"ti_search","type":"text","text":"请输入要搜索的标签","skin":"app/textinput_search.png","sizeGrid":"22,15,22,15","name":"searchbar","height":70,"fontSize":30,"font":"Microsoft YaHei","color":"#c0c4cc","bold":false,"align":"left"}},{"type":"Button","props":{"x":27,"top":40,"stateNum":1,"skin":"app/btn_avt.png","name":"btn_avt"}},{"type":"Button","props":{"x":0,"top":40,"stateNum":1,"skin":"app/btn_home.png","runtime":"widget.UIButtonBack","right":0,"name":"btn_back"}},{"type":"Button","props":{"y":132,"x":120,"width":180,"var":"btn_friend","name":"btn_friendrank","height":72},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"app/btn_friendrank.png"}},{"type":"Text","props":{"y":16,"x":80,"text":"好友圈","fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":132,"x":420,"width":180,"var":"btn_rank","name":"btn_totalrank","height":72},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"app/btn_ranktotal.png"}},{"type":"Text","props":{"y":16,"x":75,"text":"排行榜","fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]}]},{"type":"Image","props":{"y":220,"x":0,"width":720,"skin":"app/bg_sub.png","name":"tag","height":67,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Label","props":{"y":16,"x":149,"text":"代码","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":16,"x":375,"text":"现价","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":16,"x":599,"text":"走势","fontSize":26,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"List","props":{"y":287,"x":0,"width":720,"var":"list_stock","selectEnable":true,"repeatX":1,"height":987},"child":[{"type":"Box","props":{"y":0,"x":0,"width":720,"renderType":"render","height":100},"child":[{"type":"Text","props":{"y":36,"x":204,"width":149,"text":"user","pivotY":24,"pivotX":74,"overflow":"hidden","name":"username","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":48,"x":62,"width":74,"renderType":"render","pivotY":19,"pivotX":42,"height":39},"child":[{"type":"Image","props":{"y":7,"x":9,"skin":"comp/bg_tag.png","sizeGrid":"109,10,10,10"}},{"type":"Text","props":{"y":8,"x":21,"width":36,"text":"职业","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#1b2c3c","bold":true}}]},{"type":"Text","props":{"y":73,"x":204,"width":149,"text":"id","pivotY":24,"pivotX":74,"overflow":"visible","name":"stockid","height":45,"fontSize":26,"font":"Arial","color":"#8397a9","align":"left"}},{"type":"Text","props":{"y":59,"x":403,"width":200,"text":"num","pivotY":24,"pivotX":100,"overflow":"visible","name":"price","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":55,"x":622,"width":149,"text":"num","pivotY":24,"pivotX":74,"name":"diff","height":45,"fontSize":30,"font":"Arial","color":"#ffffff","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.views.StockViewUI.uiView);

        }

    }
}

module ui.views {
    export class WelcomeViewUI extends View {
		public Btn_Back:widget.UIButtonBack;
		public Btn_Test:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":640,"x":360,"staticCache":true,"skin":"comp/sakura_bg.png","cacheAsBitmap":true,"cacheAs":"bitmap","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":143,"x":0,"var":"Btn_Back","stateNum":1,"skin":"comp/Return.png","runtime":"widget.UIButtonBack","name":"ButtonBack"}},{"type":"Button","props":{"y":558,"x":305,"var":"Btn_Test","stateNum":1,"skin":"comp/BottonBlue.png","name":"ButtonTest","labelSize":30,"labelBold":true,"label":"测试"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("widget.UIButtonBack",widget.UIButtonBack);

            super.createChildren();
            this.createView(ui.views.WelcomeViewUI.uiView);

        }

    }
}
