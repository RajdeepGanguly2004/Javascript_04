/*14. var cars = ["bmw", "volvo", "honda"];
	I.	Add new element “Audi” to the cars array.
	II.	Add new element “Toyota” to the front/start of the array
	III.	Delete last element of the array
	IV.	Reducing the indexes of every element by one
*/
var cars = ["Bmw", "Volvo", 'Honda'];
cars.push("Audi")
console.log(cars);
cars.unshift("Toyota")
console.log(cars);
cars.pop()
console.log(cars);
cars.shift()
console.log(cars);