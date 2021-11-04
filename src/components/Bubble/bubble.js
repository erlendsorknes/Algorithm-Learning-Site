/**
 * @todo MAKE THE FILE INTO TYPESCRIPT
 * 
 * @param {Array} array 
 * @returns the array steps it takes when sorting
 */
const getBubbleSortArray = (array) => {
    const copy = function (array) { return JSON.parse(JSON.stringify(array)); };
    const len = array.length;
    let bigArray = Array(Math.pow(array.length, 2)).fill(new Array(array.length))

    let teller = 1;
    bigArray[0] = copy(array)

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (array[j] > array[j + 1]) { //Swapping if the element in front is smaller
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                
                bigArray[teller] =copy(array)
                teller++;
            }
        }
    }

    let bigArrayWithoutEmptys = new Array(teller);
    for (var index = 0; index < teller; index++) {
           const element = bigArray[index];
         bigArrayWithoutEmptys[index] = element;
    }
    return bigArrayWithoutEmptys;
}
var array = [5, 4, 3, 2, 1];
console.log(getBubbleSortArray(array));

export {getBubbleSortArray};