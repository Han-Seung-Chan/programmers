function solution(a, b) {
  return (answer = a.reduce((acc, cur, index) => {
    return acc + cur * b[index];
  }, 0));
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
