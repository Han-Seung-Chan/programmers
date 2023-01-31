function solution(k, m, score) {
  let answer = 0;
  const scoreConst = score.sort(function (a, b) {
    return b - a;
  });

  for (let i = m - 1; i < scoreConst.length; i += m) {
    answer += scoreConst[i] * m;
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
