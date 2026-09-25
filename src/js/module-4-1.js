// # Обєкти

// ## ОСНОВИ

// Створення об'єкта: Створіть об'єкт person, який містить властивості
// ім'я, вік та професія.
const person = {
  name: "Diana",
  age: 28,
  profession: "teacher",
};
// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.
console.log(person.name);
// Зміна властивостей: Змініть вік в об'єкті person на нове значення.
person.age = 29;
// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи
// зі значенням.
person.work = "school";
// Видалення властивостей: Видаліть властивість професія з об'єкта person.
delete person.profession;
// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.
console.log(person.profession); // undefined

// Але краще перевірити існування так:
console.log("profession" in person); // false

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить
// інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з
// об'єктом person.

Object.assign(person, friend); // Тепер властивості friend скопійовані в person

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у
// вигляді ключ-значення.
for (let key in person) {
  console.log(key, person[key]);
}
// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити
// вітання з іменем особи.
person.greeting = function () {
  console.log(`Hello, ${person.name}!`);
}; // створення методу

person.greeting(); // виклик методу

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта
// person за допомогою функції Object.keys().
console.log(Object.keys(person));
// ---

// ## ЗАДАЧІ

// ```
// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// ```

// ---
function createObjNameAge(name, age) {
  return {
    name,
    age,
  };
}
// ```
// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.
// ```

