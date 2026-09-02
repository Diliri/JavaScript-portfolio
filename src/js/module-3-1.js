// # Масиви

// ## Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
function eachEl(arr) {
  for (let el of arr) {
    console.log(el);
  }
}
// 2. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
//    консоль.

// Варіант 1
function eachEvenEl_1(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

// Варіант 2
function eachEvenEl_2(arr) {
  arr.forEach((el, index) => {
    if (index % 2 === 0) console.log(el);
  });
}
// 3. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
//    консоль.
function onlyEvenNum(arr) {
  for (let el of arr) {
    if (el % 2 === 0) {
      console.log(el);
    }
  }
}
// 4. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
//    чисел. Потрібно вивести лише ті елементи масиву які більші за max.
function biggerThanMax(arr, max) {
  for (let el of arr) {
    if (el > max) {
      console.log(el);
    }
  }
}
// 5. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
function sumOfAll(arr) {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum;
}
// 6. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.

// Варіант 1. Накопичуємо суму збігів у акумуляторі acc.
function howManyTimesElementInArr_1(arr, target) {
  return arr.reduce((acc, el) => (el === target ? acc + 1 : acc), 0);
}
// Варіант 2. Класичний цикл.
function howManyTimesElementInArr_2(arr, target) {
  let count = 0;
  for (el of arr) {
    if (el === target) {
      count += 1;
    }
  }
  return count;
}

// Варіант 3. Через метод .filter та .length
function howManyTimesElementInArr_3(arr, target) {
  return arr.filter((el) => el === target).length;
}
// 7. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(від`ємні числа) з масиву та повернути новий масив.

// Варіант 1. Через метод фільтер
function isPositive_1(arr) {
  return arr.filter((el) => el >= 0);
}
// Варіант 2. Через метод for of
function isPositive_2(arr) {
  const newArr = [];
  for (const el of arr) {
    if (el >= 0) newArr.push(el);
  }
  return newArr;
}

// 8. Напиши функцію, яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок
//    до нижнього регістру, в іншому випадку привести до верхнього регістру.
function toCase(arr) {
  const result = []; // створюємо новий порожній масив

  for (const el of arr) {
    if (typeof el !== "string") {
      return "Введіть рядок";
    } else {
      // Додаємо змінений рядок у новий масив
      const newEl = el.length < 6 ? el.toLowerCase() : el.toUpperCase();
      result.push(newEl);
    }
  }

  return result; // повертаємо новий масив
}

// Перевірка:
console.log(toCase(["Apple", "Banana"])); // ["apple", "BANANA"]
console.log(toCase(["Apple", 100])); // "Введіть рядок"

// 9. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише непарні числа.
function oddNumbers(arr) {
  const result = [];
  for (const el of arr) {
    if (typeof el !== "number") {
      return "В масиві мають бути лише числа!";
    }
    if (el % 2 !== 0) {
      result.push(el);
    }
  }
  return result;
}
// Перевірка:
console.log(oddNumbers([1, 2, 3, 4, 5, -7])); // [1, 3, 5, -7]
console.log(oddNumbers([1, "2", 3])); // "В масиві мають бути лише числа!"

// 10. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
//    число помножене на індекс, за яким воно знаходиться в масиві.
// Варіант 2.
function multiplyElementsByIndex_1(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // Перевіряємо тип елемента за його індексом
    if (typeof arr[i] !== "number") {
      return "В масиві мають бути лише числа!";
    }
    result.push(arr[i] * i);
  }
  return result;
}
// Перевірка:
console.log(multiplyElementsByIndex_1([10, 20, 30])); // [0, 20, 60] (бо 10*0, 20*1, 30*2)

