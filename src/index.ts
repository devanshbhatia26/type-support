import * as fs from 'fs';
 
export const Greeter = () => {
  fs.writeFile('./newFile.txt', "sdgashdgsahsd", (err) => {
  if (err) throw err;
  console.log("File Created Successfully");
})};