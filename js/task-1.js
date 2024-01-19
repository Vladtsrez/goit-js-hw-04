//function slugify(title) {
//  const lowerCaseTitle = title.toLowerCase();
//  const words = lowerCaseTitle.split(' ');
//  const slug = words.join('-');

//  return slug;
//}

//console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
//console.log(slugify('English for developer')); // "english-for-developer"
//console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
//console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

//const apartment = {
//  imgUrl: 'https://via.placeholder.com/640x480',
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153,
//  tags: ['premium', 'promoted', 'top'],
//  owner: {
//    name: 'Henry',
//    phone: '982-126-1588',
//    email: 'henry.carter@aptmail.com',
//  },
//};

//apartment.price = 5000;
//apartment.rating = 4.7;
//apartment.owner.name = 'Henry Sibola';
//apartment.tags.push('trusted');

//console.log(apartment.tags[3]);

//const locations = {};

//const apartment = {
//  imgUrl: 'https://via.placeholder.com/640x480',
//  descr: 'Spacious apartment in the city center',
//  rating: 4.7,
//  price: 5000,
//  tags: ['premium', 'promoted', 'top', 'trusted'],
//  owner: {
//    name: 'Henry Sibola',
//    phone: '982-126-1588',
//    email: 'henry.carter@aptmail.com',
//  },
//};

//apartment.area = 60;
//apartment.rooms = 3;
//apartment.locations = {
//  country: 'Jamaica',
//  city: 'Kingston',
//};

//console.log(apartment);

//const book = {
//  title: 'The Last Kingdom',
//  author: 'Bernard Cornwell',
//  genres: ['historical prose', 'adventure'],
//  rating: 8.38,
//};

//for (const key in book) {
//  console.log(key); // Ключ
//console.log(book[key]); // Значення властивості з таким ключем
//}

//const apartment = {
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153,
//};

//const keys = [];
//const values = [];

//for (key in apartment) {
//  keys.push(key);
//}

//for (value in apartment) {
//  values.push(apartment[value]);
//}

//console.log(keys);
//console.log(values);

//const apartment = {
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153,
//};
//const values = [];
//const keys = Object.keys(apartment);

//for (const key of keys) {
//  values.push(apartment[key]);
//}

//console.log(values);

//function countProps(object) {
//  let propCount = 0;

//  for (const key in object) {
//    if (object.hasOwnProperty(key)) {
//      propCount += 1;
//    }
//  }

//  return propCount;
//}

//function countProps(object) {
//  let propCount = 0;

//  const keys = Object.keys(object);

//  for (key of keys) {
//    if (object.hasOwnProperty(key)) {
//      propCount += 1;
//    }
//  }

//  return console.log(propCount);
//}

//countProps({});
//countProps({ name: 'Mango', age: 2 });
//countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

//const apartment = {
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153,
//};

//const keys = Object.keys(apartment);
//const values = Object.values(apartment);

//console.log(keys);
//console.log(values);

//function countTotalSalary(salaries) {
//  let totalSalary = 0;

//  const values = Object.values(salaries);

//  for (const value of values) {
//    totalSalary += value;
//  }

//  return console.log(totalSalary);
//}

//countTotalSalary({});
//countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
//countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// ====================================================================== \\

//const colors = [
//  { hex: '#f44336', rgb: '244,67,54' },
//  { hex: '#2196f3', rgb: '33,150,243' },
//  { hex: '#4caf50', rgb: '76,175,80' },
//  { hex: '#ffeb3b', rgb: '255,235,59' },
//];

//const hexColors = [];
//const rgbColors = [];

//for (const color of colors) {
//  hexColors.push(color.hex);
//  rgbColors.push(color.rgb);
//}

//console.log(hexColors);
//console.log(rgbColors);

//function getProductPrice(productName) {
//  const products = [
//    { name: 'Radar', price: 1300, quantity: 4 },
//    { name: 'Scanner', price: 2700, quantity: 3 },
//    { name: 'Droid', price: 400, quantity: 7 },
//    { name: 'Grip', price: 1200, quantity: 9 },
//  ];

//  for (const product of products) {
//    if (product.name === productName) {
//      return console.log(product.price);
//    }
//  }
//  return console.log(null);
//}

//getProductPrice('Radar');
//getProductPrice('Grip');
//getProductPrice('Scanner');
//getProductPrice('Droid');
//getProductPrice('Engine');

// ------------ VARIANT-1! --------------------------- \\

//function getAllPropValues(propName) {
//  const products = [
//    { name: 'Radar', price: 1300, quantity: 4 },
//    { name: 'Scanner', price: 2700, quantity: 3 },
//    { name: 'Droid', price: 400, quantity: 7 },
//    { name: 'Grip', price: 1200, quantity: 9 },
//  ];

//  const propArr = [];

//  for (const product of products) {
//    if (propName in product) {
//      propArr.push(product[propName]);
//    }
//  }

//  return console.log(propArr);
//}

//getAllPropValues('name');
//getAllPropValues('quantity');
//getAllPropValues('price');
//getAllPropValues('category');

// ------------ VARIANT-2! --------------------------- \\

//function getAllPropValues(propName) {
//  const products = [
//    { name: 'Radar', price: 1300, quantity: 4 },
//    { name: 'Scanner', price: 2700, quantity: 3 },
//    { name: 'Droid', price: 400, quantity: 7 },
//    { name: 'Grip', price: 1200, quantity: 9 },
//  ];

//  // Створення масиву для збереження значень властивості
//  const propValues = [];

//  // Перебір кожного об'єкта в масиві products
//  for (const product of products) {
//    // Перевірка, чи існує властивість з ім'ям propName в поточному об'єкті
//    if (product.hasOwnProperty(propName)) {
//      // Додавання значення властивості до масиву
//      propValues.push(product[propName]);
//    }
//  }

