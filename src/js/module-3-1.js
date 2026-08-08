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
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// 13. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.
// 14. Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// 15. Напиши функцію яка приймає масив та знаходить максимальний елемент.
// 16. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву.
// 17. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.
// 18. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
//    елемент та видалити його з масиву.
// 19. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону але лише ті у яких не має
//    цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
//    у собі.

// ## Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.
// 1. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
//    дублювання елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є середньоарифметичним всіх сусідніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
//    відсортовані в порядку збільшення або зменшення.
// 1. Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною
//    елементів.

// ## Codewars

// - [Kata #1](https://www.codewars.com/kata/57a083a57cb1f31db7000028)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/57f222ce69e09c3630000212)
// - [Kata #1](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)
