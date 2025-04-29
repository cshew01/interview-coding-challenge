function findMissingNumber(array) {
    let missingNumber="";
    console.log(array);
    for (i=1; i<=array.length; i++) {
        if (!array.includes(i)) {
            missingNumber=i;
            break;
        };
    };
    console.log('The missing number is ' + i);
};

findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Returns: 6
findMissingNumber([1, 2, 4, 5, 6]);       // Returns: 3
findMissingNumber([2, 3, 1, 5]);          // Returns: 4