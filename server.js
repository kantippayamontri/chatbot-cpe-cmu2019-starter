const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const Client = require('@line/bot-sdk').Client;
const app = express()

const config = {
  channelAccessToken: 'WEMkqKuhpz/n4cFDUCE58nbCAxN8/yDf1xTimYw9qlVTc7Y2xpAbmS9p2Y6j3CwQ27F+R+6lVX3JlU5n5C+V8+H8EcEbd3MtXvHi0ZqiPj95jjjr4OtY/YP/xWaMOARWUWZ64gaBbBe+7rv0Iv5kKwdB04t89/1O/w1cDnyilFU=',
  channelSecret: '99854f6e3ac0a9d90b5313247821f18a'
}

const client = new Client(config);

app.get('/', function (req, res) {
    res.send('Hello World!!')
    
})

app.post('/webhook', middleware(config), (req, res) => {
  /*req.body.events // webhook event objects
  req.body.destination // user ID of the bot (optional)*/
  res.send('Webhook success')
  
  const event = req.body.events[0];
  const message = event.message;  
      if (event.type === 'message') {  
        console.log(message)
      /*  if(message.type == "text"){
        client.replyMessage(event.replyToken, {
          type: 'text',
          text: message.text,
        });
      }else if(message.type === 'sticker'){
        client.replyMessage(event.replyToken, {
          type: 'sticker',
          packageId: message.packageId,
          stickerId:message.stickerId
        });

      }*/

      client.replyMessage(event.replyToken, 
        {
          "type": "template",
          "altText": "This is a buttons template",
          "template": {
              "type": "buttons",
              "thumbnailImageUrl": "http://i68.tinypic.com/1dyff9.jpg",
              "imageAspectRatio": "rectangle",
              "imageSize": "cover",
              "imageBackgroundColor": "#FFFFFF",
              "title": "First",
              "text": "Kan Tippayamontri 590610602",
              "defaultAction": {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://google.com/"
              },
              "actions": [
                  {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=123"
                  },
                  {
                    "type": "message",
                    "label": "Add to cart",
                    "text": "no no no"
                  },
                  {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://google.com"
                  }
              ]
          }
        })

      }

})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})