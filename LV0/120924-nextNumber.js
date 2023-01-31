function solution(common) {
  let result;
  let diff = common[1] - common[0];
  let ratio = common[1] / common[0];
  let isArithmetic = true;
  for (let i = 1; i < common.length; i++) {
    if (common[i] - common[i - 1] !== diff) {
      isArithmetic = false;
      break;
    }
  }
  if (isArithmetic) {
    result = common[common.length - 1] + diff;
  } else {
    result = common[common.length - 1] * ratio;
  }
  return result;
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
