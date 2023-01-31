function solution(s) {
  let arr = [];
  let count = 0;
  let count2 = 0;
  let str = '';

  for (let i = 0; i < s.length; i++) {
    str += s[i];
    if (str[0] === s[i]) {
      count++;
    } else {
      count2++;
    }
    if (count === count2) {
      arr.push(str);
      str = '';
      count = 0;
      count2 = 0;
    }
  }
  if (str !== '') arr.push(str);
  return arr.length;
}

console.log(solution('banana'));
console.log(solution('abracadabra'));
console.log(solution('aaabbaccccabba'));
