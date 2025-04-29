let sum = 0;
   for (let i=1; i<1000; i++) {
    if (i%3 === 0 || i%5 === 0) {
        sum = sum + i;
        console.log(i);
    }
   }
// Use console.log to print the resut
console.log(sum);