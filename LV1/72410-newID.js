function solution(new_id) {
  let answer = new_id;
  answer = answer.toLowerCase();

  answer = answer.replace(/[^a-z|0-9\-_.]/g, '');

  answer = answer.replace(/\.+/g, '.');

  answer = answer.replace(/^[\.]|[\.]$/g, '');

  if (answer.length === 0) {
    answer = 'a';
  }

  if (answer.length > 15) {
    answer = answer.substring(0, 15);
  }
  answer = answer.replace(/[\.]$/, '');

  if (answer.length < 3) {
    for (let i = answer.length; i < 3; i++) {
      answer += answer.substring(i - 1);
    }
  }

  return answer;
}
console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklm.p'));
