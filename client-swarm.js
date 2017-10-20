const exec = require('child_process').exec;

let clientCount = process.argv[2];

for (let i = 0; i < clientCount; i++) {
	console.log(`Client №${i} start to work`);
	exec("node ./client.js");
}