const child_process = require('child_process');
let condition = false;

if(process.platform === 'linux') {
  condition = parseInt(child_process.execSync(`ps -p "${process.pid}" -o ppid=`).toString().trim()) === 1;
} else {
  condition = false;
}

module.exports = condition;
