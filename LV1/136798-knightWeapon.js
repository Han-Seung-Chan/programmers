function solution(number, limit, power) {
  const count = [];

  for (let cur = 1; cur <= number; cur++) {
    let divisor = 0;

    for (let i = 1; i <= cur / 2; i++) {
      if (cur % i === 0) {
        divisor += 1;
      }
    }
    count.push(divisor + 1);
  }
  return count
    .map((n) => {
      return n > limit ? power : n;
    })
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
