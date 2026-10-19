// # Масив обєктів - spread та rest

// ---

// **1. Завдання:**
// Створи об'єкт із властивостями `firstName` (рядок), `lastName` (рядок) та `age`
// (число). Додай метод `getFullName`, який повертає повне ім'я у форматі:
// `[firstName] [lastName]`. Також додай метод `incrementAge`, який збільшує вік
// на 1.
const user = {
  firstName: "",
  lastName: "",
  age: 0,
  setInfo(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  },

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  incrementAge() {
    return (this.age += 1);
  },
};
// ---

// **2. Завдання:**
// Створи об'єкт із властивостями `bankName` (рядок), `accountNumber` (число) та
// `balance` (число). Додай метод `deposit`, який приймає суму як аргумент і додає
// її до балансу, а також метод `withdraw`, який приймає суму і зменшує баланс,
// якщо сума не перевищує наявний баланс. Метод має повертати новий баланс.
const bankAccount = {
  bankName: "PrivatBank",
  accountNumber: 4149497812345678,
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
    return this.balance;
  },
};

// ---

// **3. Завдання:**
// Створи об'єкт з властивостями `width` (число), `height` (число). Додай метод
// `calculateArea`, який повертає площу прямокутника, та метод
// `calculatePerimeter`, який повертає периметр.

// див. файл module-4-1.js !!!

// ---

// **4. Завдання:**
// Створи об'єкт із властивостями `name` (рядок), `position` (рядок) та `salary`
// (число). Додай метод `getInfo`, який повертає рядок у форматі:
// `[name] працює на позиції [position] із зарплатою [salary]`.
const worker = {
  name: "",
  position: "",
  salary: 0,
  setInfo(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  },
  getInfo() {
    return `${this.name} працює на позиції ${this.position} із зарплатою ${this.salary}`;
  },
};
// ---

// **5. Завдання:**
// Створи об'єкт із властивостями `countryName` (рядок), `capital` (рядок) та
// `population` (число). Додай метод `getDetails`, який повертає рядок у форматі:
// `Країна: [countryName], столиця: [capital], населення: [population]`.
const countryInfo = {
  countryName: "",
  capital: "",
  population: 0,
  setInfo(countryName, capital, population) {
    this.countryName = countryName;
    this.capital = capital;
    this.population = population;
  },
  getDetails() {
    return `Країна: ${this.countryName}, столиця: ${this.capital}, населення: ${this.population}`;
  },
};
// ---

// **6. Завдання:**
// Створи об'єкт із властивостями `itemName` (рядок), `quantity` (число) та
// `pricePerItem` (число). Додай метод `calculateTotalPrice`, який повертає
// загальну вартість, множачи `quantity` на `pricePerItem`.
const cartItem = {
  itemName: "",
  quantity: 0,
  pricePerItem: 0,
  setItem(itemName, quantity, pricePerItem) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.pricePerItem = pricePerItem;
  },
  calculateTotalPrice() {
    return this.quantity * this.pricePerItem;
  },
};

// ---

// **7. Завдання:**
// Створи об'єкт із властивостями `email` (рядок) та `password` (рядок). Додай
// метод `checkLogin`, який приймає два аргументи (email і password) і повертає
// `true`, якщо вони збігаються зі значеннями об'єкта.
const usersCredentials = {
  email: "",
  password: "",
  setInfo(email, password) {
    this.email = email;
    this.password = password;
  },
  checkLogin(email, password) {
    return this.email === email && this.password === password;
  },
};
// ---

