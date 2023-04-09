const cron = require('node-cron');
const { exec } = require("child_process");

//exec("./backup.sh", (error, stdout, stderr) => {
//  if (error) {
//      console.log(`error: ${error.message}`);
//      return;
//  }
//  if (stderr) {
//      console.log(`stderr: ${stderr}`);
//      return;
//  }
//  console.log(`stdout: ${stdout}`);
//});

cron.schedule("0 */4 * * *", () => {
  exec("./backup.sh", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
})
