const gcdOfStrings = (string1, string2) => {
 
    if (string1 + string2 !== string2 + string1) {
        return ""; 
    }


    const calcularMDC = (numero1, numero2) => {
        while (numero2 !== 0) {
            let temporario = numero2;
            numero2 = numero1 % numero2;
            numero1 = temporario;
        }
        return numero1;
    };

    const tamanhoMDC = calcularMDC(string1.length, string2.length);
    return string1.substring(0, tamanhoMDC);
};

