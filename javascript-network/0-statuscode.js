#!/usr/bin/node

/***
  A script that display the status code of a GET request.
***/

const request = require('request');
const url = `${process.argv[2]}`;

request.get(url)
  .on('response', function (response) {
    console.log('Code:', response.statusCode);
  })
  .on('error', function (err) {
    console.log(err);
  })
