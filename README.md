# useful-code

## Phone number regex

```javascript
/^1*\s*(\(\d{3}\)|\d{3}){1}[-\s]*\d{3}[-\s]*\d{4}$/
```

## Sort sub objects

```javascript
users.sort(function(a, b){
    if(a.firstname < b.firstname) return -1;
    if(a.firstname > b.firstname) return 1;
    return 0;
})
```

## Binary Gap

```javascript
function solution(N) {
    const binary = (N >>> 0).toString(2).split('1')
    return binary.reduce((acc, value) => {
        if(value && value.length > acc) {
            return value.length;
        } else {
            return acc;
        }
    }, 0);
}
```

## Last interview question

Given phone number in the format

```javascript
0191265784 23:45
0166187465 45:78
```

Get the complete time of all phone calls and add up the phone number.

## String function

```javascript
 split(' ') // Turn into array spliting on spaces

```

## Array functions

```javascript
join(' ') // join with a space
map((value, index, array)=> {})
filter((element, index, array) => {})
reduce((acc, value, index, array)=> {})
```

## Return an odd number

```javascript
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
```

## Permutations

```javascript
function permute(permutation) {
  const result = [permutation.slice()];
  const c = new Array(permutation.length).fill(0);
  const i = 1;

  while (i < permutation.length) {
    if (c[i] < i) {
      const k = i % 2 && c[i];
      const p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}


function middlePermutation(s) {
  const permitations = permute(s.split(''));
  const allCombos = permitations.map(value => value.join('')).sort();
  
  return median(allCombos.length);
  
  return allCombos[median(allCombos.length)];
}

function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

function median(value) {
  return Math.ceil(value / 2);
}
```

### Sum

```javascript
const array = [1,2,3,4];

array.reduce((sum, current) => sum + current, 0)

```

### For loop

```javascript
for(let index = 0; index < array.length; index++) {
  // do something
}
```

### Intersection of two sets

```javascript
const aSet = new Set(canBeMod)
    const bSet = new Set(canMod);
    
    return new Set([...aSet].filter(x => bSet.has(x))).size;
```