// **8. Завдання:**
// Створи об'єкт із властивостями `temperature` (число) та `unit` (рядок, що
// приймає значення `"C"` або `"F"`). Додай метод `convertToCelsius`, який
// переводить температуру з Фаренгейта в Цельсій, якщо `unit` дорівнює `"F"`, та
// метод `convertToFahrenheit`, який робить зворотнє перетворення.
const temperatureConverter = {
  temperature: 32,
  unit: "F",

  convertToCelsius() {
    if (this.unit === "F") {
      this.temperature = Number(((this.temperature - 32) / 1.8).toFixed(1));
      this.unit = "C";
    }
    return this.temperature;
  },

  convertToFahrenheit() {
    if (this.unit === "C") {
      this.temperature = Number((this.temperature * 1.8 + 32).toFixed(1));
      this.unit = "F";
    }
    return this.temperature;
  },
};
// ---

// **9. Завдання:**
// Створи об'єкт із властивостями `vehicleType` (рядок), `fuelType` (рядок) та
// `fuelEfficiency` (число). Додай метод `calculateRange`, який приймає кількість
// пального (число) і повертає відстань, яку можна подолати.
const vehicle = {
  vehicleType: "auto",
  fuelType: "A-95",
  fuelEfficiency: 14, // наприклад, 14 км на 1 літр пального

  calculateRange(fuelAmount) {
    const range = fuelAmount * this.fuelEfficiency;
    return Number(range.toFixed(1));
  },
};

// ---

// **10. Завдання:**
// Створи об'єкт із властивостями `studentName` (рядок), `grade` (число) та
// `subject` (рядок). Додай метод `upgradeGrade`, який збільшує значення `grade`
// на 1, та метод `getReport`, який повертає рядок у форматі:
// `[studentName] має оцінку [grade] з предмету [subject]`.
const student = {
  studentName: "Alice",
  grade: 100,
  subject: "Math",
  upgradeGrade() {
    return (this.grade += 1);
  },

  getReport() {
    return `${this.studentName} має оцінку ${this.grade} з предмету ${this.subject}`;
  },
};
// ---

// **11. Завдання:**
// Створи об'єкт із властивостями `movieTitle` (рядок), `director` (рядок) та
// `duration` (число, у хвилинах). Додай метод `getMovieInfo`, який повертає опис
// фільму у форматі: `[movieTitle], режисер [director], тривалість [duration] хв`.
const movie = {
  movieTitle: "Chainsaw Man",
  director: "Ryū Nakayama",
  duration: 24,
  getMovieInfo() {
    return `${this.movieTitle}, режисер ${this.director}, тривалість ${this.duration} хв`;
  },
};
// ---

// **12. Завдання:**
// Створи об'єкт із властивостями `username` (рядок), `isOnline` (булеве значення).
// Додай метод `toggleStatus`, який змінює значення `isOnline` на протилежне.
const newUser = {
  username: "Shrek",
  isOnline: false,
  toggleStatus() {
    this.isOnline = !this.isOnline;
    return this.isOnline; // Необов'язково, але можна повернути новий стан
  },
};
// ---

// **13. Завдання:**
// Створи об'єкт із властивостями `day` (число), `month` (число) та `year` (число).
// Додай метод `formatDate`, який повертає рядок у форматі: `DD/MM/YYYY`.
const date = {
  day: 7,
  month: 10,
  year: 2026,

  formatDate() {
    const d = String(this.day).padStart(2, "0");
    const m = String(this.month).padStart(2, "0");
    return `${d}/${m}/${this.year}`;
  },
};
// ---

// **14. Завдання:**
// Створи об'єкт із властивостями `colorName` (рядок) та `isPrimary` (булеве
// значення). Додай метод `checkPrimary`, який повертає `true`, якщо `colorName` є
// одним із базових кольорів: `"red"`, `"blue"`, `"yellow"`.
const color = {
  colorName: "green",
  checkPrimary() {
    const name = this.colorName.toLowerCase();
    return name === "red" || name === "blue" || name === "yellow";
  },
};
// ---

// **15. Завдання:**
// Створи об'єкт із властивостями `animalType` (рядок), `age` (число). Додай метод
// `isAdult`, який повертає `true`, якщо вік тварини більше або дорівнює 2.
const animal = {
  animalType: "cat",
  age: 3,
  isAdult() {
    return this.age >= 2;
  },
};
// ---

