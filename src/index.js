module.exports = function getZerosCount(number, base) {
  // your implementation
      var base1 = base;
      var dividers = {};
      var i = 2;
      while (base1 > 1) 
      {
          if (base1 % i == 0) 
          {
              base1 = base1/ i;
              dividers[i] = dividers[i] ? dividers[i] + 1 : 1;
          }
              
            else 
            {
             i++;
            }
      }
      
      var allResults = [];
      for (let divider of Object.keys(dividers)) {
          var num1 = number;
          let resultForDivider = 0;
          while (num1 > 0) {
              num1 = num1/divider;
              resultForDivider = resultForDivider+ Math.floor(num1);
          }
        allResults.push(Math.floor(resultForDivider / dividers[divider]));
      }
     var result = Math.min(...allResults);
      return result;
  }
