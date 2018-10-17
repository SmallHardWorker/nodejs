const input = "/Users/wchx/code/nodejs/myModule/lib/input.js";
const output = "/Users/wchx/code/nodejs/myModule/lib/tmp.js";
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream(input);
const ws = fs.createWriteStream(output);
const rl = readline.createInterface({
    input: rs,
});
const argv = process.argv.slice(2);
var l = 0;
rl.on('line', (line) => {
    l++;
    const start = argv[0];
    const end = argv[1];
    if (l >= start && l <= end) {
        //console.log(l);
        ws.write(line);
        ws.write('\n');
    }
});
rl.on('close', () => {
    ws.end();
    //console.log("end!");
});

const { spawn } = require('child_process');
const cmd = spawn('node', [output]);

var result = "";
cmd.stdout.on('data', (data) => {
    result = result + data;
    //console.log(`输出：${data}`);
});

cmd.stderr.on('data', (data) => {
    console.log(`错误：${data}`);
});

cmd.on('close', (code) => {
    console.log(result);
    console.log(`子进程退出码：${code}`);
});
