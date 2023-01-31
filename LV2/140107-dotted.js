function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    const maxY = (d ** 2 - x ** 2) ** 0.5;
    answer += Math.ceil(maxY / k) + (maxY % k === 0 ? 1 : 0);
  }
  return answer;
}

console.log(solution(2, 4)); // 6
console.log(solution(1, 5)); // 26