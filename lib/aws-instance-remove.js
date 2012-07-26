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

var instanceName = process.argv[2];
var fileContents = fs.readFileSync(fileName);
var files = {};

if (fileContents) {
  var files = JSON.parse(fileContents);
  delete files[instanceName];
}

fs.writeFileSync(fileName, JSON.stringify(files));
process.exit(0);





