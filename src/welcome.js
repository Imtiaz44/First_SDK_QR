

//const axios = require('axios');




function forpost1()
{

    alert("AHMAD---");
    
    const data ={
        
        code:                '123455',
        redirect_uri:       'http://localhost:4000/welcome.html',
        client_id:          'fcbc32f6.06508e4e.dev_90c44f0c.bindid.io',
        client_secret:       '0ffeaa86-69ed-4bdb-8241-8f6b131beac3',
        grant_type:            'authorization_code'


   };

   module.exports={forpost1};
   
   alert("AHMAD-2--");
    // set the headers
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

axios.post('https://signin.bindid-sandbox.io/token', qs.stringify(data), config)
.then((res) => {
    console.log(`Status: ${res.status}`);
    //alert('AHMAD-3');
    console.log('Body: ', res.data);
    

}).catch((err) => {
    console.error(err);
});
    
};







/* After click on SAVE button */

const accinfo = document.getElementById("Account-information");
const submitButton = document.getElementById("account-form-submit");


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const accnum = accinfo.accountnumber.value;
    

    if (accnum === "12345" ) {


        alert("your account infor is 12345");
        console.log("you are in consloe");

        var query_string=window.location.search;

            alert ("query String :" + query_string);


        //location.reload();
        //window.location.replace("welcome.html");
         forpost1();

        function  test123() {

             alert("in function");
         };

    } else {
        alert("in error");
    }
})

