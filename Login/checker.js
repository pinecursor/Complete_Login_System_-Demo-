const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'verifiermail2@gmail.com',
        pass: 'qwerty@123'
    }
})

var mailOptions = {
    from: 'verifiermail2@gmail.com',
    to: 'anukalchan@gmail.com',
    subject: 'Password change',
    text: `Hi nubhab,

    There was a request to change your password!

    If you did not make this request then please ignore this email.
    
    Otherwise, please type the otp --,

    Do not share this with anyone.`
}
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mail sent");
    }
})

