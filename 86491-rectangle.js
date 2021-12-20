function solution(size) {
  let arr = [0, 0];
  for (let i = 0; i < size.length; i++) {
    let [bigNum, smallNum] = size[i].sort((a, b) => b - a);
    if (bigNum > arr[0]) {
      arr[0] = bigNum;
    }
    if (smallNum > arr[1]) {
      arr[1] = smallNum;
    }
  }
  return arr[0] * arr[1];
}

console.log(
  solution([
    [60, 30],
    [60, 50],
    [30, 70],
    [80, 40],
  ])
);