// Варіант 2. Метод some i map
function multiplyElementsByIndex_2(arr) {
  // Перевірка: "Чи є в масиві ХОЧА Б ОДИН елемент, який НЕ є числом?"
  if (arr.some((el) => typeof el !== "number")) {
    return "В масиві мають бути лише числа!";
  }
  return arr.map((el, index) => el * index);
}
// 11. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише числа, які діляться на 3.
function dividedByThree(arr) {
  // Перевірка: "Чи є в масиві ХОЧА Б ОДИН елемент, який НЕ є числом?"
  if (arr.some((el) => typeof el !== "number")) {
    return "В масиві мають бути лише числа!";
  }
  return arr.filter((el) => el % 3 === 0);
}
// Перевірка:
console.log(dividedByThree([1, 3, 5, 6, 9, 10])); // [3, 6, 9]
console.log(dividedByThree([3, "hello"])); // "В масиві мають бути лише числа!"
// ## Середні задачі

// 12. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1, і arr2.
function includesEl_1(arr1, arr2) {
  const arr3 = [];
  for (const el1 of arr1) {
    // використовуємо for...of
    for (const el2 of arr2) {
      if (el1 === el2) {
        arr3.push(el1);
        break;
        // зупиняємо внутрішній цикл, щоб уникнути дублікатів,
        // якщо el1 зустрічається кілька разів в arr2
      }
    }
  }
  return arr3;
}
function includesEl_2(arr1, arr2) {
  const arr3 = arr1.filter((el) => arr2.includes(el));
  return arr3;
}
// Якщо потрібно отримувати лише унікальні спільні елементи,
// то результат можна додатково загорнути в Set:
function includesEl_3(arr1, arr2) {
  const arr3 = arr1.filter((el) => arr2.includes(el));
  const uniqueResult = [...new Set(arr3)];
  return uniqueResult;
}

// 13. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1, яких немає у масиві arr2.
function isNotAbleEl_1(arr1, arr2) {
  return arr1.filter((el) => !arr2.includes(el));
}
function isNotAbleEl_2(arr1, arr2) {
  const result = [];
  for (const el1 of arr1) {
    let found = false;
    for (const el2 of arr2) {
      if (el1 === el2) {
        found = true;
        break; // Знайшли збіг — далі шукати в arr2 немає сенсу
      }
    }
    // Якщо елемента el1 не було в arr2 — додаємо його в результат
    if (!found) {
      result.push(el1);
    }
  }
  return result;
}
function isNotAbleEl_3(arr1, arr2) {
  const result = [];
  for (const el of arr1) {
    // Якщо елемента з arr1 немає в arr2 — додаємо його в result
    if (!arr2.includes(el)) {
      result.push(el);
    }
  }
  return result;
}

function getDifference(arr1, arr2) {
  const result = [];
  for (const el1 of arr1) {
    // Метод indexOf повертає -1, якщо елемент не знайдено
    if (arr2.indexOf(el1) === -1) {
      result.push(el1);
    }
  }
  return result;
}
// 14. Напиши функцію яка приймає масив та знаходить мінімальний елемент.
function returnMin(arr) {
  // Перевіряємо, чи передано масив
  if (!Array.isArray(arr)) {
    return "Переданий аргумент не є масивом";
  }
  // Перевіряємо, чи масив не порожній
  if (arr.length === 0) {
    return "Масив порожній";
  }
  // Перевіряємо, чи всі елементи є дійсними числами
  for (const el of arr) {
    if (typeof el !== "number" || Number.isNaN(el)) {
      return "Введіть в масив лише числа";
    }
  }
  // Знаходимо мінімальний елемент
  return Math.min(...arr);
}

// через цикл - найбільша швидкодія
function findMinLoop(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  let maxEl = arr[0]; // Беремо перший елемент за початковий мінімум
  for (const el of arr) {
    if (el < minEl) {
      minEl = el;
    }
  }
  return minEl;
}

