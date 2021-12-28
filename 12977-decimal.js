function solution(num) {
  let answer = 0;
  for (let i = 0; i < num.length - 2; i++) {
    for (let j = i + 1; j < num.length - 1; j++) {
      for (let k = j + 1; k < num.length; k++) {
        const sum = num[i] + num[j] + num[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function isPrime(sum) {
  for (let i = 2; i < sum; i++) if (sum % i === 0) return false;
  return sum > 1;
}

console.log(solution([1, 2, 3, 4]));
