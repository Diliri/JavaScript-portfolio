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

// 5. **Сортування чисел:** Напишіть функцію `sortNumbers(numbers, callback)`, яка
//    приймає масив чисел `numbers` та колбек `callback`. Функція повинна
//    відсортувати числа в масиві за зростанням та передати відсортований масив у
//    колбек.

// 6. **Пошук максимуму:** Напишіть функцію `findMax(numbers, callback)`, яка
//    приймає масив чисел `numbers` та колбек `callback`. Функція повинна знайти
//    максимальне число в масиві та передати його в колбек.

// 7. **Перевірка на парність:** Напишіть функцію `checkEven(numbers, callback)`,
//    яка приймає масив чисел `numbers` та колбек `callback`. Функція повинна
//    перевірити, чи всі числа в масиві парні, і передати результат перевірки
//    колбек.

// 8. **Об'єднання рядків:** Напишіть функцію
//    `concatStrings(strings, separator, callback)`, яка приймає масив рядків
//    `strings`, рядок `separator` та колбек `callback`. Функція повинна об'єднати
//    рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що
//    вийшов, в колбек.

// 9. **Перетворення в числа:** Напишіть функцію `parseNumbers(strings, callback)`,
//    яка приймає масив рядків `strings` та колбек `callback`. Функція повинна
//    перетворити кожен рядок з масиву на число і передати новий масив чисел в
//    колбек.

// 10. **Підрахунок символів:** Напишіть функцію
//     `countCharacters(strings, callback)`, яка приймає масив рядків `strings` та
//     колбек `callback`. Функція повинна підрахувати загальну кількість символів у
//     всіх рядках масиву та передати результат у колбек.

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
