function solution(num, total) {
  let result = [];
  let start = total / num - (num - 1) / 2;
  for (let i = 0; i < num; i++) {
    result.push(Math.floor(start + i));
  }
  return result;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
