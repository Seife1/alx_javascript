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
}

module.exports = Rectangle;