// **16. Завдання:**
// Створи об'єкт із властивостями `planetName` (рядок), `diameter` (число, у км).
// Додай метод `getRadius`, який повертає радіус планети, ділячи `diameter` на 2.
const planet = {
  planetName: "Earth",
  diameter: 12742,
  getRadius() {
    return this.diameter / 2;
  },
};
// ---

// **17. Завдання:**
// Створи об'єкт із властивостями `songName` (рядок), `artist` (рядок) та
// `duration` (число, у хвилинах). Додай метод `getSongInfo`, який повертає рядок:
// `"Song '[songName]' by [artist], [duration] minutes"`.
const song = {
  songName: "Horns",
  artist: "Bryce Fox",
  duration: 3.38,

  getSongInfo() {
    return `Song '${this.songName}' by ${this.artist}, ${this.duration} minutes`;
  },
};
// ---

// **18. Завдання:**
// Створи об'єкт із властивостями `cityName` (рядок), `population` (число) та
// `isCapital` (булеве значення). Додай метод `getCityInfo`, який повертає опис
// міста у форматі: `[cityName] має населення [population]. Столиця: [isCapital]`.
const city = {
  cityName: "Біла Церква",
  population: 216000,
  isCapital: false,
  getCityInfo() {
    return `${this.cityName} має населення ${this.population}. Столиця: ${this.isCapital}`;
  },
};
// ---

// **19. Завдання:**
// Створи об'єкт із властивостями `username` (рядок), `level` (число). Додай метод
// `levelUp`, який збільшує рівень на 1, та метод `getUserInfo`, який повертає
// рядок: `[username], рівень: [level]`.
const usersLVL = {
  username: "",
  level: 0,
  setInfo(username, level) {
    this.username = username;
    this.level = level;
  },

  getUserInfo() {
    return `${this.username}, рівень: ${this.level}`;
  },

  levelUp() {
    return (this.level += 1);
  },
};
// ---

// **20. Завдання:**
// Створи об'єкт із властивостями `eventName` (рядок), `date` (рядок). Додай метод
// `getEventInfo`, який повертає рядок: `Подія: [eventName], Дата: [date]`.
const event = {
  eventName: "",
  date: "",
  setInfo(eventName, date) {
    this.eventName = eventName;
    this.date = date;
  },

  getEventInfo() {
    return `Подія: ${this.eventName}, Дата: ${this.date}`;
  },
};
// ---

// **21. Завдання:**
// Створи об'єкт із властивостями `length` (число) та `width` (число). Додай метод
// `isSquare`, який повертає `true`, якщо довжина і ширина однакові.
const square = {
  length: 0,
  width: 0,
  setSides(length, width) {
    this.length = length;
    this.width = width;
  },

  isSquare() {
    return this.length === this.width;
  },
};
// ---

// **22. Завдання:**
// Створи об'єкт із властивостями `temperature` (число). Додай метод `isFreezing`,
// який повертає `true`, якщо температура менше або дорівнює 0.
const freeze = {
  temperature: 0,
  setSides(temperature) {
    this.temperature = temperature;
  },

  isFreezing() {
    return this.temperature <= 0;
  },
};
// ---

// **23. Завдання:**
// Створи об'єкт із властивостями `score` (число). Додай метод `resetScore`, який
// встановлює значення `score` на 0.
const score = {
  score: 0,
  setSides(score) {
    this.score = score;
  },
  resetScore() {
    this.score = 0;
  },
};
// ---

// **24. Завдання:**
// Створи об'єкт із властивостями `name` (рядок), `price` (число). Додай метод
// `discount`, який приймає відсоток знижки і повертає нову ціну.
const price = {
  name: "",
  price: 0,
  setInfo(name, price) {
    this.name = name;
    this.price = price;
  },
  discount(percent) {
    const discountedPrice = this.price - (this.price * percent) / 100;
    return discountedPrice;
  },
};
// ---

