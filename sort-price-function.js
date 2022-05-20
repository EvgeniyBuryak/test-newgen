
// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// [подходящие курсы для каждого варианта фильтра]

// let filterByPrice = (array, number, price) => {    
//     return array.filter( ({ prices }) => {
//         if (prices[0])

//         if (prices[number] < price)
//             return false;
//     });
// }

// Функции для поиска подходящего курса
let SortByTo = (to) => {


}
let SortByFrom = () => {}
let SortByFromAndTo = () => {}

/**
 * Берём массив объектов(курсов) состоящих из свойства "name" и "prices".
 * Делим на три варианта
 */
let SortByPrice = (requiredRange, courses) => {
    const [from, to] = requiredRange;
    // let newCourses = courses;

    

    let coursesTo = courses.filter ( ({prices}) => prices[0] === null ); // курсы до определенной цены
    let coursesFrom = courses.filter ( ({prices}) => prices[1] === null ); // курсы от определенной цены
    let coursesFromAndTo = courses.filter ( ({prices}) => prices[0] !== null && prices[1] !== null ); // курс от и до
    coursesFromAndTo.forEach( ({prices}) => alert(`prices: ${prices}`) );
}


SortByPrice(requiredRange1, courses);

// let SortByPrice = (requiredRange, courses) => {
//     const [from, to] = requiredRange;
//     let newCourses = courses;

//     if (from !== null) { 
        
//         newCourses = newCourses.filter( ({ prices }) => {

//             if (prices[0] < from && prices[1] > from) return false;

//             return true;
//         });
//     }

//     // let newCourses = newCourses.filter( ({ prices }) => {
        
//     //     // if (prices[0] === null) return false;
//     //     // if (to === null)

//     //     if (prices[0] <= from) return false;

//     //     if (prices[0] <= to)
//     //         return true;
//     // });

//     if (to !== null) {

//         newCourses = newCourses.filter( ({ prices }) => {

//             if (prices[0] > to && prices[1] < to) return false;

//             if (prices[0] === null && prices[1] === null) return false;
            
//             return true;
//         });
//     }

//     newCourses.forEach( ({prices}) => alert(`prices: ${prices}`) );    
// }

// SortByPrice(requiredRange2, courses);

// courses.filter( item => {
//     const [from2, to2] = item.prices;

//     // if (from >= from2) alert(`prices: ${item.prices}`);
//     if (to >= to2) alert(`prices: ${item.prices}`);
// })