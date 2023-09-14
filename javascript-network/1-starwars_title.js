#!/usr/bin/node

/***
  A script that prints the title of a Star Wars movie where the episode number matches a given integer
***/

const request = require('request');
const id = process.argv[2];

request.get(`https://swapi-api.alx-tools.com/api/films/${id}`, { encoding: 'utf-8'})
  .on('data', function (data) {
    const obj = JSON.parse(data);
    console.log(obj.title);
  })

