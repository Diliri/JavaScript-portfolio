// # Callback

// ---

// 1. **Сума чисел:** Напишіть функцію `sumArray(numbers, callback)`, яка приймає
//    масив чисел `numbers` та колбек `callback`. Функція повинна обчислити суму
//    чисел у масиві та передати результат у колбек.

function sumArray(numbers, callback) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  callback(sum);
}

// Як це перевірити? Функція-колбек, яка просто виведе результат у консоль:
const logResult = (result) => {
  console.log("Сума чисел масиву:", result);
};

// Викликаємо нашу основну функцію
sumArray([1, 2, 3, 4, 5], logResult); // У консолі буде: Сума чисел масиву: 15

// 2. **Подвоєння чисел:** Напишіть функцію `doubleArray(numbers, callback)`, яка
//    приймає масив чисел `numbers` та колбек `callback`. Функція повинна подвоїти
//    кожне число в масиві та передати новий масив у колбек.

function doubleArray(numbers, callback) {
  const doubled = numbers.map((number) => number * 2);
  callback(doubled);
}

// Приклад використання
const myNumbers = [1, 2, 3, 4];

// Викликаємо функцію та передаємо колбек, який виведе результат у консоль
doubleArray(myNumbers, (result) => {
  console.log(result); // Виведе: [2, 4, 6, 8]
});

// 3. **Фільтр слів:** Напишіть функцію `filterWords(words, condition, callback)`,
//    яка приймає масив рядків `words`, функцію `condition` (перевірка рядка) та
//    колбек `callback`. Функція повинна фільтрувати слова масиву за допомогою
//    переданої умови та передати відфільтрований масив у колбек.

function filterWords(words, condition, callback) {
  // condition — це функція-перевірка (яка повертає true або false)
  const filteredWords = words.filter((word) => condition(word));
  callback(filteredWords);
}

// Приклад використання:

const fruits = ["apple", "banana", "apricot", "orange"];

// Умова: слово має починатися з літери "a"
const startsWithA = (word) => word.startsWith("a");

// Викликаємо головну функцію
filterWords(fruits, startsWithA, (result) => {
  console.log(result); // ['apple', 'apricot']
});

// 4. **Капіталізація рядків:** Напишіть функцію
//    `capitalizeStrings(strings, callback)`, яка приймає масив рядків `strings` та
//    колбек `callback`. Функція повинна перетворити всі рядки в масиві, роблячи
//    першу літеру кожного рядка великою, і передати перетворений масив в колбек.
function capitalizeStrings(strings, callback) {
  const capitStr = strings.map(
    (string) => string[0].toUpperCase() + string.slice(1)
  );
  callback(capitStr);
}

// Приклад використання
function printResult(result) {
  console.log(result);
}

capitalizeStrings(["apple", "banana", "orange"], printResult);
//["Apple", "Banana", "Orange"]

// 5. **Сортування чисел:** Напишіть функцію `sortNumbers(numbers, callback)`, яка
//    приймає масив чисел `numbers` та колбек `callback`. Функція повинна
//    відсортувати числа в масиві за зростанням та передати відсортований масив у
//    колбек.
function sortNumbers(numbers, callback) {
  const sortedNum = numbers.toSorted((a, b) => a - b);
  // toSorted() -це метод, який приймає функцію порівняння.
  // Якщо її не передати, числа будуть сортуватися як рядки.
  // Коли ти пишеш a - b, тo буквально кажеш: "Якщо a більше за b, результат буде додатним, тому посунь a праворуч (в кінець)". Так усе велике зміщується в кінець (зростання).
  // Коли ти пишеш b - a, тo робиш навпаки: якщо a більше за b, результат буде від'ємним, і JS залишить велике a попереду (спадання).
  callback(sortedNum);
}

const printedOut = (arr) => {
  console.log(arr);
};

sortNumbers([1, 4, 0, 3, 12], printedOut); //[0, 1, 3, 4, 12]

// 6. **Пошук максимуму:** Напишіть функцію `findMax(numbers, callback)`, яка
//    приймає масив чисел `numbers` та колбек `callback`. Функція повинна знайти
//    максимальне число в масиві та передати його в колбек.

function findMax(numbers, callback) {
  const toCallback = Math.max(...numbers);
  return callback(toCallback);
}

const arrOfNumbers = [1, 13, 23, 0.1];
// Передаємо console.log як посилання на функцію (без круглих дужок)
findMax(arrOfNumbers, console.log);

// 7. **Перевірка на парність:** Напишіть функцію `checkEven(numbers, callback)`,
//    яка приймає масив чисел `numbers` та колбек `callback`. Функція повинна
//    перевірити, чи всі числа в масиві парні, і передати результат перевірки
//    колбек.

function checkEven(numbers, callback) {
  // Метод every поверне true, якщо кожне число ділиться на 2 без остачі
  const allEven = numbers.every((number) => number % 2 === 0);

  // Передаємо цей результат (true або false) у колбек
  return callback(allEven);
}

// Перевірка:
const arr1 = [2, 4, 6, 8];
const arr2 = [2, 4, 7, 8];

checkEven(arr1, console.log); // Виведе: true
checkEven(arr2, console.log); // Виведе: false
// 8. **Об'єднання рядків:** Напишіть функцію
//    `concatStrings(strings, separator, callback)`, яка приймає масив рядків
//    `strings`, рядок `separator` та колбек `callback`. Функція повинна об'єднати
//    рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що
//    вийшов, в колбек.
function concatStrings(strings, separator, callback) {
  const toCallback = strings.join(separator);
  return callback(toCallback);
}

// Перевірка роботи функції:
const words = ["Привіт", "світ", "JavaScript"];

// Використовуємо пробіл як роздільник
concatStrings(words, " ", console.log);

// 9. **Перетворення в числа:** Напишіть функцію `parseNumbers(strings, callback)`,
//    яка приймає масив рядків `strings` та колбек `callback`. Функція повинна
//    перетворити кожен рядок з масиву на число і передати новий масив чисел в
//    колбек.

function parseNumbers(strings, callback) {
  const intoNumbers = strings.map((string) => Number(string));
  return callback(intoNumbers);
}

const arrayOfStr = ["1", "2", "3"];
parseNumbers(arrayOfStr, console.log);
// 10. **Підрахунок символів:** Напишіть функцію
//     `countCharacters(strings, callback)`, яка приймає масив рядків `strings` та
//     колбек `callback`. Функція повинна підрахувати загальну кількість символів у
//     всіх рядках масиву та передати результат у колбек.
function countCharacters(strings, callback) {
  let len = 0;
  // Заміна 'in' на 'of'
  for (const string of strings) {
    len += string.length;
  }
  return callback(len);
}

countCharacters(["123", "oppa"], console.log); //7
// ---

// # Codewars

// 1. [Kata Series](https://www.codewars.com/kata/572ab0cfa3af384df7000ff8)
// 1. [Kata](https://www.codewars.com/kata/55a1528cca4a6d4c5a0000e3/train/javascript)
// 1. [Kata](https://www.codewars.com/kata/5983cba828b2f1fd55000114)
// 1. [Kata](https://www.codewars.com/kata/5848565e273af816fb000449)
// 1. [Kata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)
// 1. [Kata](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
// 1. [Kata](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)
// 1. [Kata](https://www.codewars.com/kata/5783ef69202c0ee4cb000265)
// 1. [Kata](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)
