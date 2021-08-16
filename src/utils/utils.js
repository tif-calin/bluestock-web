/* eslint-disable max-len */
const PRIMES = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 
  97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 139, 149, 
  151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
  223, 227, 229, 233, 239, 241, 251
]; // there are 55 prime numbers that are less than 255. Remember 255 = 3 * 5 * 17

const text2hash = text => 
  parseInt((text || ' ')
    .split('')
    .reduce(
      (acc, char, i) => 
        (acc * (char.charCodeAt(0) ** (i + 1))) % Number.MAX_SAFE_INTEGER, 
      1
    )
  )
;

const weightedRandInt = dbl => {
  if (dbl <= 0) return 1;

  let c = 1;
  while (dbl < 1) {
    dbl *= 2;
    c++;
  }

  return c;
};

const makeColor = (hash, prime = 211) => {
  const hex = (((hash + prime) * prime) % (256 ** 3)).toString(16);
  return '#' + '0'.repeat(6 - hex.length) + hex;
};

const text2gradient = text => {
  // generate hash
  const hash = text2hash(text);

  // decide type of gradient
  const gradientType = ['linear', 'conic', 'radial'][hash % 3];

  // make gradient args
  const args = [];

  // first argument is deg and location depending on gradient type
  const deg = `${hash % 360}deg`;
  const loc = `at ${hash % 100}% ${(hash * PRIMES[hash % PRIMES.length]) % 100}%`;
  if (gradientType === 'linear') args.push(deg);
  else args.push((gradientType === 'conic') ? `from ${deg} ${loc}` : loc);

  // how many colors to use
  const numOfColors = weightedRandInt(((hash * PRIMES[hash % PRIMES.length]) % Number.MAX_SAFE_INTEGER) / Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < numOfColors; i++) args.push(makeColor(hash, PRIMES[Math.max(((i + 1) * 41) % PRIMES.length - 1, 7)]));

  // return gradient
  return `${gradientType}-gradient(${args.join(', ')})`;
};

export { text2hash, text2gradient };
