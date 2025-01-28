/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1,word2) =>{
    let strinAlternately = ""
    const iterations = Math.min(word1.length,word2.length)
    console.log(iterations)

    let n = 1
    for( i = 0; i < iterations; i++) {
        strinAlternately = strinAlternately + word1[i] + word2[i]
        console.log(strinAlternately)
        n = i
    }
    if(word1.length > word2.length && word1.length != word2.length){
        strinAlternately = strinAlternately + word1.slice(n+1)
    }
    else{
        strinAlternately = strinAlternately + word2.slice(n+1)

    }
    return strinAlternately
}

console.log(mergeAlternately("abcd", "123"))