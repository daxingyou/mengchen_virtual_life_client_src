/*
* name;
*/
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    UserInfo.setUserInfo = function (data) {
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
        UserInfo.TotalPoints = Number(jsonData.rong_yao_points);
        UserInfo.FrozenPoints = Number(jsonData.frozen_points);
        UserInfo.CreateTime = jsonData.created_at;
        UserInfo.UserInfoPriceData = jsonData.stocks;
        UserInfo.printUserInfo();
    };
    UserInfo.printUserInfo = function () {
        UserInfo.UserId = 1000;
        console.log("[UserID:%d ,NickName:%s ,OpenID:%s ,Sex:%s ,Career:%s ,RealName:%s ,ID:%s ,Introduction:%s ,GamePts:%d ,Points:%d ,FrozenPts:%d ,Create:%s]", UserInfo.UserId, UserInfo.UserName, UserInfo.Openid, UserInfo.UserSex, UserInfo.Career, UserInfo.RealName, UserInfo.IdentityID, UserInfo.Introduction, UserInfo.GamePoints, UserInfo.Points, UserInfo.FrozenPoints, UserInfo.CreateTime);
    };
    // public static Instance: UserInfo = new UserInfo();
    UserInfo.UserInfoPriceData = [];
    UserInfo.UserOrdersYet = [];
    UserInfo.UserOrdersDone = [];
    UserInfo.UserName = "";
    UserInfo.UserId = 0;
    UserInfo.UserSex = "男";
    UserInfo.Career = "";
    UserInfo.TotalPrice = 0;
    UserInfo.Openid = "";
    UserInfo.RealName = "";
    UserInfo.IdentityID = "";
    UserInfo.Introduction = "";
    UserInfo.GamePoints = 0;
    UserInfo.Points = 0;
    UserInfo.TotalPoints = 0;
    UserInfo.FrozenPoints = 0;
    UserInfo.CreateTime = "";
    UserInfo.UserHead = "app/head.jpg";
    return UserInfo;
}());
//# sourceMappingURL=UserInfo.js.map