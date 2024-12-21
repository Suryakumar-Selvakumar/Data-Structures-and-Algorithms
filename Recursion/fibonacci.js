// Implementation using iteration
function fibs(n) {
  let a = 0;
  let b = 1;
  const fibArr = [];
  fibArr.push(a, b);
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    fibArr.push(c);
    a = b;
    b = c;
  }
  return fibArr;
}

console.log(fibs(5));

// Implementation using Recursion
function fibsRec(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibsRec(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

console.log(fibsRec(5));

// fibsRec(5) ==> [0, 1, 1, 2, 3].push(s[4] + s[3]) ==> [0, 1, 1, 2, 3].push(3 + 2) ==> [0, 1, 1, 2, 3, 5]
//     fibsRec(4) ==> [0, 1, 1, 2].push(s[3] + s[2]) ==> [0, 1, 1, 2].push(2 + 1) ==> [0, 1, 1, 2, 3]
//         fibsRec(3)  ==> [0, 1, 1].push(s[2] + s[1]) ==> [0, 1, 1].push(1 + 1) ==> [0, 1, 1, 2]
//             fibsRec(2)  ==> [0,1].push(s[1] + s[0]) ==> [0, 1].push(1 + 0) ==> [0, 1, 1]
//                 fibsRec(1) ==> [0, 1]
