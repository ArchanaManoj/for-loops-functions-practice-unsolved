
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const balanceErrorArray = [];
  let tempArray = [];

  for(let item in array) {

    tempArray = array[item];
    let arrayDeposit =array[item].deposits;
    let arrayWithdrawal = array[item].withdrawals;
    let sumDeposit =0;
    let sumWithdrawal = 0;

    for(let elem in arrayDeposit) {
      sumDeposit += arrayDeposit[elem];
    }
    for(let elem in arrayWithdrawal) {
      sumWithdrawal += arrayWithdrawal[elem];
    }
    if((sumDeposit -  sumWithdrawal) !== array[item].balance) {

      balanceErrorArray.push(array[item]);
    }
  }
  return balanceErrorArray;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
