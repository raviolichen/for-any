var linebot = require('linebot');
var express = require('express');
var bot = linebot({
  channelId: 1565306999,
  channelSecret: c2298e5c6294a6a1a5a93fa77c9ae811,
  channelAccessToken: MJ/POCRTpudLhMPMkH/Y5wrSeCLySxlNpLERvLWpiAEWHsn6XbCfi6bgVp51ztdjT3uAazn6NE+DOkFuEE3Mb2auTWGB5vadV9K9ds5zSq3i65ZhMDUcpUjdxYxYcCQceEe20ZHvqgFPCUz6ngOUQQdB04t89/1O/w1cDnyilFU=
});


bot.on('message', function(event) {
  console.log('123456789'); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
