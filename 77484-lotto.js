function solution(lottos, winNum) {
  let answer = [];
  let count = 0;
  let win = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] == 0) {
      count++;
    } else {
      for (let j = 0; j < winNum.length; j++) {
        if (winNum[j] == lottos[i]) {
          win++;
        }
      }
    }
  }

  const min = rank(win);
  const max = rank(win + count);

  answer = [max, min];

  return answer;
}

function rank(win) {
  let rank = 0;

  if (win == 6) rank = 1;
  else if (win == 5) rank = 2;
  else if (win == 4) rank = 3;
  else if (win == 3) rank = 4;
  else if (win == 2) rank = 5;
  else rank = 6;

  return rank;
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
