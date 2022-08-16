// Step-1: Adding event handler in deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-amount');
    // Step-3: Finding the value from deposite input field
    const newDipositAmountString = depositField.value;
    // Step-4: Parsing new amount of value string to Float number 
    const newDipositAmount = parseFloat(newDipositAmountString);
    // Step-5: Getting the current deposit total status
    // For non input/text-area value we have to use innerText to get the text
    const depositTotalElemnt = document.getElementById('deposit-status');
    // Step-6: Getting value from previous total deposit status
    const PrevDepositToalString = depositTotalElemnt.innerText;
    // Step-7: Parsing previous deposit value string to float number
    const PrevDepositToal = parseFloat(PrevDepositToalString);
    // Step-8: Making addition of previous value with new value and getting total deposit amount
    const currentDepositTotal = PrevDepositToal + newDipositAmount;
    // Step-9: Setting up the deposit total
    depositTotalElemnt.innerText = currentDepositTotal;
    // Step-10: Making tatal amount string to number value
    const prevTotalBalanceElement = document.getElementById('balance-status');
    // Step-11: Finding the value from balance status
    const prevTotalBalanceValueString = prevTotalBalanceElement.innerText;
    // Step-12: Parsing previous balance status value string to float number
    const prevTotalBalanceValue = parseFloat(prevTotalBalanceValueString);
    // Step-13: Making addition of previous balance value with new balance value and getting total balance amount
    const currentTotalBalanceAmount = prevTotalBalanceValue + newDipositAmount;
    // Step-14: Setting the total balance amount
    prevTotalBalanceElement.innerText = currentTotalBalanceAmount;

    // Step-15: Clearing the deposit field
    depositField.value = '';

})