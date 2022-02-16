document.getElementById('expense-btn').addEventListener('click', function () {
    const food = document.getElementById('food-expense');
    const foodCost = food.value;
    const foodExpense = parseFloat(foodCost);

    const rent = document.getElementById('rent-expense');
    const rentCost = rent.value;
    const rentExpense = parseFloat(rentCost);

    const cloth = document.getElementById('cloth-expense');
    const clothCost = cloth.value;
    const clothExpense = parseFloat(clothCost);

    const total = foodExpense + rentExpense + clothExpense;
    console.log(total)

    const allCost = document.getElementById('total-expenses');
    //const totalExpense = allCost.innerText;
    allCost.innerText = total;

})
