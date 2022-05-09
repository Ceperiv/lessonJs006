// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world  ';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str.length, str2.length, str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log(str.toUpperCase(),', ',str2.toUpperCase(),);
// console.log(str3.toUpperCase());
// console.log(str);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD  ';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string  hello    '
// console.log(str.trim());
// console.log(str);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//     let str = 'Ревуть воли як ясла повні';
// console.log(str.split());
// let tringToarray = (string) => string.split(' ')
// console.log(tringToarray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numArray = [10,8,-7,55,987,-1011,0,1050,0];
// let numArrayToString = (array) => array.map(value => value.toString());
// console.log(numArrayToString(numArray));
// console.log(numArray.map(value => value.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
// let sortNum = (array, argument) => {
//
//     if (argument === 'ascending') {
//         array.sort((a, b) => a - b)
//         ;
//         if (argument === 'descending') {
//             array.sort((a, b) => b - a)
//         }
//     }
// return array
// }
// console.log(sortNum(nums, 'descending'));
// console.log(sortNum(nums, 'ascending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sortArray = (array) => array.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortArray(coursesAndDurationArray));
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArray = (array) => array.filter(value => value.monthDuration > 5 && value.title === 'FullStack')
// console.log(filterArray(coursesAndDurationArray));


//
// описати колоду карт


let value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let color = ['red', 'black'];


let deskOfCardsArray = [];


function deskOfCards() {
        // debugger
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < cardSuit.length; j++) {
            if (value[i] === 'joker' && cardSuit[j] === 'spade') {
                deskOfCardsArray.push({value: 'joker', color: color[0]})
            } else if (value[i] === 'joker' && cardSuit[j] === 'heart') {
                deskOfCardsArray.push({value: 'joker', color: color[1]})
            } else if (value[i] === 'joker' && cardSuit[j] === 'diamond' || value[i] === 'joker' && cardSuit[j] === 'clubs') {

            } else if (value[i] === 'diamond' || cardSuit[j] === 'heart') {
                deskOfCardsArray.push({value: value[i], suit: cardSuit[j], color: color[0]})
            } else {
                deskOfCardsArray.push({value: value[i], suit: cardSuit[j], color: color[1]})
            }
        }
    }

    return deskOfCardsArray
}

console.log(deskOfCards());

// // - знайти піковий туз
// console.log(deskOfCardsArray.find(value => value.value === 'ace' && value.suit === 'clubs'));
//
// // - всі шістки
// console.log(deskOfCardsArray.filter(value => value.value === '6'));
//
// // - всі червоні карти
// console.log(deskOfCardsArray.filter(value => value.color === 'red'));
//
// // - всі буби
// console.log(deskOfCardsArray.filter(value => value.suit === 'diamond'));
//
// // - всі трефи від 9 та більше
// console.log(deskOfCardsArray.filter(value => value.value >= '9' && value.suit === 'clubs' || value.value === '10' && value.suit === 'clubs'));



