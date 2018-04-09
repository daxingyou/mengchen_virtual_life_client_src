    module  controllers{
    /*
    * class SceneController;
    */    
    export class SceneController{
        //Singleton
        public static Instance: SceneController = new SceneController();

        private dis:Dispatcher = Dispatcher.getInstance();

        private viewPool:{[name: string]:any}[] = [];

        private popupPool:{[name: string]:any}[] = [];

        private currentView:any = null;

        constructor(){
            this.init();
        }

        private init() {
            //init sth like scenes
            this.dis.receive(ConstEvent.REPLACE_VIEW, this, this.onReplaceView);
            this.dis.receive(ConstEvent.PUSH_VIEW, this, this.onPushView);
            this.dis.receive(ConstEvent.POP_VIEW, this, this.onPopView);
            this.dis.receive(ConstEvent.POPUP_VIEW, this, this.onPopupView);
            this.dis.receive(ConstEvent.DESTORY_VIEW, this, this.onDestoryView);
        }

        private onReplaceView(name:string){
            if(name == null){
                this.noNameError("on replace view");
                return;
            }
            console.log("SceneController on replace View: ",name);
            var newView = new view[name]();
            if(newView != null){
                if(this.currentView != null){
                    Laya.stage.removeChild(this.currentView);
                }
                this.currentView = newView;
            }
            Laya.stage.addChild(this.currentView);
            this.viewPool.push({name,newView});            
        }

        private onPushView(name:string) {
            if(name == null){
                this.noNameError("on push view");
                return;
            }
            console.log("SceneController on push View: ",name);

            var newView = new view[name]();
            if(newView != null){
                if(this.currentView != null){
                    var tmp:laya.ui.View = <laya.ui.View>this.currentView;
                    Laya.Tween.to(tmp, {x:-720}, 300, null, new Handler(this,()=>{
                        tmp.visible = false;
                    }));
                    // tmp.visible = false;
                }
                this.currentView = newView;
                Laya.Tween.from(this.currentView,{x:720},300);
            }
            this.viewPool.push({name,newView});
            Laya.stage.addChild(this.currentView);

            console.log("view pool size :%d",this.viewPool.length);
        }

        private onPopView() {       
            console.log("SceneController on pop View");

            if(this.currentView != null){
                this.viewPool.pop();
                var currentTmp = this.currentView;
                Laya.Tween.to(currentTmp, {x:720}, 300, null, new Handler(this,()=>{
                    Laya.stage.removeChild(currentTmp);
                }));
                //Laya.stage.removeChild(this.currentView);
            }

            if(this.viewPool.length > 0){
                this.currentView = this.viewPool[this.viewPool.length-1]["newView"];
                console.log("SceneController number after pop : %d",this.viewPool.length);
                var newTmp:laya.ui.View = <laya.ui.View>this.currentView;
                console.log("SceneController view after pop : %s",newTmp.name);
                newTmp.x=-720;
                newTmp.visible = true; 
                Laya.Tween.to(newTmp, {x:0}, 300);                               
            }else{
                console.log("SceneController not view in viewpool : %d",this.viewPool.length);
            }
        }

        private onPopupView(name:string) {
            if(name == null){
                this.noNameError("on popup view");
                return;
            }            
            console.log("SceneController on popup View: ",name);
            var newView = new view[name]();
            var tmp:laya.ui.View = <laya.ui.View>newView;
            tmp.name = name;              

            Laya.stage.addChild(newView);

            Laya.Tween.from(tmp, {scaleX:0,scaleY:0}, 500,Laya.Ease.elasticInOut);

            this.popupPool.push({name,newView});
        }

        private onDestoryView() {        
            console.log("SceneController on destory popup View");

            if(this.popupPool.length > 0 ){
                var tmp:laya.ui.View = <laya.ui.View>this.popupPool.pop()["newView"];
                Laya.stage.removeChild(tmp);
            }
            else{
                console.log("SceneController not view in popuppool");
            }
        }

        private noNameError(name:string){
            console.error("SceneController %s error, view name can not be null",name);
        }                        

        static getInstance():SceneController{
            if(SceneController.Instance == null)
                SceneController.Instance = new SceneController();
            return SceneController.Instance;
        }
    }
}

