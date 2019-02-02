const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()

const config = {
  channelAccessToken: 'WEMkqKuhpz/n4cFDUCE58nbCAxN8/yDf1xTimYw9qlVTc7Y2xpAbmS9p2Y6j3CwQ27F+R+6lVX3JlU5n5C+V8+H8EcEbd3MtXvHi0ZqiPj95jjjr4OtY/YP/xWaMOARWUWZ64gaBbBe+7rv0Iv5kKwdB04t89/1O/w1cDnyilFU=',
  channelSecret: '99854f6e3ac0a9d90b5313247821f18a'
}


app.get('/', function (req, res) {
    res.send('Hello World!!')
})

app.post('/webhook', middleware(config), (req, res) => {
  /*req.body.events // webhook event objects
  req.body.destination // user ID of the bot (optional)*/
  console.log('Webhook success');
  res.send('Webhook success')


})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})