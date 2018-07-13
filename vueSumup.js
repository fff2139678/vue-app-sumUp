let arr = [1, 2, 3];
arr.forEach(v => {
    console.log(v);
})

console.log(arr.map(v => v*2));

console.log(arr.every(v => v>2));

console.log(arr.filter(v => v>1));

let arr1 = [3, 5, 2, 6, 1];

console.log([...new Set([...arr1, ...arr])]);

// new Set([...document.querySelectorAll('*')].map(v => v.nodeName)).size

let obj = {
    'name': 'fff',
    'sex': '男'
}

let obj1 = {
    'title': '中国',
    'color': 'red' 
}

console.log({...obj, ...obj1});