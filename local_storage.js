let key=prompt("Enter key: ");
let value=prompt("Enter value: ");

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localstorage.getItem(key)}`);