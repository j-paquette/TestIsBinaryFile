//original example: https://www.npmjs.com/package/isbinaryfile
/*jslint browser:true */
'use strict';

const isBinaryFile = require('isbinaryfile').isBinaryFile;
const fs = require("fs");

const filename = "fixtures/2021nov10_AzurePipelines.pdf";
const data = fs.readFileSync(filename);
const stat = fs.lstatSync(filename);

isBinaryFile(data, stat.size).then((result) => {
  if (result) {
    console.log("It is binary!")
  }
  else {
    console.log("No it is not.")
  }
});

const isBinaryFileSync = require('isbinaryfile').isBinaryFileSync;
const bytes = fs.readFileSync(filename);
const size = fs.lstatSync(filename).size;
console.log(isBinaryFileSync(bytes, size)); // true or false 
