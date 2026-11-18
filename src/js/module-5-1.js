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
// ```
// Завдання
// Реалізуйте функцію, яка приймає два або більше параметрів.
// Перший параметр — це масив чисел, за яким слідує довільна кількість числових масивів.
// Кожен із цих числових масивів містить два числа, що є індексами елементів у масиві`arr`
// (ці числа завжди знаходитимуться в межах допустимого діапазону).
// Для кожного такого масиву поміняйте відповідні елементи місцями.

// Щоб ознайомитися з детальним поясненням стрілкових функцій (тільки для JS),
// оператора розширення(spread), деструктуризації та залишкових параметрів(rest parameters),
// прокрутіть сторінку вниз.
// ```
// Це завдання чудово демонструє роботу із залишковими параметрами(rest parameters)
// та деструктуризацією масивів у JavaScript.

// Завдяки використанню синтаксису ...pairs, функція може приймати будь-яку кількість додаткових
// аргументів - пар індексів, а деструктуризація дозволяє елегантно поміняти місцями елементи
// за допомогою деструктуризуючого присвоєння без створення тимчасових змінних.

function swapElements(arr, ...pairs) {
  // Створюємо копію масиву, щоб не змінювати оригінальний (опціонально, залежно від умов)
  const result = [...arr];

  for (const [index1, index2] of pairs) {
    // Міняємо елементи місцями за допомогою деструктуризації
    // destructuring assignment method
    [result[index1], result[index2]] = [result[index2], result[index1]];
  }

  return result;
}

// Приклад використання:
const numbers = [10, 20, 30, 40, 50];
const swapped = swapElements(numbers, [0, 3], [1, 4]);

console.log(swapped); // [40, 50, 30, 10, 50] (залежно від пар індексів)
// 1. [Kata](https://www.codewars.com/kata/55a1528cca4a6d4c5a0000e3/train/javascript)
// значення за замовчуванням (default parameter)
// Вимога: Виклик defaultExample(3) має повернути 10.
function defaultExample(x, y = 7) {
  return x + y;
}
// залишок параметрів (rest parameters)
// Вимога: Виклик restExample(9) має повернути 0.
function restExample(x, ...y) {
  return y.length;
}
// оператор поширення (spread operator)
// Вимога: Виклик spreadExample(...[1, 1, 1]) розгортає масив у три аргументи (x = 1, y = 1, z = 1).
// Найпростіший спосіб перевірити, чи дійсно всі три елементи масиву успішно дійшли до функції
// як окремі параметри x, y та z — це скласти їх разом: return x + y + z;.
function spreadExample(x, y, z) {
  return x + y + z;
}
spreadExample(...[1, 1, 1]);
// Просте правило для запам'ятовування:
// Rest (Залишок): Збирає багато розрізнених аргументів в один масив (упаковує).
// Spread (Поширення): Розгортає один масив на окремі елементи (розпаковує).

// 1. [Kata](https://www.codewars.com/kata/5983cba828b2f1fd55000114)
// Створіть метод, який приймає масив(або список) і повертає індекс,
// за яким знаходиться єдине непарне число.

// Цей метод має працювати з масивами, що містять від’ємні числа.
// Якщо в масиві немає непарних чисел, метод має повернути - 1.
function oddOne(arr) {
  return arr.findIndex((num) => Math.abs(num) % 2 === 1);
}
oddOne([2, 4, 6, 7, 10]); // => 3
oddOne([2, 16, 98, 10, 13, 78]); // => 4
oddOne([4, -8, 98, -12, -7, 90, 100]); // => 4
oddOne([2, 4, 6, 8]); // => -1
// 1. [Kata](https://www.codewars.com/kata/5848565e273af816fb000449)
// Опис:
// Зашифруй це!

// Ваше завдання — створити секретні повідомлення, які можна розшифрувати за допомогою ката
// «Розшифруй це!» (Decipher this!). Умови такі:

// Повідомлення являє собою рядок, що складається зі слів, розділених пробілами.
// Необхідно зашифрувати кожне слово в повідомленні, дотримуючись таких правил:
// Першу літеру слід замінити на її ASCII-код.
// Другу літеру потрібно поміняти місцями з останньою літерою.
// Для спрощення: у вхідних даних немає спеціальних символів.
// encryptThis "Hello" == "72olle"
// encryptThis "good" == "103doo"
// encryptThis "hello world" == "104olle 119drlo"

