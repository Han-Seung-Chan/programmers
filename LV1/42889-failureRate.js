function solution(N, stages) {
  let result = [];
  let count = 0;
  let user = stages.length;
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        count++;
      }
    }
    result.push([i, count / user]);
    user -= count;
    count = 0;
  }
  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  return result.map((el) => el[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
