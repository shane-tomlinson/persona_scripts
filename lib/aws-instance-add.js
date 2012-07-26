#!/usr/bin/env node

const fs=require("fs"),
      awsConfig = require("../etc/aws-config"),
      fileName = awsConfig.fileName;

function getCommandName() {
  var parts = __filename.split("/");
  return parts[parts.length - 1];
}

if (process.argv.length < 3) {
  console.log("usage: " + getCommandName() + " <instance_name>");
  process.exit(1);
}

var fileContents = fs.readFileSync(fileName);
var files = {};

if (fileContents) {
  var files = JSON.parse(fileContents);
}

var instanceName = process.argv[2];
files[instanceName] = {
  created: new Date().getTime()
};

console.log(files);

fs.writeFileSync(fileName, JSON.stringify(files));
process.exit(0);





