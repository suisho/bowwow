module.exports = function(x, y, maxX, maxY){
  var normX = x / maxX
  var normY = y / maxY
  return [normX, normY]
}