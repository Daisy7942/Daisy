const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./README4.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./README4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
