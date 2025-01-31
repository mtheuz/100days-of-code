/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArray = s.trim().split(/\s+/); 
    for (let i = 0; i < sArray.length / 2; i++) {
        let temp = sArray[i];
        sArray[i] = sArray[sArray.length - i - 1];
        sArray[sArray.length - i - 1] = temp;
    }
    s = sArray.join(" ");
    return s;
};
