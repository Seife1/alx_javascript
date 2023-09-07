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
    rotate () {
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
    double () {
      this.height *= 2;
      this.width *= 2;
    }

  }
  
module.exports = Rectangle;
