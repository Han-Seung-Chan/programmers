function solution(s) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let count = 0;

  for (let el of numbers) {
    let tmp = s.split(el);
    s = tmp.join(count);
    count++;
  }
  return Number(s);
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
