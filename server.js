// 1. Static file server
// 2. routing
// 3. template
// 4. request
var http=require("http");
var fs = require("fs");
var path = require("path");
var urlObj = require("url");
var userModule = require("./js/login");
http.createServer(handleRequestResponse).listen(1234,function(){
    console.log("Server Start");
});
function handleRequestResponse(request, response){
    response.writeHead(200,"text/html");
    var url = request.url;
    var method = request.method;
    console.log("Request Comes for "+url+" Method "+method);
   // if(url==='/index.html' && method==='GET'){
    if(url==='/') {
        url = '/pages/welcome.html';

    }
        if(url==='/listClasses.html'){
            url = '/pages/listClasses.html';
    }
    if(url==='/lt1') {
        url = '/pages/welcome.html';

    }
    if(url==='/lt2.html') {
        url = '/pages/listClasses.html';
    }
        if(url==='/') {
            url = '/pages/welcome.html';

        }
        if(url==='/lt3.html'){
            url = '/pages/listClasses.html';}

            if(url==='/lt4') {
                url = '/pages/welcome.html';

            }
            if(url==='/lt5.html') {
                url = '/pages/listClasses.html';

            }
    if(isStaticContent(url)){
        var newPath = path.join(__dirname,url);
        console.log("NewPath is ",newPath);
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
        /*fs.readFile(newPath,function(error,content){
            if(error){
                response.end("Can't Find this File");
            }
            else{
                response.end(content);
            }


        });*/
        //response.end("<h1>Hello Home User</h1>");
    }
    else
    if(url.indexOf('/login')>=0 && method==='GET'){
        var obj = urlObj.parse(url,true).query;
        console.log("QS "+obj.userid+" "+obj.pwd);
        response.end(userModule(obj.userid,obj.pwd));
    }

    /*else
    if(url==='/welcome' && method==='GET'){
        response.end("<h1>Hello Welcome User</h1>");
    }
    else {
        response.write("<b>Hello User</b>");
        response.end("Bye User");
    }*/
}
function isStaticContent(resourceName){
    var ext=[".jpg",".webm",".css",".html",".js",".mp4",".flv"];
    var extensionName = path.extname(resourceName);
    //console.log("Extension Name ",extensionName);
    return ext.indexOf(extensionName)>=0?true:false;
}
