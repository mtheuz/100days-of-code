/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

function maxValor(arr) {
    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

var kidsWithCandies = function(candies, extraCandies) {
    let maiorNumero = maxValor(candies);
    return candies.map(c => c + extraCandies >= maiorNumero)
};


console.log(kidsWithCandies([2,3,5,1,3], 3))