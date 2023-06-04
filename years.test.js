const calAge = require("./years");

test("년도에 따른 일수",()=>{
    expect(calAge(65)).toBe(23725);
});

test("년도에 따른 일수 0은 false",()=>{
    expect(calAge(0)).toEqual(0);
});

test("년도에 따른 일수",()=>{
    expect(calAge(20)).toBe(7300);
});