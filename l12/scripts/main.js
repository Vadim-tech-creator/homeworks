function summarize(num) {
    return function(arg) {
      return (arg !== undefined ? arg : 1) + num; 
    };
  }
const addFive = summarize(5)
  console.log(addFive(3)); 
  console.log(addFive());  