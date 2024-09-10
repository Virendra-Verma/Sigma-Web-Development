const fs = require('fs');

console.log(fs);
console.log("Starting ")
// fs.writeFileSync('hello.txt', 'Hello from NodeJs');
fs.writeFile('hello.txt', 'Hello from NodeJs',() => {
    console.log("File written")
    fs.readFile('hello.txt', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data.toString())
        }
    })
});
console.log("Ending")