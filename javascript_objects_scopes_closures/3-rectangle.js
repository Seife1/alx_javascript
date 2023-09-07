// Write a class Rectangle that defines a rectangle:

class Rectangle {
    constructor (w, h) {
      // if an attribute is invalid create an empty object
      if (w > 0 && h > 0) {
        this.height = h;
        this.width = w;
      } else {
        return 'Rectangle {}';
      }
    }
    // Create an instance method called print() that prints the rectangle using the character X
    output = '';
    print() {
      for (let i = 1; i <= this.height; i++) {
        this.output = '';
        for (let j = 1; j <= this.width; j++) {
            this.output += 'X'
        }
        console.log(this.output);
      }
    }
  }
  
  module.exports = Rectangle;
  