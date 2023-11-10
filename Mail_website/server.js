const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const fs = require('fs');
const mailchimp = require("@mailchimp/mailchimp_marketing");


const apiKey = "c0925a6f2ffaddcc43bfb75ed513abf4-us21";
const list_id = "ae9c5e8f9d";

mailchimp.setConfig({
    apiKey: apiKey,
    server: "us21",
});


const app = express();
const port = 3000;

var counter = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.get("/confirm/", (req, res) => {
    res.sendFile(__dirname + "/confirmation.html");
})
app.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "Subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);

    console.log(jsonData);

    const user = {
        email_address: "abc@xyz",
        firstName: "Random",
        lastName: "Kumar"
    }

    const run = async () => {
        const response = await mailchimp.lists.addListMember(list_id, {
            email_address: user.email_address,
            status: "Subscribed",
            merge_fields: {
                FNAME: user.firstName,
                LNAME: user.lastName,
            }
        });
        console.log(response);
      };
      
      run();

    
    // async function run() {
    //     const response = await mailchimp.ping.get();
    //     console.log(response);
    //   }
      
    //   run();


    // var logMessage = `(${++counter}) First Name: ${firstName} , Last Name: ${lastName} , email: ${email} \n`;
    // fs.appendFile("log.txt", logMessage, (err)=>{
    //     if(err) console.log(err);
    //     else console.log(`New user saved`);
    // })
    res.redirect("../confirm/")
})

app.post("/confirm/", (req, res) => {
    console.log(req);
    res.redirect("../")
})


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})


// API key
// name: my_first_mailchimp_api_key  c0925a6f2ffaddcc43bfb75ed513abf4-us21

// List-id  / Audience id
// ae9c5e8f9d