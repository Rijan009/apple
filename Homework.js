//Function to Check If a Student Has Passed or Failed
function checkPassOrFail(score) {
    let passMark = 40;
    
    if (score >= passMark) {
      return "Passed";
    } else {
      return "Failed";
    }
  }
  
  console.log(checkPassOrFail(20)); // Passed
  console.log(checkPassOrFail(40)); // Failed
  
  //Triangle Pattern
  function printTrianglePattern() {
    for (let i = 1; i <= 5; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j + ' ';
      }
      console.log(row.trim());
    }
  }
  
  printTrianglePattern();
  
  