// **25. Завдання:**
// Створи об'єкт із властивостями `weight` (число, у кг). Додай метод
// `convertToPounds`, який повертає вагу в фунтах (1 кг = 2.20462 фунта).
const pounds = {
  weight: 0,
  setWeight(weight) {
    this.weight = weight;
  },
  convertToPounds() {
    return this.weight * 2.20462;
  },
};
// ---

// **26. Завдання:**
// Створи об'єкт із властивостями `speed` (число). Додай метод `increaseSpeed`,
// який приймає число і додає його до швидкості.
const speed = {
  speed: 0,
  increaseSpeed(speed) {
    this.speed += speed;
  },
};
// ---

// **27. Завдання:**
// Створи об'єкт із властивостями `title` (рядок), `isPublished` (булеве значення).
// Додай метод `togglePublish`, який змінює значення `isPublished` на протилежне.
const publishedBook = {
  title: "",
  isPublished: false,
  setBook(title) {
    this.title = title;
  },
  togglePublish() {
    return (this.isPublished = !this.isPublished);
  },
};
// ---

// **28. Завдання:**
// Створи об'єкт із властивостями `email` (рядок). Додай метод `isGmail`, який
// повертає `true`, якщо email містить домен `"@gmail.com"`.
const gmail = {
  email: "",
  setEmail(email) {
    this.email = email;
  },
  isGmail() {
    return this.email.endsWith("@gmail.com");
  },
};
// ---

// **29. Завдання:**
// Створи об'єкт із властивостями `x` (число), `y` (число). Додай метод
// `calculateDistance`, який повертає відстань від початку координат (формула:
// √(x² + y²)).
const distance = {
  x: 0,
  y: 0,
  setXY(x, y) {
    this.x = x;
    this.y = y;
  },
  calculateDistance() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  },
};
// ---

// **30. Завдання:**
// Створи об'єкт із властивостями `hours` (число), `minutes` (число). Додай метод
// `convertToMinutes`, який повертає загальну кількість хвилин.
const minutes = {
  hours: 0,
  minutes: 0,
  setInfo(h, m) {
    this.hours = h;
    this.minutes = m;
  },
  convertToMinutes() {
    return this.hours * 60 + this.minutes;
  },
};
// ---

// ```
// Написати систему контролю банку.

// Властивості:
// - список користувачів [userId, FIO,'password']
// - список рахунків [userId, accountNumber, value]

// Методи:
// - додати користувача
// - видалити користувача

// - створити рахунок
// - видалити рахунок

// - додати гроші на рахунок
// - зняти гроші з рахунка
// ```
// ==========================================
// 1. Система контролю банку
// ==========================================
const bankSystem = {
  users: [], // [{ userId, fio, password }]
  accounts: [], // [{ userId, accountNumber, value }]

  addUser(userId, fio, password) {
    this.users.push({ userId, fio, password });
  },

  deleteUser(userId) {
    this.users = this.users.filter((user) => user.userId !== userId);
    this.accounts = this.accounts.filter((acc) => acc.userId !== userId);
  },

  createAccount(userId, accountNumber, initialValue = 0) {
    this.accounts.push({ userId, accountNumber, value: initialValue });
  },

  deleteAccount(accountNumber) {
    this.accounts = this.accounts.filter(
      (acc) => acc.accountNumber !== accountNumber
    );
  },

  deposit(accountNumber, amount) {
    const account = this.accounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
    if (account) {
      account.value += amount;
      return true;
    }
    return false;
  },

  withdraw(accountNumber, amount) {
    const account = this.accounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
    if (account && account.value >= amount) {
      account.value -= amount;
      return true;
    }
    return false;
  },
};
// ---

