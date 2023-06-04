const getFrequencies = require('./getFrequencies');

test('getFrequencies', function(){
    expect(getFrequencies(["A","B","A","A","A"])).toEqual({A: 4, B: 1});
    expect(getFrequencies(["A","B","A","A","A"])).toMatchObject({A: 4});

});

test('getFrequencies', function(){
    expect(getFrequencies([1,2,3,3,2])).toEqual({"1": 1, "2": 2, "3": 2});
    expect(getFrequencies([1,2,3,3,2])).toMatchObject({"2": 2});

});

test('getFrequencies', function(){
    expect(getFrequencies([true,false,false,true])).toEqual({"true": 2, "false": 2});
    expect(getFrequencies([true,false,false,true])).toMatchObject({"false":2});

});