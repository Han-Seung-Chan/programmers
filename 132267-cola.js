function solution(a, b, n) {
  let answer = 0;
  let emptyBottles = n;
  while (emptyBottles >= a) {
    answer += parseInt(emptyBottles / a) * b;
    emptyBottles = (emptyBottles % a) + parseInt(emptyBottles / a) * b;
  }
  return answer;
}
console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
