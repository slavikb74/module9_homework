//Задание 2.
//Вам дана заготовка и результат, который вы должны получить. 
//Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

// JSON:
// {
//  "list": [
//   {
//    "name": "Petr",
//    "age": "20",
//    "prof": "mechanic"
//   },
//   {
//    "name": "Vova",
//    "age": "60",
//    "prof": "pilot"
//   }
//  ]
// }

// JS-объект:
// {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]
// }

const jsonSTRING = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}`;
//преобразуем JSON в объект JavaScript
const data = JSON.parse(jsonSTRING);
console.log(data)