// 15. Напиши функцію яка приймає масив та знаходить максимальний елемент.
function returnMax(arr) {
  // Перевіряємо, чи передано масив
  if (!Array.isArray(arr)) {
    return "Переданий аргумент не є масивом";
  }
  // Перевіряємо, чи масив не порожній
  if (arr.length === 0) {
    return "Масив порожній";
  }
  // Перевіряємо, чи всі елементи є дійсними числами
  for (const el of arr) {
    if (typeof el !== "number" || Number.isNaN(el)) {
      return "Введіть в масив лише числа";
    }
  }
  // Знаходимо максимальний елемент
  return Math.max(...arr);
}

// Через метод reduce
function findMaxReduce(arr) {
  if (!arr || arr.length === 0) return null;
  return arr.reduce((max, current) => (current > max ? current : max));
}

// for loop - має найбільшу швидкодію
function findMaxLoop(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  let maxEl = arr[0]; // Беремо перший елемент за початковий максимум
  for (const el of arr) {
    if (el > maxEl) {
      maxEl = el;
    }
  }
  return maxEl;
}
// 16. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву.
function biggerThanAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  const average = sum / arr.length;
  const resArray = [];
  for (const el of arr) {
    if (el > average) {
      resArray.push(el);
    }
  }
  return resArray;
}

// сучасний варіант від gemini
function biggerThanAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // 1. Знаходимо середнє значення
  const average = arr.reduce((sum, el) => sum + el, 0) / arr.length;
  // 2. Фільтруємо елементи, які більші за середнє
  return arr.filter((el) => el > average);
}

// 17. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.
function elementsBiggerThanTheirIndexes(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "введіть список чисел";
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > i) {
      res.push(arr[i]);
    }
  }
  return res;
}
// метод filter:
function filterMethodElementsBiggerThanTheirIndexes(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "введіть список чисел";
  return arr.filter((el, index) => el > index);
}

// 18. Напишіть функцію, яка приймає масив чисел. Функція повинна знайти мінімальний
//    елемент та видалити його з масиву.
function delThrMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Введіть масив чисел";
  // 1. Знаходимо індекс мінімального елемента
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  // 2. Видаляємо 1 елемент за знайденим індексом
  arr.splice(minIndex, 1);

  // 3. Повертаємо оновлений масив
  return arr;
}

// 19. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону, але лише ті, у яких немає
//    цифри 5. Наприклад числа (51, 25, 15,256) не підходять, бо містять символ "5"
//    у собі.
function hasNotFiveDigit(start, end) {
  const arr = [];
  for (let num = start; num <= end; num++) {
    if (!String(num).includes("5")) {
      arr.push(num);
    }
  }
  return arr;
}
// ## Складні

// 20. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.
function evenFirst(arr) {
  if (!Array.isArray(arr)) return "Введіть масив чисел";
  for (const el of arr) {
    if (typeof el !== "number" || Number.isNaN(el))
      return "У масиві мають бути лише числа";
  }
  const oddNumbers = [];
  const evenNumbers = [];
  for (const el of arr) {
    if (el % 2 === 0) {
      evenNumbers.push(el);
    } else {
      oddNumbers.push(el);
    }
  }

  return [...evenNumbers, ...oddNumbers];
}

// 21. Напиши функцію, яка приймає масив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.
function newSumArr(arr) {
  const isNotArr = !Array.isArray(arr);
  const isNotNumbers = arr.some(
    (el) => typeof el !== "number" || Number.isNaN(el)
  );
  if (isNotArr || isNotNumbers) return "Введіть масив із чисел";
  else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      arr[i] = sum;
    }
    return arr;
  }
}

// 22. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише унікальні числа.

typeof {}; // "object"
typeof [1, 2]; // "object"
typeof new Set(); // "object"

