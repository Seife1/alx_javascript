#!/usr/bin/node

/***
  A script that display the status code of a GET request.
***/

const request = require('request');
const url = `${process.argv[2]}`;

const parts = [];

request.get(url, {encoding: 'utf-8'})
  .on('response', function (response) {
    console.log('Code:', response.statusCode);
  })

