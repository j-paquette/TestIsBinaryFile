//original example: https://www.npmjs.com/package/isbinaryfile
/*jslint browser:true */
/*'use strict';

const isBinaryFile = require('isbinaryfile').isBinaryFile;
const fs = require("fs");

const filenames = "fixtures/2021nov10_AzurePipelines.pdf";
const data = fs.readFileSync(filenames);
const stat = fs.lstatSync(filenames);

isBinaryFile(data, stat.size).then((result) => {
  if (result) {
    console.log("It is binary!")
  }
  else {
    console.log("No it is not.")
  }
});

const isBinaryFileSync = require('isbinaryfile').isBinaryFileSync;
const bytes = fs.readFileSync(filenames);
const size = fs.lstatSync(filenames).size;
console.log(isBinaryFileSync(bytes, size)); // true or false */

/*jslint browser:true */
'use strict';

const isBinaryFile = require('isbinaryfile').isBinaryFile;
const fs = require("fs");
const { isBinaryFileSync } = require('isbinaryfile');

const dir = "./fixtures";
const filenames = fs.readdirSync(dir);

console.log(filenames);



filenames.forEach(filename => {
 
  const filePath = dir + '/' + filename;
  //console.log(data);
  if (!fs.statSync(filePath).isDirectory()) {
   
      if (!isBinaryFileSync(filePath)) {
        console.log(filePath, "No it is not.")
      }
      else {
        console.log(filePath, "It is binary!")
      }
    }
  

  
  

  
})



   

  
  






//this example uses a promise API instead of callback API: https://blog.logrocket.com/file-processing-node-js-comprehensive-guide/
/* import * as fsPromises from 'fs/promises';

async function usingPromiseAPI(path) {
    const promise = fsPromises.readFile(path);
    console.log('do something else');
    return await promise;
} */
