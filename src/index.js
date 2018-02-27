module.exports = function solveEquation(equation) {
  var reg = /([-]\s{0,1}(\d+))|(\d+)/g;
  var newstr = equation.match(reg);
  var a = Number(newstr[0].replace(/\s/, ''));
  var b = Number(newstr[2].replace(/\s/, ''));
  var c = Number(newstr[3].replace(/\s/, ''));
  var D = b*b-4*a*c;
  var x1 = Math.round(-b / ( 2 * a ) - Math.sqrt( D ) / ( 2 * a ));
  var x2 = Math.round(-b / ( 2 * a ) + Math.sqrt( D ) / ( 2 * a ));
  var res = [];
  res.push(x2,x1);
  res.sort(function(a, b) {return a - b;});
  return res;
}
