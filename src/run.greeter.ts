import * as fs from 'fs';
 
fs.writeFile('./newFile.txt', "TemporaryFile2", (err) => {
  if (err) throw err;
  console.log("File Created Successfully");
});