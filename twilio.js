const accountSid = 'ACb6d2229a118a3f9d5baec526cac9e3e1';
const authToken = '3584cb54550b1fb4d45e4e3c8b977161';
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
