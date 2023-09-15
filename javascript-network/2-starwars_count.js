#!/usr/bin/node

/***
  A script that prints the number of movies where the character “Wedge Antilles” is present
***/

const request = require('request');
const url = `${process.argv[2]}`;

const parts = [];
const id = 18

request.get(url, { encoding: 'utf-8' })
  .on('data', function (data) {
    parts.push(data);
  })
  .on('complete', function () {
    const obj = JSON.parse(parts);
    const wedgesFilm = obj.results.filter( function (film) {
        return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)
    })
    console.log(`${wedgesFilm.length}`);
  })

