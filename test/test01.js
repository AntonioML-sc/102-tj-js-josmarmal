function numPrimo(input) {

    const esPrimo = (num) => {
        if (num < 2) {
            return false;
        } else {
            for (let i = 2; i < num/2 + 1; i++) {
                if (num % i == 0) {
                    return false;
                }                
            }
            return true;
        }
    }

    const primos = (num) => {
        let arr = [];
        for (let i = 2; i <= num; i++) {
            if (esPrimo(i)) {
                arr.push(i);
            }            
        }
        return arr
    }

    if (input > 1) {
        return primos(input)
    } else {
        return -1
    }
}

module.exports = numPrimo;
