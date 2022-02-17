document.getElementById('expense-btn').addEventListener('click', function () {
    expenses();
    errrorInput();
    wrongInput()
});

document.getElementById('saving-button').addEventListener('click', function () {
    expenses();
    errorSaving();
});


function expenses() {

    // all cost and expenses
    const foodCost = document.getElementById('food-expense').value;

    const rentCost = document.getElementById('rent-expense').value;

    const clothCost = document.getElementById('cloth-expense').value;

    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;


    // income & balance section
    const income = document.getElementById('income').value;
    const incomeAmount = parseFloat(income);
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;

    const totalBalance = incomeAmount - totalCost;
    balance.innerText = totalBalance;

    // saving
    const percentageInput = document.getElementById('percentage-input');
    let percentage = parseFloat(percentageInput.value);

    const saving = ((incomeAmount * percentage) / 100);

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;
    savingAmount.innerText = saving;

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.innerText;
    const remainingBlanceAmount = totalBalance - saving;
    remainingBalance.innerText = remainingBlanceAmount;


}
function errorSaving() {
    const inputMoney = document.getElementById('income').value;
    const savingAmount = document.getElementById('saving-amount').innerText;

    if (savingAmount > inputMoney / 2) {
        const message = document.getElementById('saving-warning')
        message.style.display = 'block';
    }

}
function wrongInput() {
    const income = document.getElementById('income').value;
    const incomeAmount = parseFloat(income);
    if (incomeAmount < 1) {
        const alarm = document.getElementById('input-error')
        alarm.style.display = 'block';
    }
}
function errrorInput() {
    const foodCost = document.getElementById('food-expense').value;
    const rentCost = document.getElementById('rent-expense').value;
    const clothCost = document.getElementById('cloth-expense').value;

    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

    const income = document.getElementById('income').value;
    const incomeAmount = parseFloat(income);


    if (foodCost > incomeAmount) {
        const message = document.getElementById('add-correctValue')
        message.style.display = 'block';
    }
    else if (rentCost > incomeAmount) {
        const message = document.getElementById('add-correctValue')
        message.style.display = 'block';
    }
    else if (clothCost > incomeAmount) {
        const message = document.getElementById('add-correctValue')
        message.style.display = 'block';
    }
    else if (totalCost > incomeAmount) {
        const message = document.getElementById('add-correctValue')
        message.style.display = 'block';
    }

}



