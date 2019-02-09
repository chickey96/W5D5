const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is ${el1} greater than ${el2}?  `, function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length-1) {
    askIfGreaterThan(arr[i], arr[i+1], isGreaterThan => {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        innerBubbleSortLoop(arr, i+1, true, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    })
  }

  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr)
    }
  }

  outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

absurdBubbleSort([3, 1, 4, 2, 8, 0], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// innerBubbleSortLoop([3,1,4,2,8,0], 0, false, outerBubbleSortLoop)

// askIfGreaterThan(4, 7, answer => {
//   console.log(`${answer}`);
//   reader.close();
// });