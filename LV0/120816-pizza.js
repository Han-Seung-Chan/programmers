function solution(slice, n) {
  let result = 0;
  let count = 0;

  while (count < n) {
    count += slice;
    result++;
  }

  return result;
}

console.log(solution(7, 10)); // 2
console.log(solution(4, 12)); // 3
