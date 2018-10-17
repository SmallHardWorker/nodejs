var http = require('http');

var options = {
    hostname: '11.160.195.138',
    //port: 80,
    path: '/mainri/simcaseExistIds_request.json',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
};

var request = http.request(options, function (response) {
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
});

var s1 = '{\n' +
    '    "requestHeader": {\n' +
    '    "transId": "请求消息ID，所有交易系统发出的消息，全局唯一",\n' +
    '    "systemId": "系统ID，交易速裁系统编码。默认lassen"\n' +
    '  },\n' +
    '  "requestBody": {\n' +
    '    "caseIds": ["0"';
for (var i = 1; i < 20000; i++) {
    s1 = s1 + ',"' + i + '"';
}
var s2 = '],\n' +
    '    "businessCodes": [\n' +
    '      "Z0505","Z0501"\n' +
    '    ]\n' +
    '  }\n' +
    '}';
//console.log(s1 + s2);
request.write(s1 + s2);
request.end();