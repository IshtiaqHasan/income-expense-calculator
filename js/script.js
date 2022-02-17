document.getElementById('expense-btn').addEventListener('click', function () {
    expenses();
    errorHandle();
    const inputMoney = document.getElementById('income').value;
    const foodCost = document.getElementById('food-expense').value;
    const rentCost = document.getElementById('rent-expense').value;
    const clothCost = document.getElementById('cloth-expense').value;

    if (foodCost > inputMoney) {
        const message = document.getElementById('add-correctValue')
        message.style.display = 'block';
    }
    if (rentCost > inputMoney) {
        const message = document.getElementById('add-correctValue')
        message.style.display = 'block';
    }
    if (clothCost > inputMoney) {
        const message = document.getElementById('add-correctValue')
        message.style.display = 'block';
    }


});

document.getElementById('saving-button').addEventListener('click', function () {
    expenses();
    errorHandle();
    const inputMoney = document.getElementById('income').value;
    const savingAmount = document.getElementById('saving-amount').innerText;

    if (savingAmount > inputMoney / 2) {
        const message = document.getElementById('saving-warning')
        message.style.display = 'block';
    }

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


