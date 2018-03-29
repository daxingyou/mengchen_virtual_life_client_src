
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
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
