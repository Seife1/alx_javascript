#!/usr/bin/node

/***
  A script that prints the number of movies where the character “Wedge Antilles” is present
***/

const request = require('request');
const url = `${process.argv[2]}`;

const parts = [];

request.get(url, { encoding: 'utf-8' })
  .on('data', function (data) {
    parts.push(data);
  })
  .on('complete', function () {
    const obj = JSON.parse(parts);
    const wedgesFilm = obj.results.filter( function (film) {
        return film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    })
    console.log(`${wedgesFilm.length}`);
  })

