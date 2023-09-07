#!/usr/bin/node
// Write a class Rectangle that defines a rectangle:

class Rectangle {
  constructor (w, h) {
    // if an attribute is invalid create an empty object
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      return 'Rectangle {}';
    }
  }
}

module.exports = Rectangle;