function getUniqueNumbers(arr) {
  // Валідація вхідних даних
  if (
    !Array.isArray(arr) ||
    arr.some((el) => typeof el !== "number" || Number.isNaN(el))
  )
    return "Введіть масив із чисел";
  // Створюємо Set через new Set для пошуку унікальних значень
  // і конвертуємо його назад у масив
  return [...new Set(arr)];
}
// Приклад використання:
console.table(getUniqueNumbers([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 23. Напиши функцію, яка приймає два масиви і повертає об'єднаний масив без
//    дублювання елементів.
function intoOneArr(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// 24. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожен
//    елемент є середньоарифметичним усіх сусідніх елементів.
function averageArr(arr) {
  // Якщо в масиві менше 2 елементів, інших елементів немає
  if (arr.length <= 1) return [0];
  // 1. Рахуємо суму всіх елементів масиву
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  // 2. Для кожного елемента шукаємо середнє решти (arr.length - 1)
  return arr.map((num) => (totalSum - num) / (arr.length - 1));
}
// Приклад використання:
console.log(averageArr([10, 20, 30, 40]));
// Загальна сума = 100, кількість інших елементів = 3
// i=0 (10): (100 - 10) / 3 = 90 / 3 = 30
// i=1 (20): (100 - 20) / 3 = 80 / 3 = 26.666...
// i=2 (30): (100 - 30) / 3 = 70 / 3 = 23.333...
// i=3 (40): (100 - 40) / 3 = 60 / 3 = 20

// 24. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожен
//    елемент є середньоарифметичним усіх сусідніх елементів.
function averageArr_2(arr) {
  if (arr.length <= 1) return []; // Сусідів немає

  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr2[i] = arr[i + 1]; // Для першого сусід тільки праворуч
    } else if (i === arr.length - 1) {
      arr2[i] = arr[i - 1]; // Для останнього сусід тільки ліворуч
    } else {
      arr2[i] = (arr[i - 1] + arr[i + 1]) / 2;
    }
  }
  return arr2;
}

// 25. Напиши функцію, яка приймає масив чисел і повертає новий масив, де елементи
//    відсортовані в порядку збільшення або зменшення.
function sortArray(direction, arr) {
  const isNotArray = !Array.isArray(arr);
  if (isNotArray) return "Введіть масив чисел";

  const isValidNumber = (el) => typeof el === "number" && !Number.isNaN(el);
  const hasInvalidElements = !arr.every(isValidNumber);

  if (hasInvalidElements) {
    return "Введіть масив чисел";
  }

  const sorted = [...arr];
  // спадання
  const isDesc = ["descending", "desc", "desc direction"].includes(direction);

  return isDesc
    ? // Метод .sort() бере по черзі дві пари елементів (a і b)
      // і очікує від колбек - функції число: b - a > 0
      // тоді b ставлять справа від а
      sorted.sort((a, b) => b - a)
    : sorted.sort((a, b) => a - b);
}

// Перевірка:
console.log(sortArray("desc", [3, 1, 4, 2])); // [4, 3, 2, 1]

// 26. Напиши функцію, яка приймає масив рядочків та сортує їх за довжиною
//    елементів.
function sortStrForLen(arr) {
  if (arr.some((el) => typeof el !== "string"))
    return "Масив має скаладатися із рядочків";
  // Сортуємо від найкоротшого до найдовшого
  return arr.sort((a, b) => a.length - b.length);
}

// ## Codewars

// - [Kata #1](https://www.codewars.com/kata/57a083a57cb1f31db7000028)
function powerOf2(power) {
  if (!Number.isInteger(power) || power < 0)
    return "степінь має бути цілим додатнім числом";
  const resArr = [];
  for (let i = 0; i <= power; i++) {
    resArr.push(2 ** i);
  }
  return resArr;
}
// нижче варіант рішення від Gemini !!
function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}
// n+1 , бо маємо ще врахувати нульову степінь
// Перший параметр _ означає поточний елемент (він нам не потрібен, тому позначений підкресленням).

// - [Kata #2](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
function flickSwitch() {
  const arr = Array.from(arguments);
  const result = [];
  let flag = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      flag = !flag; // перемикаємо стан
    }
    result[i] = flag; // записуємо значення під відповідним індексом
  }
  return result;
}
// - [Kata #3](https://www.codewars.com/kata/57f222ce69e09c3630000212)
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good'
// and bad ideas 'bad'.If there are one or two good ideas, return 'Publish!',
// if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let counterOfGood = 0;

  for (let el of x) {
    if (el === "good") {
      counterOfGood++;
    }
  }

  if (counterOfGood === 1 || counterOfGood === 2) {
    return "Publish!";
  } else if (counterOfGood > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}

