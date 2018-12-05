const str = 'a, b, c, d';

function e1(value) {
  return value.split(', ');
}

// ['a', 'b', 'c', 'd']
console.log(e1(str));

function e2(str) {
  const outcome = str.split(', ').join(' + ');
  return outcome;
}

const string2 = e2(str);
// a + b + c + d <string>

console.log(string2);

function e3(str) {
  return str.split('').splice(0, 1);
}

// ['a'] first element
console.log(e3(str));

function e4(str) {
  return str.split('').splice(9);
}

// ['d'] last element
console.log(e4(str));

function e5(str) {
  return str
    .split(',')
    .slice(1)
    .splice(0, 2);
}
// ['b', 'c']
console.log(e5(str));

function e6(str) {
  const first = str
    .split('')
    .splice(0, 1)
    .join();
  const last = str
    .split('')
    .splice(9)
    .join();

  return [first, last];
}

// ['a', 'd']
console.log(e6(str));
