const accountSid = 'ACb6d2229a118a3f9d5baec526cac9e3e1';
const authToken = '4af16a61e3279310b6214171348c8216';
const client = require('twilio')(accountSid, authToken);

module.exports= {
  sendSms(phoneNumber, smsContent){
    return new Promise((resolve, reject) => {
      client.messages.create({
        body: smsContent,
        from: '+12054795253',
        to: phoneNumber
     }).then(() => resolve())
       .catch(error => reject(error))
    })
  }
}
