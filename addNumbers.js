const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  // let sum = sum;
  // let numsLeft = numsLeft;
  // DID NOT HAVE TO DECLARE VARIABLES AND ASSIGN FROM ARGS
  if (numsLeft > 0) {
    reader.question("Give me a number: ", function(answer) {
      let num = parseInt(answer);
      sum += num; 
      console.log(`sum: ${sum}`);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));