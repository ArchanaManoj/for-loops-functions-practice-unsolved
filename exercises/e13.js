
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let depositsLessThan2000Array = [];
  let tempArray = [];
  for(let item in array) {
    tempArray = array[item].deposits;
    let sum =0;
    for(let elem in tempArray) {
      sum += tempArray[elem];
    }
    if(sum < 2000 || sum == 0 || array[item].deposits == []) {

      depositsLessThan2000Array.push(array[item]);
    }
  }
  return depositsLessThan2000Array;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
