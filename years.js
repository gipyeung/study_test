function calAge(years){
    const result = years * 365;
    console.log(result);
    return result;
}

calAge(65);
calAge(0);
calAge(20);

module.exports = calAge;