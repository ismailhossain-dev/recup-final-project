/*1️⃣ return কি করে?

return হলো ফাংশনের সেই keyword যা বলে:

“এই ফাংশনটি শেষ হয়েছে, এই মানটি আমাকে দেয়া হোক।”
*/

//most important function jodi parameter use kore kon kichu man hahri korle  return korthe hobe
//step-1
function add(a, b) {
  return a + b;
}

let result = add(3, 4);
//console.log(result); // 7

//step-1❌ যদি return না থাকে: function complete hole bole dey return er mardome

function add(a, b) {
  let sum = a + b;
}

console.log(add(3, 4)); // undefined
