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