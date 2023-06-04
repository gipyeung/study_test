function countTrue(array){
    let count = 0;
    for(i in array){
        if(array[i]==true){
            count +=1;
        }
    }
    return count;
}

countTrue([true, false, false, true, false]);

countTrue([false, false, false, false]);

countTrue([]);

module.exports = countTrue;