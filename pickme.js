let n1 = +prompt();
if (n1 > 0) alert('Додатне');
else if (n1 < 0) alert("Від'ємне");
else alert('Нуль');

let age = +prompt();
if (age >= 0 && age <= 120) alert('Ок');
else alert('Неок');

let n2 = +prompt();
if (n2 < 0) alert(-n2);
else alert(n2);

let h = +prompt(), m = +prompt(), s = +prompt();
if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) alert('Ок');
else alert('Неок');

let x = +prompt(), y = +prompt();
if (x === 0 && y === 0) alert('Старт');
else if (x === 0) alert('Ось Y');
else if (y === 0) alert('Ось X');
else if (x > 0 && y > 0) alert('1');
else if (x < 0 && y > 0) alert('2');
else if (x < 0 && y < 0) alert('3');
else alert('4');

let mNum = +prompt();
switch (mNum) {
    case 1: alert('Січень'); break;
    case 2: alert('Лютий'); break;
    case 3: alert('Березень'); break;
    case 4: alert('Квітень'); break;
    case 5: alert('Травень'); break;
    case 6: alert('Червень'); break;
    case 7: alert('Липень'); break;
    case 8: alert('Серпень'); break;
    case 9: alert('Вересень'); break;
    case 10: alert('Жовтень'); break;
    case 11: alert('Листопад'); break;
    case 12: alert('Грудень'); break;
    default: alert('Неок');
}

let a = +prompt(), b = +prompt(), op = prompt();
switch (op) {
    case '+': alert(a + b); break;
    case '-': alert(a - b); break;
    case '*': alert(a * b); break;
    case '/': alert(b !== 0 ? a / b : 'Ноль!'); break;
    default: alert('Ошибка');
}

let num1 = +prompt(), num2 = +prompt();
alert(num1 > num2 ? num1 : num2);

let n5 = +prompt();
alert(n5 % 5 === 0 ? 'Кратно' : 'Не кратно');

let p = prompt();
alert(p === 'Земля' || p === 'земля' ? 'Привіт, землянине!' : 'Привіт, інопланетянине!');