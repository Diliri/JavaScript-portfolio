// # Числа та порівняння

// ## Задачі

// ```
// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true,
// якщо перша літера str1 дорівнює останій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isFirstEqualLast(str1, str2) {
  return str1[0] === str2[str2.length - 1];
}
// ```
// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true,
// якщо перша літера str1 дорівнює першій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isFirstEqualFirst(str1, str2) {
  return str1[0] === str2[0];
}
// ```
// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true,
// якщо довжина str1 дорівнює довжині str2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isLengthEqual(str1, str2) {
  return str1.length === str2.length;
}
// ```
// Задача-4
// Напишіть функцію яка приймає число num.
// Функція повинна повернути булеве значення true,
// якщо кількість цифр у числі парна.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function evenLength(num) {
  return String(num).length % 2 === 0;
}
// ```
// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true,
// якщо num1 більше, ніж num2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isBigger(num1, num2) {
  return num1 > num2;
}
// ```
// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true,
// якщо num1 ділиться на num2 без остачі.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isDivided(num1, num2) {
  return num1 % num2 === 0;
}
// ```
// Задача-7
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true,
// якщо num є непарним числом.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isOdd(num) {
  return num % 2 !== 0;
}
// ```
// Задача-8
// Напишіть функцію, яка приймає параметр str.
// Функція повинна повернути булеве значення true,
// якщо str містить принаймні одну велику літеру.
// В іншому випадку функція повинна повернути булеве значення false.

// Підказка: допоможе toLowerCase();
// ```
function bigLetter(str) {
  return str !== str.toLowerCase();
}
// ```
// Задача-9
// Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true,
// якщо довжина str1 більше, ніж довжина str2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function compareLenOfStr(str1, str2) {
  return str1.length > str2.length;
}
// ```
// Задача-10
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true,
// якщо str містить хоча б один пробіл.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function detectSpace(str) {
  return str.includes(" ");
}
// ```
// Задача-11
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true,
// якщо str є паліндромом(однаковий у зворотному напрямку).
// В іншому випадку функція повинна повернути булеве значення false.

// Підказка: тут допоможе метод масиву reverse();
// ```
function palindrom(str) {
  return str === str.split("").reverse().join("");
}
// ```
// Задача-12
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true,
// якщо num1 менше або дорівнює num2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function compareNum(num1, num2) {
  return num1 <= num2;
}
// ```
// Задача-13
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true,
// якщо перша літера str є голосною(a, e, i, o, u).
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isFirstLetterVowel(str) {
  // Створюємо рядок з голосними і перевіряємо, чи входить туди перша літера
  return "aeiou".includes(str[0].toLowerCase());
}
// ```
// Задача-14
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 і num2 рівні.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isEqual(num1, num2) {
  return num1 === num2;
}
// ```
// Задача-15
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true,
// якщо num більше або дорівнює нулю.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isPositive(num) {
  return num >= 0;
}
// ```
// Задача-16
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true,
// якщо довжина str є парною.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isEvenLen(str) {
  return str.length % 2 === 0;
}
// ```
// Задача-17
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true,
// якщо num1 ділиться на 2, а num2 не ділиться на 2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function evenAndOdd(num1, num2) {
  return num1 % 2 === 0 && num2 % 2 !== 0;
}
// ```
// Задача-18
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true,
// якщо num більше 100, але менше 200.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isBigger100andSmaller200(num) {
  return num > 100 && num < 200;
}
// ```
// Задача-19
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true,
// якщо str містить лише маленькі літери.
// В іншому випадку функція повинна повернути булеве значення false.

// Підказка: допоможе toLowerCase();
// ```
function isAllLowerCase(str) {
  // Якщо ж треба врахувати цифри та інші знаки,
  // зазвичай використовують регулярні вирази(RegEx):
  // Перевіряє, чи складається рядок ТІЛЬКИ з маленьких літер
  // від a до z(можна додати й українські)
  // return /^[a-zа-щьюяєіїґ]+$/.test(str);
  return str === str.toLowerCase();
}
// ```
// Задача-20
// Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true, якщо str1 є частиною str2.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function includesInStr(str1, str2) {
  return str2.includes(str1);
}
// ```
// Задача-21
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є негативним числом.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isNegative(num) {
  return num < 0;
}
// ```
// Задача-22
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true,
// якщо різниця між num1 та num2 більше 50.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isDifferenceBiggerThan50(num1, num2) {
  return Math.abs(num1 - num2) > 50;
}
// ```
// Задача-23
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є нуль.
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isZero(num) {
  return num === 0;
}
// ```
// Задача-24
// Напишіть функцію, яка приймає параметр str.
// Функція повинна повернути булеве значення true,
// якщо остання літера str є голосною (a, e, i, o, u).
// В іншому випадку функція повинна повернути булеве значення false.
// ```
function isLastLetterVowel(str) {
  return "aeiou".includes(str[str.length - 1].toLowerCase());
}
// ```
// Задача-25
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є кратним 10.
// В іншому випадку функція повинна повернути булеве значення false.
function isDividedBy10(num) {
  return num % 10 === 0;
}
// ```

