
("EXERCICE1");
const numbers = [20, 30, 42, 66, 99];
console.log(numbers);

let i = 0;
while (i < 5) {
 numbers[i] = numbers[i] + 42;
 i++;
}

for (let j = 0; j < 5; j++) {
 numbers[j] = numbers[j] + 42;
}

for (const k of numbers) {
 console.log(k + 42);
}

console.log(numbers.map((x) => x + 42));

("EXERCICE2");

const numbers2 = [20, 30, 42, 66, 99];

let s = 0;
for (const k of numbers2) {
 s = s + k;
}
console.log(s);

const ini = 0;
const sumtab = numbers2.reduce((prev, curr) => prev + curr, ini);
console.log(sumtab);

("EXERCICE3");

const colors = ["blue", "red", "green", "yellow", "cyan"];

colors.forEach((el) => console.log(el));

("EXERCICE4");

const users = [
 { name: "Julien", age: 25 },
 { name: "Maud", age: 24 },
 { name: "Bastien", age: 22 },
 { name: "Raphaël", age: 28 },
 { name: "Alexandre", age: 42 },
 { name: "Julien", age: 55 }
];

const fel = users.find(us=> us.name === "Julien" && us.age === 25);

console.log(fel);