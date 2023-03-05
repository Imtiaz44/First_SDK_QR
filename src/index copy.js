const { urlencoded } = require('express');
const express = require('express')
var rp = require('request-promise');

const app = express()
const port = 3000;

app.use('/static', express.static('public'))

var client_id = "fcbc32f6.06508e4e.dev_90c44f0c.bindid.io"; //
var client_secret = "0ffeaa86-69ed-4bdb-8241-8f6b131beac3"; //

var base_url = "https://signin.bindid-sandbox.io";

app.get('/initialize', async(req, res) =>  {

    var apiRespStr = await rp({

        url: base_url + "/authorize_ciba",
        form: {"login_hint": "{\"type\":\"direct_link\"}", "client_id": client_id, "client_secret": client_secret, "scope": "openid bindid bindid_network_info"},
        headers:
        {
            'user-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST'
    }).promise();
    var apiResp = JSON.parse(apiRespStr);
    res.send(apiResp);
})


    app.get('/check', async (req, res) => {
            let auth_req_id = req.query.auth_req_id;

        var apiRespStr = await rp({

            url: "https://signin.bindid-sandbox.io/token",
            form: {"grant_type": "urn:openid:params:grant-type:ciba", "auth_req_id": auth_req_id, "client_id": client_id , "client_secret": client_secret },
            headers:
            {
                'user-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'PSOT'
        }).promise();
        var apiResp = JSON.parse(apiRespStr);
        res.send(apiResp);


    })


    app.listen(port, () => {

        console.log(`Example app listening on port ${port}`)
    })
