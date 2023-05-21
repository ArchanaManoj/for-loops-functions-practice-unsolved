// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let nameStr = [];
  let tempArray = [];
  let letterSmall = letter.toLowerCase();
  for(let item in array) {
    tempArray = array[item].name.split('');
    for(let i=0; i< tempArray.length; i++){
      if(tempArray[i].toLowerCase() === letterSmall) {
        nameStr.push(array[item].name);
      }
    }
    tempArray.pop();
  }

  return nameStr;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
