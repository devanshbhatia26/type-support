import * as fs from 'fs';
 
fs.writeFile('./newFile.txt', "sdgashdgsahsd", (err) => {
  if (err) throw err;
  console.log("File Created Successfully");
});
