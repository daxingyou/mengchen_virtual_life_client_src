/*
* name;
*/
class UserInfo{
    // public static Instance: UserInfo = new UserInfo();

    public static UserInfoPriceData:Array<any> = [];

    public static UserOrdersYet:Array<any> = [];

    public static UserOrdersDone:Array<any> = [];

    public static UserName:string = "";

    public static UserId:Number = 0;

    public static UserSex:string = "男";

    public static Career:string = "";

    public static TotalPrice:Number = 0;

    public static Openid:string = "";

    public static RealName:string = "";

    public static IdentityID:string = "";

    public static Introduction:string = "";

    public static GamePoints:Number = 0;

    public static Points:Number = 0;

    public static FrozenPoints:Number = 0;

    public static CreateTime:string = "";

    constructor(){

    }

    static setUserInfo(data:any){
        console.log(data);
        var jsonData = JSON.parse(data);
        UserInfo.UserId = Number(jsonData.id);
        UserInfo.UserName = jsonData.nickname;
        UserInfo.Openid = jsonData.openid;
        UserInfo.UserSex = jsonData.gender == 1 ? "男" : "女";
        UserInfo.Career = jsonData.profession;
        UserInfo.RealName = jsonData.real_name;
        UserInfo.IdentityID = jsonData.identity_id;
        UserInfo.Introduction = jsonData.intro;
        UserInfo.GamePoints = Number(jsonData.game_points);
        UserInfo.Points = Number(jsonData.points);
        UserInfo.FrozenPoints = Number(jsonData.frozen_points);
        UserInfo.CreateTime = jsonData.created_at;

        UserInfo.UserInfoPriceData = jsonData.stocks;

        UserInfo.printUserInfo();
    }

    static printUserInfo(){
        UserInfo.UserId = 1000;
        console.log("[UserID:%d ,NickName:%s ,OpenID:%s ,Sex:%s ,Career:%s ,RealName:%s ,ID:%s ,Introduction:%s ,GamePts:%d ,Points:%d ,FrozenPts:%d ,Create:%s]",
        UserInfo.UserId,UserInfo.UserName,UserInfo.Openid,UserInfo.UserSex,UserInfo.Career,UserInfo.RealName,UserInfo.IdentityID,UserInfo.Introduction,UserInfo.GamePoints,UserInfo.Points,UserInfo.FrozenPoints,UserInfo.CreateTime);
    }

    // static getInstance():UserInfo{
    //     if(UserInfo.Instance == null)
    //         UserInfo.Instance = new UserInfo();
    //     return UserInfo.Instance;
    // }
}