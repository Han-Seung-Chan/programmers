function solution(want, number, discount) {
  let answer = 0;

  const isMatch = (discount) => {
    const wantMap = new Map();
    discount.forEach((d) => wantMap.set(d, (wantMap.get(d) || 0) + 1));
    for (let i = 0; i < want.length; i++) {
      if (wantMap.get(want[i]) !== number[i]) return false;
    }
    return true;
  };

  for (let idx = 0; idx <= discount.length - 10; idx++) {
    const d = discount.slice(idx, idx + 10);
    if (isMatch(d)) answer++;
  }
  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
); // 3
console.log(
  solution(
    ['apple'],
    [10],
    [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ]
  )
); // 0