// - [Kata #4](https://www.codewars.com/kata/53dc23c68a0c93699800041d)
// Write a function that takes an array of words and smashes
// them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation,
// but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning
// or the end of the sentence!
function intoSentence(arr) {
  return arr.join(" ");
}

// - [Kata #5](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// Write a function that takes an array of strings as an argument and returns
// a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength_1(arr) {
  return [...arr].sort((a, b) => a.length - b.length);
  // новий масив
}
function sortByLength_2(arr) {
  return arr.sort((a, b) => a.length - b.length);
  // сортуємо і змінюємо вхідний масив
}

// - [Kata #6](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits.
// Miriam, the interior architect, comes up with a plan
// to remove the most boring exhibits.
// She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits,
// she's off to an important fair, so she asks you to write a program
// that tells her the ratings of the exhibits after removing the lowest one.
// Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
function removeSmallest(numbers) {
  if (numbers.length === 0) return [];

  const minIndex = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
}

// - [Kata #7](https://www.codewars.com/kata/5813d19765d81c592200001a)
// Don't give me five!
// In this kata you get the start number and the end number of a region
// and should return the count of all numbers except numbers
// with a 5 in it.The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4, 17 -> 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17 -> Result 12
function dontGive5(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes("5")) {
      count++;
    }
  }
  return count;
}
// - [Kata #8](https://www.codewars.com/kata/62ad72443809a4006998218a)
// Story
// YouTube had a like and a dislike button, which allowed users to express
// their opinions about particular content.
// It was set up in such a way that you cannot like and dislike a video
// at the same time.There are two other interesting rules to be noted
// about the interface: Pressing a button, which is already active,
// will undo your press.If you press the like button after pressing
// the dislike button, the like button overwrites the previous "Dislike" state.
// The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns
// the final state.

// Examples
// like_or_dislike([Dislike]) ➞ Dislike
// like_or_dislike([Like, Like]) ➞ Nothing
// like_or_dislike([Dislike, Like]) ➞ Like
// like_or_dislike([Like, Dislike, Dislike]) ➞ Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
function youtubeBtn(buttons) {
  let currentState = "Nothing";

  for (let button of buttons) {
    if (button === currentState) {
      // Натискання на вже активну кнопку скасовує її
      currentState = "Nothing";
    } else {
      // Натискання іншої кнопки перемикає стан на нову
      currentState = button;
    }
  }

  return currentState;
}

// Перевірка прикладів:
console.log(youtubeBtn(["Dislike"])); // ➞ "Dislike"
console.log(youtubeBtn(["Like", "Like"])); // ➞ "Nothing"
console.log(youtubeBtn(["Dislike", "Like"])); // ➞ "Like"
console.log(youtubeBtn(["Like", "Dislike", "Dislike"])); // ➞ "Nothing"
console.log(youtubeBtn([])); // ➞ "Nothing"

const likeOrDislike = (buttons) =>
  buttons.reduce((state, btn) => (btn === state ? "Nothing" : btn), "Nothing");
// reduce((accumulator, currentValue) => ..., initialValue)

// - [Kata #9](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

// Here's an example:

// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array

// рішення Gemini
Array.prototype.reverse = function () {
  for (let i = 0; i < Math.floor(this.length / 2); i++) {
    let j = this.length - 1 - i;
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

// моє неправильне рішення (бо я створила новий масив)
function myReverse(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return (arr = [...newArr]);
}

// - [Kata #10](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
function areAllConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
    return null;
  }
}
// - [Kata #11](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
function distinct(a) {
  return [...new Set(a)];
}
// - [Kata #12](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #13](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #14](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #15](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)