// Щоб розв'язати цю задачу, найкраще розбити рядок на масив слів,
// обробити кожне слово окремо за допомогою.map(), а потім знову з'єднати у рядок.
function encryptThis(text) {
  return text
    .split(" ") // 1. Розбиваємо рядок на масив слів по пробілу
    .map((word) => {
      // 2. Отримуємо ASCII-код першої літери
      const firstCharCode = word.charCodeAt(0);

      // Якщо слово складається з 1 літери (наприклад, "A")
      if (word.length === 1) {
        return `${firstCharCode}`;
      }

      // Якщо слово з 2 літер (наприклад, "go" -> "103o")
      if (word.length === 2) {
        return `${firstCharCode}${word[1]}`;
      }

      // Для слів від 3 літер і більше:
      const secondChar = word[1]; // друга літера
      const lastChar = word[word.length - 1]; // остання літера
      const middle = word.slice(2, -1); // усе, що між другою та останньою

      // Складаємо слово за правилами: код першої + остання + середина + друга
      return `${firstCharCode}${lastChar}${middle}${secondChar}`;
    })
    .join(" "); // 3. З'єднуємо зашифровані слова назад через пробіл
}

// Перевірка:
console.log(encryptThis("Hello")); // "72olle"
console.log(encryptThis("good")); // "103doo"
console.log(encryptThis("hello world")); // "104olle 119drlo"//
// 1.[Kata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)
// Опис:
// Розшифруй це!

// Ваше завдання — розшифрувати секретні повідомлення, якібули створені за допомогою ката
// «Зашифруй це!» (encrypt this!). Умови такі:

// Повідомлення являє собою рядок, що складається зі слів, розділених пробілами.
// Необхідно розшифрувати кожне слово в повідомленні, дотримуючись таких правил:
// Першу літеру слід повернути за її ASCII-кодом.
// Другу літеру потрібно поміняти місцями з останньою літерою.
// Для спрощення: у вхідних даних немає спеціальних символів.
// decryptThis "72olle" == "Hello"
// decryptThis "103doo" == "good"
// decryptThis "104olle 119drlo" == "hello world"

// Щоб розв'язати цю задачу, найкраще розбити рядок на масив слів,
// обробити кожне слово окремо за допомогою.map(), а потім знову з'єднати у рядок.
function decryptThis(text) {
  return text
    .split(" ") // 1. Розбиваємо рядок на масив слів по пробілу
    .map((word) => {
      // 2. Витягуємо числову частину (ASCII-код) з початку слова
      // Шукаємо всі цифри на початку за допомогою регулярного виразу
      const charCodeMatch = word.match(/^\d+/);
      if (!charCodeMatch) return word; // на випадок порожнього рядка

      const charCode = Number(charCodeMatch[0]); // сам код як число (наприклад, 72)
      const firstChar = String.fromCharCode(charCode); // відновлена перша літера ("H")

      // Залишок слова після цифрового ASCII-коду
      const rest = word.slice(charCodeMatch[0].length); // наприклад, "olle"

      // Якщо після коду нічого не залишилось (слово складалося лише з цифр/коду)
      if (rest.length === 0) {
        return firstChar;
      }

      // Якщо в залишку лише 1 літера (наприклад, "103o" -> код 103 і літеру "o")
      if (rest.length === 1) {
        return firstChar + rest;
      }

      // Для решти слів: перша + остання літера залишку + середина залишку + друга літера залишку
      // За правилом шифрування, другу і останню літери міняли місцями,
      // тому при розшифруванні міняємо їх назад!
      const lastChar = rest[rest.length - 1]; // стала другою
      const secondChar = rest[0]; // стала останньою
      const middle = rest.slice(1, -1); // середина не змінювалася

      return `${firstChar}${lastChar}${middle}${secondChar}`;
    })
    .join(" "); // 3. З'єднуємо розшифровані слова назад через пробіл
}

// Перевірка:
console.log(decryptThis("72olle")); // "Hello"
console.log(decryptThis("103doo")); // "good"
console.log(decryptThis("104olle 119drlo")); // "hello world"

// 1. [Kata](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
// ката з Codewars під назвою "Meeting"
// Джон запросив друзів. Його список:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Напишіть пограму, яка makes this string uppercase and gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// The result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
function meeting(s) {
  return s
    .toUpperCase() // 1. Переводимо весь рядок у верхній регістр
    .split(";") // 2. Розбиваємо рядок на масив окремих гостей за крапкою з комою
    .map((guest) => {
      const [first, last] = guest.split(":"); // Розділяємо ім'я та прізвище
      return { first, last };
    })
    .sort((a, b) => {
      // 3. Сортуємо спочатку за прізвищем, потім за ім'ям
      if (a.last !== b.last) {
        return a.last.localeCompare(b.last);
      }
      return a.first.localeCompare(b.first);
    })
    .map((guest) => `(${guest.last}, ${guest.first})`) // 4. Форматуємо у вигляді (ПРІЗВИЩЕ, ІМ'Я)
    .join(""); // 5. З'єднуємо все назад у єдиний рядок без пробілів
}

// Приклад перевірки:
const s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(s));
// Виведе: "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// 1. [Kata](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)
// +1 Array
// Опис:
// Дано масив цілих чисел довільної довжини. Поверніть масив, який відповідає числу,
// представленому початковим масивом, збільшеному на 1.
// Якщо масив невалідний (порожній, містить від'ємні цілі числа або цілі числа,
// що складаються більше ніж з 1 цифри), поверніть nil(або еквівалент у вашій мові програмування).

// Приклади

// Валідні масиви:
// [4, 3, 2, 5] поверне [4, 3, 2, 6] (4325 + 1 = 4326)
// [1, 2, 3, 9] поверне [1, 2, 4, 0] (1239 + 1 = 1240)
// [9, 9, 9, 9] поверне [1, 0, 0, 0, 0] (9999 + 1 = 10000)
// [0, 1, 3, 7] поверне [0, 1, 3, 8] (0137 + 1 = 0138)

// Невалідні масиви:
// [] — невалідний, оскільки він порожній
// [1, -9] — невалідний, оскільки -9 не є невід'ємним цілим числом
// [1, 2, 33] — невалідний, оскільки 33 не є одноцифровим цілим числом

// моє неправильне рішення:
function plusOneToArr1(arr) {
  if (
    arr.length === 0 ||
    arr.some((el) => el < 0) ||
    arr.some((el) => el.length > 9) // бо в чисел немає властивості length
  )
    return null;
  else {
    arr = arr.join("");
    arr = Number(arr);
    arr += 1;
    arr = String(arr);
    return arr.split("");
  }
}
// 2. Підводні камені самої умови (Edge Cases)
// Підхід через Number(arr.join("")) зламається на двох випадках із прикладу:

// Провідні нулі([0, 1, 3, 7]): Number("0137") перетвориться на 137, додасться 1(138),
// і ти отримаєш[1, 3, 8] замість очікуваного[0, 1, 3, 8].

// Дуже довгі масиви (переповнення Number):
// У JS максимальне безпечне ціле число — 9007199254740991(16 цифр).
// Якщо масив матиме 20 + цифр, Number() втратить точність і округлить останні цифри.

// правильне рішення від Gemini:
function plusOneToArr(arr) {
  // 1. Валідація: масив не порожній, кожен елемент — ціле число від 0 до 9
  if (
    !arr.length ||
    arr.some((el) => !Number.isInteger(el) || el < 0 || el > 9)
  ) {
    return null;
  }

  // Робимо копію масиву, щоб не змінювати вхідний (хороша практика)
  const result = [...arr];

  // 2. Ідемо з кінця масиву до початку
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i] += 1;
      return result; // Якщо цифра < 9, додаємо 1 і одразу повертаємо результат
    }
    // Якщо цифра була 9, вона стає 0, а цикл іде далі (переносимо одиницю вліво)
    result[i] = 0;
  }

  // 3. Якщо цикл дійшов сюди, значить усі цифри були дев'ятками (наприклад, [9, 9, 9])
  //Метод .unshift() в JavaScript додає один або кілька елементів на самий початок масиву,
  //зсуваючи всі існуючі елементи вправо.
  // У контексті нашої задачі result.unshift(1) означає: «встав число 1 перед усіма елементами масиву
  result.unshift(1);
  return result;
}

// 1. [Kata](https://www.codewars.com/kata/5783ef69202c0ee4cb000265)
// IndexOf Array in Array
// Опис:

// Метод indexOf у JavaScript не працює з масивами як вхідними даними. Це пов'язано з тим, що [1,2] === [1,2] у JavaScript повертає false. Багато інших мов мають подібні особливості.

// Однак іноді буває корисно здійснити пошук масиву. Напишіть функцію, яка шукає масив у двовимірному масиві та повертає індекс першого збіжного елемента. Якщо збігів немає, ваша функція повинна повернути -1.

// Дивіться приклади:

// JavaScript
// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// Від вас вимагатиметься перевірити вхідні дані за такими критеріями:

// кожен елемент масиву, в якому здійснюється пошук, має бути масивом;

// кожен підмасив у двовимірному масиві повинен мати довжину два; та

// запит (query) має бути масивом довжиною два.

// Якщо вхідні дані недійсні, ваша функція повинна викинути помилку (throw an Error).

// Дивіться приклади:

// JavaScript
// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => викидає помилку (throw Error)
// arrayToSearch = [1,2,3,4,5,6]; // => викидає помилку (throw Error)
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => дійсні вхідні дані (valid input)
// var query = [1,2]; // => дійсні вхідні дані (valid input)
// query = 5; // => викидає помилку (throw Error)
// query = [9,2,1]; // => викидає помилку (throw Error)

// моє неправильне рішення
function searchAnArr1(arrayToSearch, query) {
  if (typeof arrayToSearch.every((arr) => arr.lenth === 2) === Object) {
    return arrayToSearch.find(query).indexOf(query);
  }
  return "throw Error";
}

//рішення Gemini
function searchAnArr(arrayToSearch, query) {
  // 1. Валідація query: має бути масивом довжиною 2
  if (!Array.isArray(query) || query.length !== 2) {
    throw new Error("Invalid query format");
  }

  // 2. Валідація arrayToSearch: кожен елемент має бути масивом довжиною 2
  if (
    !Array.isArray(arrayToSearch) ||
    !arrayToSearch.every((arr) => Array.isArray(arr) && arr.length === 2)
  ) {
    throw new Error("Invalid arrayToSearch format");
  }

  // 3. Пошук індексу елемента (порівнюємо елементи за значенням)
  return arrayToSearch.findIndex(
    (arr) => arr[0] === query[0] && arr[1] === query[1]
  );
}

// 1. [Kata](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)
// Back and forth then Reverse!
// Example
// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]
// return T
// Note
// size of S goes up to 10^6
// Keep the efficiency of your code in mind.
// Do not mutate the Input.
function BackAndForthThenReverse(S) {
  if (!Array.isArray(S)) {
    throw new Error("Invalid input format");
  }

  const T = [];
  let left = 0;
  let right = S.length - 1;
  let forward = true; // прапорець для чергування напрямку додавання/реверсу

  while (left <= right) {
    if (left === right) {
      T.push(S[left]);
      break;
    }

    const first = S[left];
    const last = S[right];

    left++;
    right--;

    if (forward) {
      T.push(first, last);
    } else {
      T.push(last, first);
    }

    forward = !forward; // змінюємо напрямок для наступної ітерації
  }

  return T;
}
// Алгоритм із двома вказівниками
//   (Two Pointers) — це класичний та надзвичайно ефективний підхід для задач,
//   де потрібно працювати з елементами масиву з обох кінців одночасно(з початку і з кінця).
//   Нижче наведено детальний розбір того, як він працює для цієї задачі, а також аналіз його ефективності.
//   Як працює алгоритм із двома вказівниками
//   Замість того, щоб фізично видаляти елементи з початку масиву
// (що змушує JavaScript зсувати всі решта елементів у пам'яті за час $O(n)$),
//  ми використовуємо два індекси: left — починає з самого початку масиву(0).
//   right — починає з кінця масиву(S.length - 1).
//   Ми рухаємо їх назустріч один одному(left збільшується, right зменшується),
//   поки вони не зустрінуться або не перетнуться.
//   Кроки алгоритму:
//   Ініціалізація: Створюємо порожній масив T, вказівники left = 0, right = S.length - 1
//   та булевий прапорець forward = true, який визначає порядок додавання елементів.
//   Цикл:
//   Поки left <= right:
//   Якщо left === right(непарна кількість елементів), додаємо центральний елемент і завершуємо цикл.
//   Беремо елементи з обох кінців: first = S[left] та last = S[right].
//   Зсуваємо вказівники всередину: left++ та right--.
//   Залежно від стану прапорця forward:
//   Якщо true, додаємо у масив T у прямому порядку: [first, last].
//   Якщо false, додаємо у зворотному порядку: [last, first].
//   Інвертуємо прапорець(forward = !forward) для наступної ітерації.
//   Часова та просторова складність
//   Часова складність: $O(n)$
// Ми проходимо по масиву S рівно один раз.Кожна операція взяття елемента за індексом(O(1))
// та додавання в масив через push(O(1) в амортизованому розумінні) виконується миттєво.
// Навіть для масиву розміром у $10 ^ 6$ елементів цикл виконається приблизно $500 000$ разів,
// що займає мілісекунди і не перевищує ліміт часу виконання(Time Limit).
// Просторова складність: $O(n)$
// Пам'ять потрібна лише для збереження нового результатного масиву T, який містить стільки ж елементів,
// скільки й вхідний масив S.Оригінальний масив не дублюється і не мутується,
// що повністю задовольняє умову задачі.
