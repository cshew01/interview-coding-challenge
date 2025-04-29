function findMissingNumber(array) {
    let missingNumber="";
    console.log(array, array.length);
    for (i=1; i<=array.length; i++) {
        if (!array.includes(i)) {
            missingNumber=i;
            break;
        };
    };
    const result = (!missingNumber) ? 'There are no missing numbers.' : 'The missing number is ' + missingNumber + '.';
    console.log(result);
};

findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Returns: 6
findMissingNumber([1, 2, 4, 5, 6]);       // Returns: 3
findMissingNumber([2, 3, 4, 5]);          // Returns: 1
findMissingNumber([2, 3, 1, 5, 4, 6, 8]); // Returns: 7
findMissingNumber([2, 3, 1, 5, 4]);       // Returns: null