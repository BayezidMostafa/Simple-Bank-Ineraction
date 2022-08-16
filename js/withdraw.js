// Step-1: Adding event handler in withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //Step-2: Getting the withdraw amount from input field
    const withdrawField = document.getElementById('withdraw-amount');
    // Step-3: Finding the value from withdraw input field
    const newWithdrawAmountString = withdrawField.value;
    // Step-4: Parsing the new withdraw amount to float number
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // Step-5: Getting the current withdrawn total status
    // For non input/text-area value we have to use innerText to get the text
    const prevWithdrawTotalElement = document.getElementById('withdraw-status');
    // Step-6: Getting value from previous total withdrawn status
    const prevWithdrawTotalAmountString = prevWithdrawTotalElement.innerText;
    // Step-7: Parsing previous withdrawn value string to float number
    const prevWithdrawTotalAmount = parseFloat(prevWithdrawTotalAmountString);
    // Step-8: Making addition of previous withdrawn value with new withdraw value
    const currentWithdrawTotal = prevWithdrawTotalAmount + newWithdrawAmount;
    // Step-9: Setting up the withdraw total
    prevWithdrawTotalElement.innerText = currentWithdrawTotal;
    // Step-10: Making tatal amount string to number value
    const prevTotalBalanceElement = document.getElementById('balance-status');
    // Step-11: Finding the value from balance status
    const prevTotalBalanceValueString = prevTotalBalanceElement.innerText;
    // Step-12: Parsing previous balance status value string to float number
    const prevTotalBalanceValue = parseFloat(prevTotalBalanceValueString);
    // Step-13: Making addition of previous balance value with new balance value and getting total balance amount
    const currentTotalBalanceAmount = prevTotalBalanceValue - newWithdrawAmount;
    // Step-14: Setting the total balance amount
    prevTotalBalanceElement.innerText = currentTotalBalanceAmount;



    // Step-15: Clearing the withdraw field
    withdrawField.value = '';
})
// Step-2:
// Step-3:
// Step-4:
// Step-5:
// Step-6:
// Step-7:
// Step-8:
// Step-9:
// Step-10:
// Step-11:
// Step-12: