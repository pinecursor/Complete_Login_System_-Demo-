const express = require('express');
const http = require('http');
const bcrypt = require('bcryptjs');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const e = require('express');
mongoose.connect('mongodb://localhost/Records');
const xoauth2 = require('xoauth2');

const transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: "Verifier11@outlook.com",
        pass: "nodemailer@123"
    },
    //logger: true,
    //debug: true
    tls: {
        ciphers:'SSLv3'
    }
})



//const app = express();
//const server = http.createServer(app);

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

const Dataschema = {
    id: Number,
    username: String,
    email: String,
    password: String,
    company: String,
    status: String,
    otp: Number,
};

const data = mongoose.model('data', Dataschema);

function generateOTP() {

    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


app.post('/register', async (req, res) => {
    try {
        const foundUser = await data.findOne({ email: req.body.email });
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.password, 10);

            let bruh = new data({
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                company: req.body.Cname,
                status: "Manager"
            });
            bruh.save();
            //console.log('User list', users);

            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});

app.post('/login', async (req, res) => {
    try {
        let foundUser = await data.findOne({ email: req.body.email });
        if (foundUser) {
            //error last time all passwords accepted check await for the casue of error
            let submittedPass = req.body.password;
            let storedPass = foundUser.password;

            //let passwordMatch =  bcrypt.compareSync(submittedPass, storedPass);
            if (storedPass === submittedPass) {
                let usrname = foundUser.username;
                let cid = foundUser.id;
                if (foundUser.status === "Manager") {
                    res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3><br><br>Your Company ID:${cid}</div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
                }
                else {
                    res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3><br><br>Welcome, to ${foundUser.company} Portal<br></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
                }
            } else {
                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
            }
        }
        else {

            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            await bcrypt.compare(req.body.password, fakePass);

            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
        }
    } catch {
        res.send("Internal server error");
    }
});

let globlem = "";

app.post('/employee', async (req, res) => {
    try {
        const foundUser = await data.findOne({ email: req.body.email });
        if (!foundUser) {
            const foundcom = await data.findOne({ id: req.body.CompanyID })

            let hashPassword = await bcrypt.hash(req.body.password, 10);

            let bruh = new data({
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                company: foundcom.company,
                status: "Employee"
            });
            bruh.save();
            //console.log('User list', users);

            res.send(`<div align ='center'><h2>Registration successful as an Employee Under ${bruh.company},<br> Your Presiding manager is ${foundcom.username}</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>`);
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});

app.post('/emailfor', async (req, res) => {
    try {
        let foundUser = await data.findOne({ email: req.body.emailot });
        if (foundUser) {

            let otp = generateOTP();
            foundUser.otp = otp;
            foundUser.save();
            globlem = req.body.emailot;
            var mailOptions = {
                from: '"noreply" <Verifier11@outlook.com>',
                to: req.body.emailot,/*'verifiermail2@gmail.com',*/
                subject: 'Password change',
                text: `Hi ${foundUser.username},

                There was a request to change your password!

                If you did not make this request then please ignore this email.
                
                Otherwise, please type the otp ${otp},

                Do not share this with anyone.`
            }
            transport.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    //console.log("mail sent");
                }
            })
           // res.redirect("/ForgetPass.html");
        } else {
            res.send("<div align ='center'><h2>Account with that Email Does not exist</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});

app.post('/otp', async (req, res) => {
    try {

        const foundUser = await data.findOne({ email: globlem });
        console.log(req.body.otp);
        if (foundUser.otp == req.body.otp) {
            foundUser.otp = 0;
            foundUser.save();
            res.redirect('/changepwd.html');
        }
        else {
            res.send("<div align ='center'><h2>Wrong Otp</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});

app.post('/pwdcng', async (req, res) => {
    try {
        const foundUser = await data.findOne({ email: globlem });
        foundUser.password = req.body.password;
        foundUser.save();
        globlem="";
        res.send("<div align ='center'><h2>Password Changed</h2></div><br><br><div align='center'><a href='./login.html'>login now</a></div>");
    }
    catch {
        res.send("Internal server error");
    }
});

/*server.listen(8000, function () {
    console.log("server is listening on port: 8000");
});*/
const PORT = process.env.PORT || 8000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));


//ajax ignore if needbe