// ## Task 1

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value1`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// ```js
// const value1 = 27.5;
// ```
const value1 = 27.5;
console.log(Math.floor(value1)); // 27
console.log(Math.ceil(value1)); // 28
console.log(Math.round(value1)); // 28
// ---

// ## Task 2

// Яким буде результат виразів?

// ```js
// console.log(5 > 4); true

// console.log(10 >= '7'); true

// console.log('2' > '12'); true

// console.log('2' < '12'); false

// console.log('4' == 4); true

// console.log('6' === 6); false

// console.log('false' === false); false

// console.log(1 == true); true

// console.log(1 === true); false

// console.log('0' == false); true

// console.log('0' === false); false

// console.log('Papaya' < 'papaya'); true

// console.log('Papaya' === 'papaya'); false

// console.log(undefined == null); true

// console.log(undefined === null); false
// ```

// ---

// ## Task 3

// Напиши скрипт який переведе значення `totalMinutes` (кількість хвилин) рядок у
// форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

// .padStart(2, 0): Метод доповнює рядок до потрібної довжини (2 символи),
// додаючи на початок вказаний символ (0)
const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```

// ---

// ## Task 4

// Відрефактори код так, щоб у змінну `value` присвоювалося значення змінної
// `incomingValue`, якщо воно не дорівнює `undefined` або `null`. У в іншому
// випадку має надаватися значення `defaultValue`. Перевір роботу скрипта для
// сліпучих значень змінної `incomingValue`: null, undefined, 0, false.
// Використовуй оператор "?" (nullish coalescing operator).

// ```js
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value);
//     || (або) вважає «хибними» всі так звані falsy - значення:
//     null, undefined, 0, false, ""(порожній рядок) та NaN.
// Якщо incomingValue дорівнює 0 або false,
// оператор || підставить defaultValue(10),
// хоча за умовою завдання $0$ та $false$ мають зберігатися! ??
// (nullish coalescing) реагує тільки на null та undefined.
// Усі інші значення(включаючи 0 та false) він вважає дійсними і зберігає їх.
// ---

// ## CodeWars

// 1. [Kata](https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6)
// Write a function which takes its speed in km per hour
// and returns it in cm per second, rounded down to the integer(= floored).
function cockroachSpeed(velocity) {
  // Множимо швидкість velocity на (100000 / 3600) і заокруглюємо до меншого цілого
  return Math.floor((velocity * 100000) / 3600);
}
// 2. [Kata](https://www.codewars.com/kata/5748838ce2fab90b86001b1a)
// Завдання: Площа квадрата
// Напиши функцію, яка обчислює площу квадрата за заданою довжиною дуги кола A.
// Дуга A становить чверть($1 / 4$) від повної довжини кола,
// а радіус цього кола дорівнює стороні квадрата.
// Вимоги:Використовувати вбудоване значення $\pi$(Math.PI).
// Округлити результат до 2 знаків після коми.
function squareArea(A) {
  // додаємо +, щоб перетворити на число, бо метод toFixed повертає string
  return +(((A * 2) / Math.PI) ** 2).toFixed(2);
}
// 3. [Kata](https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a)
// to write a function which returns the time in milliseconds
function timeInMilliseconds(hours, minutes, seconds) {
  let time = 0;
  time += (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  return time;
}
// 4. [Kata](https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript)
function add(a, b) {
  return a + b;
}

function subt(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b; // остача від ділення
}

function exponent(a, b) {
  return a ** b;
}
// 5. [Kata](https://www.codewars.com/kata/5bb0c58f484fcd170700063d)
// Задача про відстань між стовпами (pillars),
// не враховуючи саму ширину першого і останнього стовпів

function pillars(numPill, dist, widthPill) {
  // Якщо стовп 1 або менше, відстань 0
  if (numPill <= 1) return 0;
  // Відстань у проміжках (переводимо метри в см) + ширина внутрішніх (!!!) стовпів
  return (numPill - 1) * dist * 100 + (numPill - 2) * widthPill;
}
