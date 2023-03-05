const { static } = require('express');
const express = require('express');
const app = express();
const path = require("path");  /* including path module*/
const hbs = require("hbs");
const request = require ("request");
const axios = require('axios');
const jwt_decode = require('jwt-decode');
//const fetch = require('node-fetch');

const qs = require('querystring');



app.use(express.static('../library'))

const port =process.env.port || 4000;


const static_path = path.join(__dirname, "/");

app.use(express.static(static_path));

app.set("view engine" ,"hbs")

app.get('/',function(req, res){
    res.type('html');
    res.sendFile('login-form.html', {root: __dirname} )
    
})

// to get the auth code from browser 
 app.get('/callback', ({ query: { code } }, res) => {
        const body = {
        code,
        };  
    
  console.log("code is ", code);


// defining variable for POST method to get token 
const data ={
        
       //code:                'O3z428snjag5Iq25_aJHgyETSgu0UuUo4FaUstX9SY8',
       code:                   code,
       redirect_uri:          'http://localhost:4000/callback',
       client_id:             'fcbc32f6.06508e4e.dev_90c44f0c.bindid.io',
       client_secret:         '0ffeaa86-69ed-4bdb-8241-8f6b131beac3',
       grant_type:            'authorization_code'
};

// set the headers for POST method 
const config = {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
          }
};

// 

// Axios POST method for getting token  

axios.post('https://signin.bindid-sandbox.io/token', qs.stringify(data), config)
.then((res) => {
console.log(`Status: ${res.status}`);

//******* Parsing or Decoding the token to get alias and SubID ********//
console.log('Body: ', res.data);
const   com_token = res.data;
//console.log(com_token.id_token);
var ID_tok = com_token.id_token;
//console.log('ID TOKEN---',ID_tok );
var decode = jwt_decode (ID_tok);
console.log ('decode--->', decode);
var subid = decode.sub;

//console.log('subiid--->', subid );
validate_alias(subid);                            // Subid should be relaced by alias once code is working properly// 

})
.catch((err) => {
console.error(err);

});
function validate_alias(xyz)                        // Validate alias from tokken ID///
{
    //if (xyz == '15907b73-4c2e-4ba3-93f4-2fb2ef385ce9')
    if (xyz == 'e2842c23-3382-4fe3-893b-0a4b8fbfa558')
    {
console.log('subiid---+++>', xyz );
res.redirect('http://localhost:4000/welcome.html');
}
else
res.redirect('http://localhost:4000/registration.html')
}
});
// FEEDBACK


/*
fetch('https://api.bindid-sandbox.io/session-feedback', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'BindIdBackend AccessToken BtAT4owpRW1Iu2eon8nYZOJlUmgMYA6-naw6cOiQusE; QcHJ8aBF3EdA4aYRFwccRJ4GlDp+gbyOXdtKNcZlR6w='
  },
  body: JSON.stringify({
    subject_session_at: "BtAT4owpRW1Iu2eon8nYZOJlUmgMYA6-naw6cOiQusE",
    reports: [
        {
            alias: "test123456",
            time: 1631260724,
            type: "authentication_performed"
        }
    ]
}),
})
.then(response => response.json())
.then(data => {
  console.log('Success:+++++++', data);
})
.catch((error) => {
  console.error('Error:', error);
});*/



app.listen(port,() => {

    console.log(`server is running at port**** --> ${port}`);
})
