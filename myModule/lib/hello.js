console.log("hello, nodeJs!");

exports.sayHello = function () {
    console.log('Hello World!');
};

/*
篡改了我的sayHello
module.exports = function (message) {
    return message;
};
*/