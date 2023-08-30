//stair case
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let stair = ' '.repeat(n - i);
        let make  = '#'.repeat(i);
        console.log(stair + make);
    }
}

const { min, max } = require("lodash")

 const n = 4; 
 staircase(n);

//to find min, max sum of an arraay

const arr = [1,3,5,7,9]
 arr.sort((a,b) => a-b);
 let sol = 0
 for (let i=0; i<arr.length-1;i++) {
    sol += arr[i]

 }
 console.log(sol)
 let rem = arr.shift(0)
 let sol_1 = 0
 for (let i = 0; i=length;i++){
    sol_1 += arr[i]

 }
 console.Console.log(sol,sol_1)

 //
 let candles = [4,4,1,3]
 function birthdayCakeCandles(candles) {
    let hello = Math.max(...candles)


    let value = hello
    let count = 0
    for (let i = 0; i<candles.length; i++){
        if (candles[i]===value){
            count++
        }
    }
    return count
    

}
console.log(count)
//
function timeConversion(s) {
    let [hour, minute, second] = s.slice(0, 8).split(':');
    const suffix = s.slice(8);
  
    if (suffix === 'AM' && hour === '12') {
      hour = '00';
    } else if (suffix === 'PM' && hour !== '12') {
      hour = (parseInt(hour) + 12).toString();
    }
  
    return `${hour}:${minute}:${second}`;
  }
  //
  function gradingStudents(grades) {
    const roundedGrades = [];
  
    for (let i = 0; i < grades.length; i++) {
      const grade = grades[i];
  
      // Check if rounding is necessary
      if (grade >= 38) {
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        const difference = nextMultipleOf5 - grade;
  
        // Round up if the difference is less than 3
        if (difference < 3) {
          roundedGrades.push(nextMultipleOf5);
          continue;
        }
      }
  
      // If no rounding is necessary, keep the original grade
      roundedGrades.push(grade);
    }
  
    return roundedGrades;
  }
  


