let person={
firstName: "John",
lastName: "Doe",
age: 30,
isStudent: false
};
console.log(person.firstName);
console.log(person["age"]);
person.firstName= 'Jane';
console.log(person.firstName);
person.dob= '1992-01-01';
console.log(person.dob);
delete person.dob;
console.log(person.dob);
console.log('dob' in person);
console.log('age' in person);