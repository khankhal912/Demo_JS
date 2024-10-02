const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);

//Sync...
// fs.writeFileSync('./test.text', 'Hey there!');

//Async...
// fs.writeFile('./test.text', 'Hello there! Async', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

//File read Sync...
// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

//File read Async...S
// fs.readFile('./contacts.txt', 'utf-8', (err, res) => {
//     if (err) throw err;
//     console.log(res);
// });

//AppendFileSync...
// fs.appendFileSync('./test.txt', new Date().getDate().toString());
// fs.appendFileSync('./test.txt',`Hey there!\n`);

//File Copy Sync...
// fs.cpSync('./test.txt', './test-copy.txt');

// fs.unlinkSync('./test-copy.txt');

// console.log(fs.statSync('./test.txt'));
// console.log(fs.statSync('./test.txt').isFile());


//Blocking...
// console.log("1");

// const result = fs.readFileSync('contacts.txt', 'utf8');
// console.log(result);

// console.log("2");

//Non - Blocking...
// console.log("1");

// fs.readFile('contacts.txt', 'utf8', (error, data) => {
//     console.log(data);
// });
// // console.log(result);

// console.log("2");


//default thread pool size = 4
//Max? - 8core cpu - 8