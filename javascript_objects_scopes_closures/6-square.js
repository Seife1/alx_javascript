#!/usr/bin/node
// a class Square that defines a square and inherits from Square of 5-square.js

const Square1 = require('./5-square.js');

class Square extends Square1 {
  constructor (size) {
    super (size);
  }

  charPrint(c) {
    for (let i = 1; i <= this.size; i++) {
        let output = '';
        for (let j = 1; j <= this.size; j++) {
            if (c === undefined) {
              output += 'X';
            } else {
              output += c;
            }
        }
        console.log(output);
      }
  }
}

module.exports = Square;