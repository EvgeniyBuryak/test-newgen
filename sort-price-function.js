
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
let requiredRange1       = [null, 200];
let requiredRange2       = [100, 350];
let requiredRange3       = [200, null];

/**
 * Разделяем курсы на три массива, чтобы облегчить обработку
 */
// курсы до определенной цены [null, 400]
let coursesTo            = courses.filter ( ({prices}) => prices[0] === null && prices[1] !== null );
// курсы от определенной цены [200, null]
let coursesFrom          = courses.filter ( ({prices}) => prices[0] !== null && prices[1] === null );
// курсы от и до [100, 200]
let coursesFromAndTo     = courses.filter ( ({prices}) => prices[0] !== null && prices[1] !== null );

/**
 * Функции для поиска курса до определенного цены [null, 200]
 * @param {number} to - число, до которого осуществляется поиск
 */
let SortByTo = (to) => {
    let selectedCourses  = null;
    
    selectedCourses      =         coursesTo.filter( ({prices}) => prices[1] <= to );
    selectedCourses.push(     ...coursesFrom.filter( ({prices}) => prices[0] <= to ));
    selectedCourses.push(...coursesFromAndTo.filter( ({prices}) => prices[0] <= to && prices[1] <= to))

    // [подходящие курсы для каждого варианта фильтра]
    selectedCourses.forEach( ({prices}) => alert(`prices: ${prices}`) );
}

/**
 * Функции для поиска курса в пределах диапозона цен [100, 350]
 * @param {number} from - число, от которого осуществляется поиск
 * @param {number} to - число, до которого осуществляется поиск
 */
let SortByFromAndTo = (from, to) => {
    let selectedCourses  = null;
    
    selectedCourses      =         coursesTo.filter( ({prices}) => prices[1] >= from && prices[1] <= to );
    selectedCourses.push(     ...coursesFrom.filter( ({prices}) => prices[0] >= from && prices[0] <= to ));
    selectedCourses.push(...coursesFromAndTo.filter( ({prices}) => prices[0] >= from && prices[1] <= to))

    // [подходящие курсы для каждого варианта фильтра]
    selectedCourses.forEach( ({prices}) => alert(`prices: ${prices}`) );
}

/**
 * Функции для поиска курса от определенной цены [200, null]
 * @param {number} from - число, от которого осуществляется поиск
 */
let SortByFrom = (from) => {
    let selectedCourses  = null;

    selectedCourses      =         coursesTo.filter( ({prices}) => prices[1] >= from );
    selectedCourses.push(     ...coursesFrom.filter( ({prices}) => prices[0] >= from ));
    selectedCourses.push(...coursesFromAndTo.filter( ({prices}) => prices[0] >= from && prices[1] >= from))

    // [подходящие курсы для каждого варианта фильтра]
    selectedCourses.forEach( ({prices}) => alert(`prices: ${prices}`) );
}

/**
 * Курсы, среди которых будет искать подходящий по входящему запросу от пользователя.
 * 
 * Берём массив объектов(курсов) состоящих из свойства "name" и "prices".
 * Делим его курсы на три варианта: "от", "до", "от и до". Так нам легче будет обработать их отдельно.
 * Тоже самое сделаем  со значениями от пользователя. Обрабатываем каждый из трех вариантов отдельно.
 * 
 * @param {[number | null, number | null]} requiredRange - Варианты цен (фильтры), которые ищет пользователь
 * @param {[number | null, number | null]} courses - список курсов в виде массива объектов, состоящий из двух параметров
 */
let SortByPrice = (requiredRange, courses) => {
    const                          [from, to] = requiredRange;

    const RESULT = "" + requiredRange.reduce( (prev, curr) => { 
        let                                 a = 0;
        if (prev === null)                  a = 1;
        if (curr === null)                  a = 2;
        if (prev !== null && curr !== null) a = 3;
        return a;
    });
    
    switch(RESULT) {
        case "1":
            alert("to");
            SortByTo(to);            
            break;
        case "2":
            alert("from");
            SortByFrom(from);
            break;
        case "3":
            alert("from to");
            SortByFromAndTo(from, to);
            break;
        default:            
            break;
    }
}

// SortByPrice(requiredRange1, courses);