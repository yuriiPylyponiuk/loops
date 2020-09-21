//1. Write a JavaScript program which compute, the average marks of the following 
// students Then, this average is used to determine the corresponding grade.

let classRating = 0;
let studentList = [
	{
		name: 'John',
		mark: 80,
	},
	{
		name: 'Bill',
		mark: 77,
	},
	{
		name: 'David',
		mark: 68,
	},
	{
		name: 'Ryan',
		mark: 88,
	},
	{
		name: 'Nick',
		mark: 95,
	},
];


for (let i = 0; i < studentList.length; i++){
	for (let key in studentList[i]) {
		let a = studentList[i];
		if (Number.isInteger(a[key])) {
			classRating  += a[key];
		}
	}
}

classRating = classRating/studentList.length;

if(classRating > 90 && classRating <= 100){
	console.log(`Class raiting: ${classRating} ---- A`);
}else if (classRating > 80 && classRating <= 90) {
	console.log(`Class raiting: ${classRating} ---- B`);
}else if (classRating > 70 && classRating <= 80) {
	console.log(`Class raiting: ${classRating} ---- C`);
}else if (classRating > 60 && classRating <= 70) {
	console.log(`Class raiting: ${a[key]} ---- D`);
}else if (classRating > 50 && classRating <= 60) {
	console.log(`Class raiting: ${classRating} ---- F`);
}else{
	console.log(`classRating --- не склав`);
};


// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

let sum = 0;
 
for (let i = 0; i <= 1000; i++) {
	if ( i%3 == 0 && i%5 == 0 ) {
		sum += i;
	}
};

console.log(sum);
 

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

// * 

// * * 

// * * * 

// * * * * 

// * * * * *

let str = '';
const SOMESTR = '*';

for (let i = 0; i < 5; i++){
	str += SOMESTR;
	console.log(str);
};


