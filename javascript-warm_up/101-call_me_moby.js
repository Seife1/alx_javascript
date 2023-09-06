exports.callMeMoby = function (x, theFunction) {
  let y = 1;
  while (y <= x) {
    y++;
    theFunction();
  }
};
