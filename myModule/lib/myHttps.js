var https = require('https');

var options = {
    hostname: 'lassendaily.alibaba.net',
    port: 443,
    path: '/login/mock.json',
    query: 'openaccountId=13520361428',
    method: 'GET',
    rejectUnauthorized: false
};

var request = https.request(options, function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
    response.on('error', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});

request.end();

