function solution(n) {
  var answer = '';
  const srt = ['수', '박'];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) answer += srt[0];
    if (i % 2 === 0) answer += srt[1];
  }
  return answer;
}
console.log(solution(3));
