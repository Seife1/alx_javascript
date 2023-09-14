#!/bin/usr/node

const request = require("request");

// script that prints all characters of a Star Wars movie:
const id = process.argv[2];

let movieData = '';
request.get(`https://swapi-api.alx-tools.com/api/films/${id}`, {encoding: 'utf-8'})
.on('data', function (data) {
    movieData += data;
})
.on ('end', function () {
    const obj = JSON.parse(movieData);
    const peopleUrl = obj.characters;
    peopleUrl.forEach((people) => {
        request.get(people, {encoding: 'utf-8'})
          .on('data', character => {
            const peopleAsObj = JSON.parse(character)
            console.log(peopleAsObj.name);
    });
})
})