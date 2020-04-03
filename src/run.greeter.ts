import * as fs from 'fs';
 
fs.writeFile('./newFile.txt', "TemporaryFile3", (err) => {
  if (err) throw err;
  console.log("File Created Successfully");
});