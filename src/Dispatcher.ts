/*
* Dispatcher;
*/
import EventDispatcher = laya.events.EventDispatcher;

class Dispatcher{
    static Instance: Dispatcher = new Dispatcher();

    private dis = new EventDispatcher();
    constructor(){

    }

    send(name:string, data?:any):boolean{
        if( this.dis.hasListener(name))
            return this.dis.event(name, data);
        return false;
    }

    receive(name:string, caller:any, listener:Function, args?:any){
        this.dis.on(name, caller, listener, args);
    }

    receiveOnce(name:string, caller:any, listener:Function, args?:any){
        this.dis.once(name, caller, listener, args);
    }

    destory(name:string, caller:any, listener:Function, onceOnly:boolean = false){
        this.dis.off(name, caller, listener, onceOnly);
    }

    destoryAll(name?:string){
        this.dis.offAll(name);
    }

    static getInstance():Dispatcher{
        if(Dispatcher.Instance == null)
            Dispatcher.Instance = new Dispatcher();
        return Dispatcher.Instance;
    }    
}