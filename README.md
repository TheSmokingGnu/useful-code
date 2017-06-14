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