// Менеджер завдань: Створіть функцію яка створює та повертає об'єкт завдання.
// Об'єкт task, який буде містити властивості name, deadline, priority та done.
// Додайте методи для відмітки завдання як виконаного та для виведення
// інформації про завдання.
// ==========================================
// 2. Менеджер завдань (factory function)
// ==========================================
function createTask(name, deadline, priority) {
  return {
    name,
    deadline,
    priority,
    done: false,

    setInfo(name, deadline, priority) {
      this.name = name;
      this.deadline = deadline;
      this.priority = priority;
    },

    markAsDone() {
      this.done = true;
    },

    getInfo() {
      return `Завдання: ${this.name} | Дедлайн: ${this.deadline} | Пріоритет: ${
        this.priority
      } | Статус: ${this.done ? "Виконано" : "У процесі"}`;
      //console.log(task.getInfo())
    },
  };
}

// ---

// Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з
// властивостями назва, ціна та кількість. Додайте методи для додавання товару,
// видалення товару та підрахунку загальної вартості.
// ==========================================
// 3. Каталог товарів
// ==========================================
const productCatalog = {
  products: [], // [{ name, price, quantity }]

  addProduct(name, price, quantity) {
    this.products.push({ name, price, quantity });
  },

  deleteProduct(name) {
    this.products = this.products.filter((item) => item.name !== name);
  },

  getTotalValue() {
    return this.products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
};
// ---

// Система реєстрації: Створіть систему реєстрації користувачів, де кожен
// користувач буде об'єктом з властивостями ім'я, email, пароль тощо. Додайте метод
// для перевірки введеного пароля при вході.
// ==========================================
// 4. Система реєстрації
// ==========================================
const registration = {
  users: [], // [{ name, email, passwd }]

  addUser(name, email, passwd) {
    this.users.push({ name, email, passwd });
  },

  deleteUser(name) {
    this.users = this.users.filter((item) => item.name !== name);
  },

  checkCredentials(email, passwd) {
    // Шукаємо користувача за email
    const user = this.users.find((item) => item.email === email);

    // Якщо користувач знайшовся і його пароль збігається — повертаємо true
    if (user && user.passwd === passwd) {
      return true;
    }

    return false;
  },
};
// ---

// Онлайн-книга: Створіть програму для ведення списку прочитаних книг. Кожна книга
// буде об'єктом з властивостями назва, автор, рік видання та прочитано
// (true/false). Додайте методи для відмітки книги як прочитаної та виведення
// статистики про прочитані книги.
// ==========================================
// 5. Онлайн-книга (Список прочитаних книг)
// ==========================================
const bookTracker = {
  books: [], // [{ title, author, year, read }]

  addBook(title, author, year, read = false) {
    this.books.push({ title, author, year, read });
  },

  markAsRead(title) {
    const book = this.books.find((b) => b.title === title);
    if (book) book.read = true;
  },

  getStats() {
    const readCount = this.books.filter((b) => b.read).length;
    return `Всього книг: ${this.books.length}, з них прочитано: ${readCount}`;
  },
};
// ---

// Ігровий персонаж: Створіть об'єкт, який представляє ігрового персонажа. Додайте
// властивості, такі як ім'я, рівень, здоров'я, атака тощо. Реалізуйте методи для
// атаки інших персонажів та відновлення здоров'я.
// ==========================================
// 6. Ігровий персонаж
// ==========================================
const character = {
  name: "Hero",
  level: 1,
  health: 100,
  maxHealth: 100,
  attackPower: 15,

  attack(target) {
    if (target && typeof target.health === "number") {
      target.health = Math.max(0, target.health - this.attackPower);
    }
  },

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  },
};
// ---

// Список контактів: Створіть програму для управління списком контактів. Кожен
// контакт буде об'єктом з властивостями ім'я, телефон, email тощо. Додайте методи
// для додавання, видалення та пошуку контактів.
// ==========================================
// 7. Список контактів
// ==========================================
const contactBook = {
  contacts: [], // [{ name, phone, email }]

  addContact(name, phone, email) {
    this.contacts.push({ name, phone, email });
  },

  deleteContact(name) {
    this.contacts = this.contacts.filter((c) => c.name !== name);
  },

  findContact(query) {
    return this.contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.phone.includes(query)
    );
  },
};
// ---

