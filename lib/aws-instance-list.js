#!/usr/bin/env node

const fs=require("fs"),
      awsConfig = require("../etc/aws-config");


var fileContents = fs.readFileSync(awsConfig.fileName);

if (fileContents) {
  var files = JSON.parse(fileContents);
  for (var key in files) {
    var fileInfo = files[key];
    var created = new Date();
    created.setTime(fileInfo.created);
    console.log(key + " - " + created.toLocaleString()); }
}




