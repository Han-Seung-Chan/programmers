function solution(s) {
  const len = s.length;

  if (len % 2 === 1) {
    let index = Math.floor(len / 2);
    return s[index];
  }
  if (len % 2 === 0) {
    let index = len / 2;
    return s[index - 1] + s[index];
  }
}

console.log(solution('abcde'));
console.log(solution('qwer'));
console.log(solution('asdfghj'));