// ---
function addAddress(obj, address) {
  obj.address = address;
  return obj;
}
// ```
// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.
// ```
function updateAge(obj, age) {
  obj.age = age;
  return obj;
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.
// ```
function deleteAge(obj) {
  delete obj.age;
  return obj;
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// ```
function returnName(obj) {
  return obj.name;
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість
// "address" існує в об'єкті, і false, якщо ні.
// ```
function isPropertyIn(obj) {
  return "address" in obj;
}
// ---

// ```
// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.
// ```
function concateObj(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
  // або інший варіант виконання:
  // return { ...obj1, ...obj2 };
}
// ---

// ```
// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням
// ("Unknown", 0 відповідно).
// Поверни об'єкт.
// ```
function newObj(address, name = "Unknown", age = 0) {
  return {
    address,
    name,
    age,
  };
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку.
// Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// ```
function newPror(obj, name, age) {
  obj.name = name;
  obj.age = age;
  return obj;
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// ```
function addEmail(obj, email) {
  // треба перевіряти саме наявність властивості, а не те, чи є її значення truthy.
  if (!("email" in obj)) {
    obj.email = email;
  }
  return obj;
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age"
// з числа на рядок.
// Поверни оновлений об'єкт.
// ```
function turnAgeNumIntoStr(obj) {
  obj.age = String(obj.age);
  return obj;
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address",
// але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.
// ```

function rewriteAddress(obj, address) {
  // "якщо властивість існує", а не "якщо її значення truthy".
  if ("address" in obj.address) {
    obj.address = address;
  }
  return obj;
}
// ---

// ```
// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity.
// Та повертає рядок "User {ім`я користувача} from {місто користувача}!"
// ```
function returnString(user) {
  return `User ${user.name} from ${user.city}!`;
}
// ---

// ```
// Напиши функцію, яка приймає масив з ключами і значеннями
// (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]])
// і створює об'єкт з цих пар. Поверни об'єкт.
// ```
function matrixIntoObj(matrix) {
  return Object.fromEntries(matrix);
}
// ---

// ```
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному
// з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// ```
function add1toAge(arrOfObj) {
  for (let obj of arrOfObj) {
    obj.age += 1;
  }
  return arrOfObj;
}
// ---

// ## ЗАДАЧІ №2

// ```
// Створіть об'єкт contactBook, який зберігатиме список контактів та
// надаватиме методи для додавання, видалення та пошуку контактів.
// ```
const contactBook = {
  arrOfContacts: [],
  // ...contacts у параметрах (rest-оператор), змінна contacts стає масивом.
  // Додавання одного або кількох контактів
  addContact(...contacts) {
    this.arrOfContacts.push(...contacts);
    return this.arrOfContacts;
  },

  // Видалення контакту за іменем або значенням
  deleteContacts(contactName) {
    this.arrOfContacts = this.arrOfContacts.filter(
      (item) => item !== contactName && item.name !== contactName
    );
    return this.arrOfContacts;
  },
  // Пошук контакту
  findContact(query) {
    return this.arrOfContacts.filter(
      (item) => item === query || item.name === query
    );
  },
};

// 1. Додаємо контакти
contactBook.addContact("Іван", "Марія", "Олексій");

// 2. Шукаємо контакт
console.log(contactBook.findContact("Марія"));
// Результат: ["Марія"]

// 3. Видаляємо контакт
contactBook.deleteContact("Іван");

console.log(contactBook.arrOfContacts);
// Результат: ["Марія", "Олексій"]
// ```
// Створіть об'єкт rectangle, який представлятиме прямокутник з методами
// для обчислення його площі та периметра. Об'єкт повинен приймати довжини
// двох сторін під час створення.
// ```
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  square() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}

const rect2 = new Rectangle(10, 5);
console.log(rect2.square()); // 50
console.log(rect2.perimeter()); // 30
// ```
// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи
// для додавання нових завдань, позначки задачі як виконаної та виведення списку
// завдань.
// ```
const toDoList = {
  // Масив для збереження завдань
  tasks: [],

  // Метод додавання нового завдання
  addNewToDo(taskText) {
    this.tasks.push({
      text: taskText,
      isDone: false,
    });
  },

  // Метод позначення завдання як виконаного
  doneToDo(taskText) {
    const task = this.tasks.find((item) => item.text === taskText);

    if (task) {
      task.isDone = true;
    } else {
      console.log(`Завдання "${taskText}" не знайдено.`);
    }
  },

  // Метод виведення списку завдань
  printTheList() {
    console.log("--- Список завдань ---");

    if (this.tasks.length === 0) {
      console.log("Список порожній.");
      return;
    }

    this.tasks.forEach((item, index) => {
      const status = item.isDone ? "[✓]" : "[ ]";
      console.log(`${index + 1}. ${status} ${item.text}`);
    });
  },
};

// Приклад використання:

// 1. Додаємо завдання
toDoList.addNewToDo("Перевірити зошити");
toDoList.addNewToDo("Помити посуд");
toDoList.addNewToDo("Помити підлогу");

// 2. Позначаємо завдання як виконане
toDoList.doneToDo("Перевірити зошити");

// 3. Виводимо список
toDoList.printTheList();

/*
Результат у консолі:
--- Список завдань ---
1. [✓] Перевірити зошити
2. [ ] Помити посуд
3. [ ] Помити підлогу
*/

// ```
// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами
// для депозиту, зняття коштів та перевірки балансу.
// Врахуйте обробку можливих помилок(наприклад, недостатньо коштів).
// ```
const bankAccount = {
  balance: 0,

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Сума депозиту має бути додатним числом.");
      return;
    }
    this.balance += amount;
    console.log(
      `Успішно поповнено на ${amount}$. Поточний баланс: ${this.balance}$.`
    );
  },

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Сума для зняття має бути додатним числом.");
      return;
    }
    if (amount > this.balance) {
      console.log(
        `Недостатньо коштів на рахунку! Поточний баланс: ${this.balance}$.`
      );
      return;
    }
    this.balance -= amount;
    console.log(
      `Успішно знято ${amount}$. Залишок на рахунку: ${this.balance}$.`
    );
  },

  printAccount() {
    console.log(`Ваш поточний баланс: ${this.balance}$.`);
  },
};

// Приклад використання:
bankAccount.printAccount(); // Ваш поточний баланс: 0$.
bankAccount.deposit(100); // Успішно поповнено на 100$. Поточний баланс: 100$.
bankAccount.withdraw(30); // Успішно знято 30$. Залишок на рахунку: 70$.
bankAccount.withdraw(100); // Недостатньо коштів на рахунку! Поточний баланс: 70$.
// ```
// Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці
// та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN,
// а також виведення списку всіх книг.
// ```
const libraryCatalog = {
  books: [],

  // Додавання книги (очікує об'єкт з полями name, author, ISBN)
  add(book) {
    if (!book || !book.name || !book.author || !book.ISBN) {
      console.log(
        "Помилка: Книга повинна мати назву (name), автора (author) та ISBN."
      );
      return;
    }

    // Перевірка на унікальність ISBN
    const isDuplicate = this.books.some((b) => b.ISBN === book.ISBN);
    if (isDuplicate) {
      console.log(`Книга з ISBN ${book.ISBN} вже є у каталозі.`);
      return;
    }

    this.books.push(book);
    console.log(`Книгу "${book.name}" успішно додано.`);
  },

  // Пошук за автором або ISBN
  find({ author, ISBN }) {
    const results = this.books.filter((book) => {
      if (ISBN) return book.ISBN === ISBN;
      if (author)
        return book.author.toLowerCase().includes(author.toLowerCase());
      return false;
    });

    if (results.length === 0) {
      console.log("Книг за вашим запитом не знайдено.");
      return [];
    }

    console.log(`Знайдено книг: ${results.length}`);
    return results;
  },

  // Виведення списку всіх книг
  print() {
    if (this.books.length === 0) {
      console.log("Каталог бібліотеки порожній.");
      return;
    }

    console.log("--- Список книг у бібліотеці ---");
    this.books.forEach((book, index) => {
      console.log(
        `${index + 1}. "${book.name}" — ${book.author} (ISBN: ${book.ISBN})`
      );
    });
  },
};

// Приклад використання:

// 1. Додавання книг
libraryCatalog.add({
  name: "Грокаємо алгоритми",
  author: "Адітья Бхаргава",
  ISBN: "978-1617292231",
});
libraryCatalog.add({
  name: "Замок Хаула",
  author: "Діана Вінн Джонс",
  ISBN: "978-0064410120",
});

// 2. Пошук книги за ISBN
console.log("\n--- Пошук за ISBN ---");
libraryCatalog.find({ ISBN: "978-1617292231" });

// 3. Пошук книги за автором
console.log("\n--- Пошук за автором ---");
libraryCatalog.find({ author: "Джонс" });

// 4. Виведення всіх книг
console.log("\n--- Виведення каталогу ---");
libraryCatalog.print();

// ```
// Створіть об'єкт temperatureConverter, який матиме методи для конвертації
// температур між градусами Цельсія та Фаренгейта.
// ```
const temperatureConverter = {
  temperature: 0,

  toCelsius(fahrenheit) {
    // Округлення до 1 знака після коми:
    this.temperature = Number(((fahrenheit - 32) / 1.8).toFixed(1));
    return this.temperature;
  },

  toFahrenheit(celsius) {
    this.temperature = Number((celsius * 1.8 + 32).toFixed(1));
    return this.temperature;
  },
};

// ```
// Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме
// методи для додавання товарів, підрахунку загальної вартості та виведення
// списку товарів.
// ```
const shoppingCart = {
  cart: [],

  addItem(item, price) {
    this.cart.push({
      item: item,
      price: price,
    });
  },

  allPrice() {
    let sum = 0;

    for (let product of this.cart) {
      sum += product.price;
    }

    return sum;
  },

  printCart() {
    console.log(this.cart);
  },
};

shoppingCart.addItem("Яблука", 50);
shoppingCart.addItem("Хліб", 30);
shoppingCart.addItem("Молоко", 40);

shoppingCart.printCart();

console.log(shoppingCart.allPrice());

// ```
// Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі
// з полями username, friends(список друзів) та методами для додавання та видалення
// друзів, а також виведення списку друзів.
// ```
const socialNetworkUser = {
  username: "Diana",
  friends: [],

  addNewFriend(friend) {
    this.friends.push(friend);
  },

  deleteFriend(friend) {
    const index = this.friends.indexOf(friend);
    // splice(index, 1) видаляє один елемент із цієї позиції.
    if (index !== -1) {
      this.friends.splice(index, 1);
    }
  },

  printAllFriends() {
    console.log(this.friends);
  },
};

socialNetworkUser.addNewFriend("Anna");
socialNetworkUser.addNewFriend("Maria");
socialNetworkUser.addNewFriend("Olena");

socialNetworkUser.printAllFriends();
// ["Anna", "Maria", "Olena"]

socialNetworkUser.deleteFriend("Maria");

socialNetworkUser.printAllFriends();
// ["Anna", "Olena"]

// ```
// Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи
// для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// ```
const musicPlayer = {
  songs: [],
  currentSong: 0,
  isPlaying: false,

  addSong(song) {
    // додати пісню
    return this.songs.push(song);
  },

  // А поточна пісня вже визначається через: this.currentSong
  play() {
    // відтворити поточну пісню
    this.isPlaying = true;
  },

  pause() {
    // поставити на паузу
    this.isPlaying = false;
  },

  nextSong() {
    // перейти до наступної пісні
    // треба врахувати кількість пісень!!!
    if (this.currentSong < this.songs.length - 1) {
      this.currentSong += 1;
    }
  },

  previousSong() {
    // перейти до попередньої пісні
    if (this.currentSong > 0) {
      this.currentSong -= 1;
    }
  },
};
// ```
// Створіть об'єкт myString, який буде мати наступні методи: метод reverse(),
// який параметром приймає рядок, а повертає його в перевернутому вигляді;
// метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок,
// зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок
// і робить заголовною першу літеру кожного слова цього рядка.
// ```

// ```
// Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод
// isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом
// чи ні.Якщо є – повертає true, якщо не є – то false.Крім того, об'єкт буде мати
// такі методи: метод isDomain для перевірки домену, метод isDate для перевірки
// дати і метод isPhone для перевірки телефону.
// ```

// ---

// ## РОЗПИСАНІ ЗАДАЧІ

// Створити об'єкт **contactBook**:

// - **Властивості**:
//   - `contacts` (масив контактів)
// - **Методи**:
//   - `addContact(contact)` - метод, що приймає контакт та додає його до масиву
//     контактів.
//   - `deleteContact(contactName)` - метод, що приймає ім'я контакта та видаляє
//     його з масиву контактів.
//   - `findContact(contactName)` - метод, що приймає ім'я контакта та шукає його у
//     масиві контактів.

// ---

// Створити об'єкт **rectangle**:

// - **Властивості**:
//   - `width` (довжина першої сторони)
//   - `height` (довжина другої сторони)
// - **Методи**:
//   - `area()` - метод, що обчислює та повертає площу прямокутника.
//   - `perimeter()` - метод, що обчислює та повертає периметр прямокутника.

// ---

// Створити об'єкт **toDoList**:

// - **Властивості**:
//   - `tasks` (масив задач)
// - **Методи**:
//   - `addTask(task)` - метод, що приймає задачу та додає її до масиву задач.
//   - `markAsDone(taskName)` - метод, що приймає ім'я задачі та позначає її як
//     виконану.
//   - `listTasks()` - метод, що виводить список всіх задач.

// ---

// Створити об'єкт **bankAccount**:

// - **Властивості**:
//   - `balance` (поточний баланс)
// - **Методи**:
//   - `deposit(amount)` - метод, що приймає суму та додає її до балансу.
//   - `withdraw(amount)` - метод, що приймає суму та знімає її з балансу (з
//     перевіркою на достатність коштів).
//   - `checkBalance()` - метод, що повертає поточний баланс.

// ---

// Створити об'єкт **libraryCatalog**:

// - **Властивості**:
//   - `books` (масив книг)
// - **Методи**:
//   - `addBook(book)` - метод, що приймає книгу та додає її до масиву книг.
//   - `findBookByAuthor(author)` - метод, що приймає ім'я автора та повертає книги
//     цього автора.
//   - `findBookByISBN(isbn)` - метод, що приймає ISBN та повертає книгу з цим
//     ISBN.
//   - `listBooks()` - метод, що виводить список всіх книг.

// ---

// Створити об'єкт **temperatureConverter**:

// - **Методи**:
//   - `celsiusToFahrenheit(celsius)` - метод, що приймає температуру в градусах
//     Цельсія та повертає її в градусах Фаренгейта.
//   - `fahrenheitToCelsius(fahrenheit)` - метод, що приймає температуру в градусах
//     Фаренгейта та повертає її в градусах Цельсія.

// ---

// Створити об'єкт **shoppingCart**:

// - **Властивості**:
//   - `items` (масив товарів)
// - **Методи**:
//   - `addItem(item)` - метод, що приймає товар та додає його до кошика.
//   - `totalCost()` - метод, що підраховує та повертає загальну вартість всіх
//     товарів у кошику.
//   - `listItems()` - метод, що виводить список всіх товарів у кошику.

// ---

// Створити об'єкт **socialNetworkUser**:

// - **Властивості**:
//   - `username` (ім'я користувача)
//   - `friends` (масив друзів)
// - **Методи**:
//   - `addFriend(friendName)` - метод, що приймає ім'я друга та додає його до
//     списку друзів.
//   - `removeFriend(friendName)` - метод, що приймає ім'я друга та видаляє його зі
//     списку друзів.
//   - `listFriends()` - метод, що виводить список всіх друзів.

// ---

// Створити об'єкт **musicPlayer**:

// - **Властивості**:
//   - `songs` (масив пісень)
//   - `currentSong` (індекс або ідентифікатор поточної пісні)
// - **Методи**:
//   - `addSong(song)` - метод, що приймає пісню та додає її до списку пісень.
//   - `play()` - метод, що відтворює поточну пісню.
//   - `pause()` - метод, що ставить відтворення на паузу.
//   - `next()` - метод, що перемикає на наступну пісню.
//   - `previous()` - метод, що перемикає на попередню пісню.

// ---

// Створити об'єкт **myString**:

// - **Методи**:
//   - `reverse(str)` - метод, що приймає рядок та повертає його в перевернутому
//     вигляді.
//   - `ucFirst(str)` - метод, що приймає рядок та повертає цей же рядок, зробивши
//     його першу літеру заголовною.
//   - `ucWords(str)` - метод, що приймає рядок та робить заголовною першу літеру
//     кожного слова цього рядка.

// ---

// Створити об'єкт **validator**:

// - **Методи**:
//   - `isEmail(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     емейлом. Повертає `true` або `false`.
//   - `isDomain(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     доменом. Повертає `true` або `false`.
//   - `isDate(str)` - метод, що приймає рядок та перевіряє, чи є він коректною
//     датою. Повертає `true` або `false`.
//   - `isPhone(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     номером телефону. Повертає `true` або `false`.

// ---