//  // Повернення масиву значень властивості
//  return propValues;
//}

//function calculateTotalPrice(productName) {
//  const products = [
//    { name: 'Radar', price: 1300, quantity: 4 },
//    { name: 'Scanner', price: 2700, quantity: 3 },
//    { name: 'Droid', price: 400, quantity: 7 },
//    { name: 'Grip', price: 1200, quantity: 9 },
//  ];

//  let total = 0;

//  for (product of products) {
//    if (product.name === productName) {
//      return (total = product.price * product.quantity);
//    }
//  }

//  return `Product ${productName} not found!`;
//}

//calculateTotalPrice('Blaster');
//calculateTotalPrice('Radar');
//calculateTotalPrice('Droid');
//calculateTotalPrice('Grip');
//calculateTotalPrice('Scanner');

// ================================================================ \\

// Методи об'єкта //

//const atTheOldToad = {
//  potions: [],

//  getPotions() {
//    return 'List of all available potions';
//  },

//  addPotion(potionName) {
//    return `Adding ${potionName}`;
//  },
//};

//atTheOldToad.getPotions();
//atTheOldToad.addPotion('Invisibility');
//atTheOldToad.addPotion('Power potion');

//=================================================\\

//const atTheOldToad = {
//  potions: ['Speed potion', 'Stone skin'],
//  getPotions() {
//    return console.log(this.potions);
//  },
//};

//atTheOldToad.getPotions();

//==================================================\\

//const atTheOldToad = {
//  potions: ['Speed potion', 'Stone skin'],
//  getPotions() {
//    return this.potions;
//  },
//  addPotion(potionName) {
//    this.potions.push(potionName);
//  },
//};

//console.log(atTheOldToad.getPotions());
//atTheOldToad.addPotion('Invisibility');
//console.log(atTheOldToad.getPotions());

//=========================================================\\

//const atTheOldToad = {
//  potions: [
//    { name: 'Speed potion', price: 460 },
//    { name: 'Stone skin', price: 520 },
//  ],

//  getPotions() {
//    return this.potions;
//  },
//  addPotion(newPotion) {
//    this.potions.push(newPotion);
//  },

//  getTotalPrice() {
//    let totalPrice = 0;

//    for (const potion of this.potions) {
//      totalPrice += potion.price;
//    }

//    return totalPrice;
//  },
//};

//atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
//atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
//console.log(atTheOldToad.getTotalPrice());
//console.log(atTheOldToad.getPotions());

//===============================================================\\

//const atTheOldToad = {
//  potions: [
//    { name: 'Speed potion', price: 460 },
//    { name: 'Stone skin', price: 520 },
//  ],
//  getPotions() {
//    return this.potions;
//  },
//  updatePotionName(oldName, newName) {
//    for (const potion of this.potions) {
//      if (potion.name === oldName) {
//        potion.name = newName;
//      }
//    }
//  },
//};

//atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
//atTheOldToad.updatePotionName('Speed potion', 'Polymorth');

//console.log(atTheOldToad.getPotions());

//=========================================================\\

// spread і rest \\

//=========================================================\\

//function add(...args) {
//  return args.reduce((sum, current) => sum + current, 0);
//}

//add(15, 27);

//=============== REDUCE ====================\\

//function evenNumbers(...args) {
//  return args.reduce(function (num, current) {
//    if (current % 2 === 0) {
//      return num + 1;
//    } else {
//      return num;
//    }
//  }, 0);
//}

//console.log(evenNumbers(14, 34, 45, 456));

//function noEvenNumber(...args) {
//  return args.reduce(function (num, current) {
//    if (current % 2 !== 0) {
//      return num + 1;
//    } else {
//      return num;
//    }
//  }, 0);
//}

//console.log(noEvenNumber(14, 34, 45, 456));

//function muliply(...args) {
//  return args.reduce(function (num, curr) {
//    return num * curr;
//  }, 1);
//}

//console.log(muliply(10, 2));

// ============================================================= \\

//function addOverNum(value, ...args) {
//  let totalSum = 0;

//  for (const arg of args) {
//    if (value < arg) {
//      totalSum += arg;
//    }
//  }

//  return totalSum;
//}

//addOverNum(50, 15, 27);
//addOverNum(10, 12, 4, 11, 48, 10, 8);
//addOverNum(15, 32, 6, 13, 19, 8);
//addOverNum(20, 74, 11, 62, 46, 12, 36);

// =============================================================== \\

//function getExtremeScores(scores) {
//  const best = Math.max(...scores);
//  const worst = Math.min(...scores);

//  return { best, worst };
//}

//getExtremeScores([89, 64, 42, 17, 93, 51, 26]);
//getExtremeScores([19, 7, 4, 17, 81, 24]);

//============================================================\\

//const firstGroupScores = [64, 42, 93];
//const secondGroupScores = [89, 14, 51, 26];
//const thirdGroupScores = [29, 47, 18, 97, 81];

//const allScores = [
//  ...firstGroupScores,
//  ...secondGroupScores,
//  ...thirdGroupScores,
//];
//const bestScore = Math.max(...allScores);
//const worstScore = Math.min(...allScores);

//console.log(bestScore);
//console.log(worstScore);

//===========================================================\\

//const defaultSettings = {
//  theme: 'light',
//  public: true,
//  withPassword: false,
//  minNumberOfQuestions: 10,
//  timePerQuestion: 60,
//};
//const overrideSettings = {
//  public: false,
//  withPassword: true,
//  timePerQuestion: 30,
//};

//const finalSettings = { ...defaultSettings, ...overrideSettings };

//console.log(finalSettings);
