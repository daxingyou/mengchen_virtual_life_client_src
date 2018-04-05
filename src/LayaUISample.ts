import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
//import loading = view.views.LoadingView
//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(720, 1280);
//屏幕适配
Laya.stage.scaleMode = laya.display.Stage.SCALE_FIXED_HEIGHT;
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad(){
	var resources = ["app/login_btn.png",
					"app/home_bgdeep.png",
					"app/home_bottomcard.png",
					"app/hslider.png",
					"app/list2.png",
					"app/lister1.png",
					"app/login_pic.png",
					"app/pix_line.png",
					"app/topbar.png",
					"res/atlas/app.atlas",
					"res/atlas/comp.atlas"];
	Laya.loader.load(resources, Handler.create(null, onLoaded));
}

function onLoaded(): void {
	//实例UI界面
	Laya.Stat.show(Laya.Browser.clientWidth - 120 >> 1, Laya.Browser.clientHeight - 100 >> 1);
	controllers.SceneController.getInstance();
	// var testUI = Object.create(window["LoadingView1"].prototype);
	// console.log("1 testui ",testUI)
	// var testUI: any = new view.views["LoadingView"]();//new loading();//Views.Instance.getView("Loading");
	// testUI.showLoading();
	// Laya.stage.addChild(testUI);

	Dispatcher.getInstance().send(ConstEvent.PUSH_VIEW,ConstViews.LOGIN);
}