
// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, // *
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, // *
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

/**
 * Берём массив объектов(курсов) состоящих из свойства "name" и "prices".
 * 
 */
let SortByPrice = (requiredRange, courses) => {
    const [from, to] = requiredRange;

    // requiredRange[0].reduce( curr => 

    let sortedFirst = courses.filter( ({ prices }) => {
        if (prices[0] >= from && prices[0] <= to)
            return true;
    });

    let sortedSecond = sortedFirst.filter( ({ prices }) => {
        if (prices[1] <= to)
            return true;
    })

    sortedSecond.forEach( ({prices}) => alert(`prices: ${prices}`) );
    
    // courses.filter( item => {
    //     const [from2, to2] = item.prices;

    //     // if (from >= from2) alert(`prices: ${item.prices}`);
    //     if (to >= to2) alert(`prices: ${item.prices}`);
    // })
}

SortByPrice(requiredRange2, courses);