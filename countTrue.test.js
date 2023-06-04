const countTrue = require("./coutTrue");

test("배열에 있는 트루 개수 세기",()=>{
    expect(countTrue([true, false, false, true, false])).toBeGreaterThanOrEqual(2);
});

test("배열에 있는 트루 개수 세기",()=>{
    expect(countTrue([false, false, false, false])).toBeGreaterThanOrEqual(0);
});

test("배열에 있는 트루 개수 세기",()=>{
    expect(countTrue([])).toBeGreaterThanOrEqual(0);
});