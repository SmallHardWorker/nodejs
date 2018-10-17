const buf1 = Buffer.alloc(10);
const buf2 = Buffer.allocUnsafe(10);
console.log(buf2.toString('utf-8'));
console.log(buf1.toString('hex'));