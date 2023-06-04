
function getFrequencies(val) {
    const freqCount ={};
    for (const value of val) {
      if (value in freqCount) {
        freqCount[value]++; // 이미 등장한 값인 경우 카운트를 1 증가시킵니다.
      } else {
        freqCount[value] = 1; // 처음 등장하는 값인 경우 카운트를 1로 초기화합니다.
      }
    }
    return freqCount;
  }
  


module.exports =  getFrequencies;