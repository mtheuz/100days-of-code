/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0; 
    let i = 0; 

    while (i < chars.length) {
        let atual = chars[i];
        let cont = 0;


        while (i < chars.length && chars[i] === atual) {
            i++;
            cont++;
        }

  
        chars[write] = atual;
        write++;

        if (cont > 1) {
            for (let digit of cont.toString()) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write; 
};