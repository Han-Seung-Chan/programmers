function solution(n, lost, reserve) {
  let answer = n - lost.length;

  lost = lost.sort();
  reserve = reserve.sort();

  // 여벌 체육복을 가져온 학생이 도난당한 경우
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        answer++;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }

  // 도난당한 학생에게 체육복 빌려주는 경우
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] - 1 === reserve[j] || lost[i] + 1 === reserve[j]) {
        answer++;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
