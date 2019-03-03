var http = require('http').createServer(app);
var axios = require('axios').default
var express = require('express')
var app = express()
var md5 = require('md5');

    // app.post('/connexion', function (req, res) {
    //   axios.post(`https://api.betaseries.com/members/auth?key=e4c6631861be`,
    //   login = req.body.email,
    //   password = md5(req.body.password)
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //     LocalStorage.setItem('token', response.data.token);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    // })
    // });
http.listen(8080);