// Календар подій: Створіть календар подій, де кожна подія буде об'єктом з
// властивостями назва, дата, місце та повідомлення. Додайте методи для додавання
// події, видалення події та перегляду подій на певну дату.
// ==========================================
// 8. Календар подій
// ==========================================
const eventCalendar = {
  events: [], // [{ title, date, location, message }]

  addEvent(title, date, location, message) {
    this.events.push({ title, date, location, message });
  },

  deleteEvent(title) {
    this.events = this.events.filter((e) => e.title !== title);
  },

  getEventsByDate(date) {
    return this.events.filter((e) => e.date === date);
  },
};
// ---

// Онлайн-магазин: Створіть онлайн-магазин з можливістю додавання товарів у кошик
// та оформлення замовлення. Кожен товар буде об'єктом з властивостями назва, ціна,
// наявність тощо. Реалізуйте методи для додавання товару у кошик, підрахунку
// загальної вартості та оформлення замовлення.

// ---

// Пошук інформації: Створіть програму, яка дозволить шукати інформацію в тексті.
// Ви створюєте об'єкт зі збереженими текстовими даними та методами для пошуку
// заданого слова або фрази у тексті.

// ---

// Банківський рахунок: Створіть об'єкт account, який міститиме інформацію про
// банківський рахунок користувача, таку як ім'я, баланс та історія транзакцій.
// Додайте методи для додавання та витрати коштів, а також для виведення історії
// транзакцій.

// # This

// ```js
// //!======================================================
// // TASK№1
// function greet() {
//   console.log(this);
// }

// const person = {
//   name: 'Olga',
//   sayHi: greet,
// };

// const ref = person.sayHi;
// ref();
// //!======================================================

// //!======================================================
// // TASK№2
// const obj = {
//   name: 'Test',
//   method: function () {
//     console.log(this);
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const arrow = obj.method();
// arrow();
// //!======================================================
// //!======================================================
// // TASK№3
// function whoIsThis() {
//   console.log(this);
// }

// const bound = whoIsThis.bind({ name: 'Bound context' });

// const callLater = fn => fn();

// callLater(bound);
// //!======================================================
// //!======================================================
// // TASK№4
// const user = {
//   name: 'Alice',
//   showName: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(user.showName, 100);
// //!======================================================
// //!======================================================
// // TASK№5
// function showThis(a, b) {
//   console.log(this, a, b);
// }

// showThis.call({ x: 10 }, 1, 2);
// showThis.apply({ x: 20 }, [3, 4]);
// //!======================================================
// //!======================================================
// // TASK№6
// const name = 'Global';

// const obj = {
//   name: 'Object',
//   show: function () {
//     console.log(this.name);
//     const nested = function () {
//       console.log(this.name);
//     };
//     nested();
//   },
// };

// obj.show();
// //!======================================================
// //!======================================================
// // TASK№7
// const a = {
//   name: 'A',
//   say: function () {
//     console.log(this.name);
//   },
// };

// const b = {
//   name: 'B',
// };

// const sayFromA = a.say;
// sayFromA.call(b);
// //!======================================================

// //!======================================================
// // TASK№8
// const obj = {
//   name: 'Nested',
//   outer: function () {
//     return {
//       inner: () => {
//         console.log(this.name);
//       },
//     };
//   },
// };

// const innerFn = obj.outer().inner;
// innerFn();
// //!======================================================

// //!======================================================
// // TASK№9
// const obj = {
//   method: function () {
//     console.log(this);
//   },
// };

// const other = {
//   method: obj.method,
// };

// const copy = other.method;
// copy();
// //!======================================================

// //!======================================================
// // TASK№10
// function A() {
//   this.name = 'Function A';
//   return {
//     name: 'Returned Object',
//     getThis: function () {
//       console.log(this.name);
//     },
//   };
// }

// const result = new A();
// result.getThis();
// ```
