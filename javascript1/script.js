
let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let obj = {
    budget: money,
    timesheet: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', ''),
    q3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    q4 = prompt('Во сколько обойдется?', '');

obj.expenses.a1 = a2;
obj.expenses.q3 = q4;

alert(obj.budget / 30);



