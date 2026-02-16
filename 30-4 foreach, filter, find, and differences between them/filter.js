//node filter dile output chole asbe
const numbers = [1, 5, 16, 10, 45, 2, 7];

const result = numbers.filter((num) => num <= 11).sort((a, b) => a - b);
(5, 7, 10);

//console.log(result); //1, 5, 10, 2, 7

//sort korar pore sajano code
//console.log(result); //1, 2, 5, 7, 10

const students = ["mitu", "mitu", "mitu", "abir", "fuluk"];

const output = students.filter((mitus) => mitus === "mitu");
console.log(output); //mitu mitu mitu

//step-2
const number = [1, 5, 16, 10, 45, 2, 7];

const greaterThan10 = number.filter((x) => x > 10); //16, 45

console.log("greaterThan value", greaterThan10);
/**
 * ✅ Filter keno use kora hoy? (Bangla explanation)
⭐ 1️⃣ Array theke specific item ber korte

Jokhon amra chai sob data na, sudhu kichu data.

👉 Example:
Sob student na, sudhu pass student.

⭐ 2️⃣ Unwanted data remove korte

Filter diye unwanted element remove kora hoy.

👉 Example:
Inactive user, deleted product, etc.

⭐ 3️⃣ Condition diye data select korte

Filter e amra condition dei.
Jara condition match korbe, tara thakbe.

👉 Example:

Age > 18

Price < 500

Even number

⭐ 4️⃣ New array create korte

Filter always new array return kore.
Original array change hoy na.
 */
