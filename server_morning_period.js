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

      /*client.replyMessage(event.replyToken, 
        {
          "type": "template",
          "altText": "This is a buttons template",
          "template": {
              "type": "buttons",
              "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/logopedia/images/a/a8/Marvel-logo.png/revision/latest/scale-to-width-down/640?cb=20140701230531",
              "imageAspectRatio": "rectangle",
              "imageSize": "cover",
              "imageBackgroundColor": "#e06962",
              "title": "First",
              "text": "Kan Tippayamontri 590610602",
              "defaultAction": {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://google.com/"
              },
              "actions": [
                  {
                    "type": "uri",
                    "label": "facebook",
                    "uri": "https://www.facebook.com/kan.tippayamontree"
                  },
                  {
                    "type": "uri",
                    "label": "Computer Engineering",
                    "uri": "http://cpe.eng.cmu.ac.th/2013/"
                  }
              ]
          }
        })*/

        client.replyMessage(event.replyToken, {
          "type": "template",
          "altText": "this is a carousel template",
          "template": {
              "type": "carousel",
              "columns": [
                  {
                    "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": "this is menu",
                    "text": "description",
                    "actions": [
                        {  
                            "type":"cameraRoll",
                            "label":"Camera roll"
                        },
                        {  
                          "type":"location",
                          "label":"Location"
                       }
                    ]
                  },
                  {
                    "thumbnailImageUrl": "https://c.76.my/Malaysia/line-brown-bear-cute-pencil-case-ubiyo-1802-02-Ubiyo@6.jpg",
                    "imageBackgroundColor": "#000000",
                    "title": "this is menu",
                    "text": "description",
                    "actions": [
                      {
                        "type":"datetimepicker",
                        "label":"Select date",
                        "data":"storeId=12345",
                        "mode":"datetime",
                        "initial":"2017-12-25t00:00",
                        "max":"2018-01-24t23:59",
                        "min":"2017-12-25t00:00"
                      },
                      {  
                        "type":"camera",
                        "label":"Camera"
                     }
                  ]
                  }
              ],
              "imageAspectRatio": "rectangle",
              "imageSize": "cover"
          }
      })

      }

})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})