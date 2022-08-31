/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
 export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
    
    let minNumber = '';
    let maxNumber = '';

    if (minFirst > minSecond) {
        minNumber = minSecond
    } else if (minFirst < minSecond) {
        minNumber = minFirst
    };

    if (maxFirst > maxSecond) {
        maxNumber = maxFirst
    } else if (maxFirst < maxSecond) {
        maxNumber = maxSecond
    };

    let result = minNumber * maxNumber;

    return result;

};

/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {
    
    let square = Math.PI * (radius ** 2);
    return square;

};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {

    let fixedNum = number.toFixed(accuracy);
    let toNum = Number(fixedNum);
    Math.round(toNum)
    return toNum;

};

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
export const getFloorCeil = (number) => {
    
    let floorNum = Math.floor(number)
    let ceilNum = Math.ceil(number)

    if (parseInt(number) % 2 !== 0) {
        return floorNum
    } else if (parseInt(number) % 2 === 0) {
        return ceilNum
    }

};

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {

    return Math.round(Math.random() * (to - from) + from);

};
