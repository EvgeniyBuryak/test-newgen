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
 * Сортируем полученный результат по возврастанию
 * @param {[]} arr - входящий массив
 * @returns - возвращаем отсортированный массив
 */
let sortByPrice = (arr) => {
    return arr.sort((a,b) => {
        if (b.prices[0] === null) {
            return a.prices[0] - b.prices[1];
        }
        return a.prices[0] - b.prices[0];
    })
}

/**
 * Используем ранее отфильрованые курсы по трем вариантам в поиске подходящих
 * a) Сначала ищем подходящие курсы из массива где храняться "ДО" какой-то цены
 * b) Потом ищем в массиве курсов где храняться "ОТ" какой-то цены
 * c) В конце из курсов где цена была указана "ОТ" и "ДО"
 * 
 * @param {[]} a - массив курсов до определенного цены [null, 400].
 * @param {[]} b - массив курсов от определенного цены [200, null].
 * @param {[]} c - массив курсов в диапазоне от и до   [100, 200].
 * 
 * @param {number} from - число, от которого осуществляется поиск
 * @param {number} to - число, до которого осуществляется поиск
 * 
 * @returns - возвращает отфильтрованный массив курсов
 */
let filterPrices = a => b => c => str => (from, to) => {
    let res  = [];

    switch(str) {
        case "to":
            res.push(...a.filter( ({prices}) => prices[1] <= to ));
            res.push(...b.filter( ({prices}) => prices[0] <= to ));
            res.push(...c.filter( ({prices}) => prices[0] <= to && prices[1] <= to));          
            break;
        case "from":
            res.push(...a.filter( ({prices}) => prices[1] >= from ));
            res.push(...b.filter( ({prices}) => prices[0] >= from ));
            res.push(...c.filter( ({prices}) => prices[0] >= from && prices[1] >= from));
            break;
        case "from to":
            res.push(...a.filter( ({prices}) => prices[1] >= from && prices[1] <= to ));
            res.push(...b.filter( ({prices}) => prices[0] >= from && prices[0] <= to ));
            res.push(...c.filter( ({prices}) => prices[0] >= from && prices[1] <= to ));
            break;
        default:            
            break;
    }

    return res;
}

/**
 * Курсы, среди которых будем искать подходящий по входящему запросу от пользователя.
 * 
 * Берём массив объектов(курсов) состоящих из свойства "name" и "prices".
 * Делим его курсы на три варианта: "от", "до", "от и до". Так нам легче будет обработать их отдельно.
 * Тоже самое сделаем  со значениями от пользователя. Обрабатываем каждый из трех вариантов отдельно.
 * 
 * @param {[number | null, number | null]} courses - список курсов в виде массива объектов, состоящий из двух параметров
 * @param {[number | null, number | null]} requiredRange - Варианты цен (фильтры), которые ищет пользователь
 */
let filterPricesByRange     = (courses, requiredRange) => {

    const    [from, to]     =  requiredRange;
    let          result     =  null;

    // Разделяем курсы на три массива, чтобы облегчить обработку
    /** курсы до определенной цены [null, 400] */
    const coursesTo         = courses.filter ( ({prices}) => prices[0] === null && prices[1] !== null );
    /** курсы от определенной цены [200, null] */
    const coursesFrom       = courses.filter ( ({prices}) => prices[0] !== null && prices[1] === null );
    /** курсы от и до [100, 200] */
    const coursesFromAndTo  = courses.filter ( ({prices}) => prices[0] !== null && prices[1] !== null );    
    
    // От типа диапазона цен, подбираем фильтр
    const        STRING     = "" + requiredRange.reduce( (prev, curr) => { 
        
        if (prev === null)                  return "to";
        if (curr === null)                  return "from";
        if (prev !== null && curr !== null) return "from to";
    });
    
    // Размещаем отфильтрованные заранее курсы. И строку с результатом проверки на null     
    let filterBy            = filterPrices(coursesTo)(coursesFrom)(coursesFromAndTo)(STRING);
    
    // Вносим пользовательские настройки для фильтра
    let unsortedListCourses = filterBy(from, to);
    
    // Сортируем полученный результат
    result                  = sortByPrice(unsortedListCourses);
    
    return result;
}

console.log(filterPricesByRange(courses, requiredRange1));
console.log(filterPricesByRange(courses, requiredRange2));
console.log(filterPricesByRange(courses, requiredRange3));