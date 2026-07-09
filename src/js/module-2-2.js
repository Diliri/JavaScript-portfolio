// # Масиви та методи рядочків

// 1. Напиши цикл, який виведе в консоль числа від 1 до 10.
let i = 1;
while (i < 11) {
  console.log(i++);
}
// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.
for (let c = 2; c <= 20; c += 2) {
  if (c % 2 === 0) {
    console.log(c);
  }
}
// 1. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
// 1. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до
//    10).
let m = 1;

do {
  console.log(`7 * ${m} = ${7 * m}`);
  m++;
} while (m <= 10);

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}
// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//    (наприклад, факторіал числа 5: `!5 = 1 * 2 * 3 * 4 * 5`).
const userNum = Number(prompt("Введіть число: "));
let product = 1;
for (let i = 1; i <= userNum; i++) {
  product *= i;
}
console.log(product);
// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"
const helloWorld = "Hello world";
for (let i = 0; i < helloWorld.length; i += 2) {
  console.log(helloWorld[i]);
}
// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.
for (let i = helloWorld.length - 1; i > -1; i--) {
  console.log(helloWorld[i]);
}
// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.
let counter = 0;

// Додаємо умову (counter < helloWorld.length), щоб цикл не вийшов за межі рядка
while (counter < helloWorld.length && helloWorld[counter] !== " ") {
  console.log(helloWorld[counter]);
  counter++;
}
// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок
// 1. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у
//    верхньому регістрі
// 1. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до
//    рядочка str1 стільки разів скільки вказали у параметрі count.
