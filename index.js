const child_process = require('child_process');

module.exports = parseInt(child_process.execSync(`ps -p "${process.pid}" -o ppid=`).toString().trim()) === 1;
