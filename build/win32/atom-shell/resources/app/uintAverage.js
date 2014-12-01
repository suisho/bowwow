module.exports = function uintAverage(array){
  var sum = 0
  var length = array.length 
  for(var i = 0; i < length; i++){
    sum += array[i]
  }
  return sum / length
}
