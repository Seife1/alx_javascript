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
    // Create an instance method called print() that prints the rectangle using the character X
    print() {
      for (let i = 1; i <= this.height; i++) {
        let output = '';
        for (let j = 1; j <= this.width; j++) {
            output += 'X'
        }
        console.log(output);
      }
    }
    rotate () {
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
    double () {
      this.width *= 2;
      this.height *= 2;
    }

  }
  
module.exports = Rectangle;
