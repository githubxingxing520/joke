const appid ="62922";
const sign ="a78344ed9bc94ffaa86967e2a8268dd7";
var param = "?showapi_appid=" + appid +"&showapi_sign="+sign;
var textJoke ="https://route.showapi.com/341-1"+param;
var imgJoke ="https://route.showapi.com/341-2"+param;
var gifJoke ="https://route.showapi.com/341-3"+param;

module.exports={
  textJoke:textJoke,
  imgJoke:imgJoke,
  gifJoke:gifJoke
}