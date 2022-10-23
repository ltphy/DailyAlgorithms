function suffixWithUnit (input) {
    try {
        const value = parseFloat(input);
        if(value===undefined) throw(error);
        if(value>=0 && value<1000) {
            return value;
        } else if(value>=1000 && value<1000000) {
            return `${value/1000} Kilo`;
        }
        else if(value>=1000000) {
            return `${value/1000000} Mega`;
        }
    } catch(error) {
        return 'failed to convert';
    }

};
console.log(typeof suffixWithUnit);
console.log(suffixWithUnit(0));
console.log(suffixWithUnit(123));
console.log(suffixWithUnit(1234));
console.log(suffixWithUnit(12345));
console.log(suffixWithUnit(1234567));
console.log(suffixWithUnit(12345678));
