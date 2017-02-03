function checkLogin(userid, pwd){
    if(userid===pwd){
        return "<b> Welcome "+userid+"</b>";
    }
    else{
        return "<b> Invalid Userid and Password </b>";
    }
}
module.exports=checkLogin;
