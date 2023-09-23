let salary = prompt("Введите вашу зарплату (в соммах):");

salary = parseInt(salary);

let yearlySalary = salary * 12;

let weeklySalary = salary / 4;

let dailySalary = salary / 24;

console.log("Ваша зарплата в год составляет: " + yearlySalary);
console.log("Ваша зарплата в неделю составляет: " + weeklySalary);
console.log("Ваша зарплата в день составляет: " + dailySalary);
