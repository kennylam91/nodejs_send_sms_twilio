const port = 8080
const express = require('express')
const bodyParser = require('body-parser')
const twilio = require('./twilio')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.post('/send-sms', (request, response) => {
  const {phoneNumber, smsContent} = {...request.body}
  console.log(`URL: ${request.url}`);
  twilio.sendSms(phoneNumber, smsContent).then(()=> {
    response.send({message: 'Your message was sent successful'})
  }).catch(error => {
    response.send({message: 'Error happend. Please try again.'}) 
  })
  
})
const server = app.listen(port, (error) => {
  if(error) {
    console.log("error");
  }
})
console.log("Server run on port 8080");
