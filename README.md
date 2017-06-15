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