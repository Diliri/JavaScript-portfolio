// # Функції

// 1. Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.
function toSum(a, b) {
  return a + b;
}
// 2. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
//    них.
const getMax = (a, b, c) => Math.max(a, b, c);
// В стрілочних функціях (() => {}) немає об'єкта arguments.

// 3. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
//    повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
//    false, якщо ні.
function between(number, min, max) {
  return number >= min && number <= max;
}
// 4. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.
function retrieveFirstChar(str) {
  return str[0];
}
// 5. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.
function retrieveLastChar(str) {
  return str.at(-1); // Сучасний метод .at() підтримує від'ємні індекси
  // або класичний варіант: return str[str.length - 1];
}
// 6. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
//    якщо ні.
function isEven(number) {
  return number % 2 === 0;
}
// 7. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.
(a, b) => {
  if (a == 0 || b == 0) {
    return null;
  }
  return a * b;
};
// 8. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
//    тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок
//    `"<div>Hello world</div>"`
function intoDiv(str) {
  return "<div>" + str + "</div>";
  // return `<div>${str}</div>`;
}

// 9. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
//    розділені пробілами).
function countWords(str) {
  return str.split(" ").length;
}
// Нюанс: Якщо у рядку буде кілька пробілів підряд або пробіли на початку/наприкінці,
// .split(' ') порахує порожні елементи як слова.
// Також для порожнього рядка "".split(' ') поверне[""](масив з 1 елементом),
// тобто результат буде 1 замість 0. Як покращити:
function countWords_2(str) {
  let trimmed = str.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length; // \s+ враховує один або кілька пробілів
}
// 10. Напиши функцію, яка приймає рядок і повертає його довжину помножену на
//    кількість слів в цьому рядку.
function multiplyLengthByWordsCount(str) {
  return str.length * str.split(" ").length;
}
// 11. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому
//    (a, e, i, o, u). Використовуйте метод includes та цикл.
function countVowels(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase().includes("a", "e", "i", "o", "u")) {
      counter += 1;
    }
  }
  return counter;
}
//Зверху була помилка:

// Метод includes приймає лише один пошуковий рядок у першому аргументі("a").
// Решта аргументів("e", "i"...) ігноруються або сприймаються як позиція пошуку.

function countVowels_2(str) {
  let counter = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    // Перевіряємо, чи є поточна літера серед "aeiou"
    if (vowels.includes(str[i].toLowerCase())) {
      counter += 1;
    }
  }
  return counter;
}

// 12. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
//    розташовані у зворотному порядку.
function intoReverseOrder(str) {
  const arrOfStr = str.split(" ");
  const newArr = [];
  for (let i = arrOfStr.length - 1; i >= 0; i--) {
    newArr.push(arrOfStr[i]);
  }
  return newArr.join(" ");
}

//str.split(" ").reverse().join(" ")

// 13. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні.
function isAllNum(...args) {
  for (let el of args) {
    if (typeof el !== "number") {
      return false;
    }
  }
  return true;
}

function isAllNum_2(...args) {
  return args.every((arg) => typeof arg === "number");
}

// 14. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.
function intoOneBigStr(...args) {
  return args.join(", ");
}
// 15. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.
function multiplyAllNymbers(...args) {
  if (args.some((el) => typeof el !== "number" || el === null))
    return "В аргументах мають бути лише числа";
  return args.reduce((acc, item) => acc * item, 1);
}
// 16. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.
function countOdd(...args) {
  if (args.some((el) => typeof el !== "number" || el === null))
    return "В аргументах мають бути лише числа";

  return args.filter((item) => item % 2 !== 0).length;
}
// 17. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим
function identifyTheLongest(...args) {
  let maxLen = 0;
  let longestString = "";
  for (let el of args) {
    if (el.length > maxLen) {
      maxLen = el.length;
      longestString = el;
    }
  }
  return longestString;
}
// 18. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.
function intoOneBigStr(...args) {
  return args.join("");
}
