function solution(price, money, count) {
  let answer = -1;
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  answer = total - money;
  if (answer > 0) return answer;
  else return 0;
}
console.log(solution(3, 20, 4));
