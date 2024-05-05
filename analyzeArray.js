function analyzeArray(array) {
    let sum = 0;
    
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length

    let minArray = array.sort((a,b) => a - b);
    let minValue = minArray[0]
    
     let maxArray = array.sort((a,b) => b - a);
     let maxValue = maxArray[0]

   const object = {
    average: average,
    min: minValue,
    max: maxValue,
    length: array.length,
   }

return object
}



module.exports = analyzeArray;