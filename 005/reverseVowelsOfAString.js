/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u']
    let currentVowels = []
    sArray = s.split("")

    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            currentVowels.push(s[i])
        }
    }
    let cont = 0;
    for(let i = s.length - 1; i >= 0; i--){
        if(vowels.includes(s[i].toLowerCase())){
            sArray[i] = currentVowels[cont]
            cont++
        }
    }
    s = sArray.join("")
    return s
    
};
