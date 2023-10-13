function areaOfSquare(a) {
  return a * a;
}
function areaOfRectangle(l, b) {
  return l * b;
}
function areaOfCircle(pi = 3.14, r) {
  return pi * r * r;
}

module.exports = {
  areaOfSquare: areaOfSquare,
  areaOfRectangle: areaOfRectangle,
  areaOfCircle: areaOfCircle,
};
