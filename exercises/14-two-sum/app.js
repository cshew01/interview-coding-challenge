function checkArray(nums,target) {
    let solution = [];
   
    for (let x=0; x<=nums.length; x++) {
        let calc = target-nums[x];
       
        for (let y=0; y<=nums.length; y++) {
            if (x != y && calc === nums[y]) {
                solution.push(x, y);
                console.log(solution);
                return;
            };
        };

        if (solution != "") {return};

    };
    return null;
};

console.log(checkArray([2, 7, 11, 15],9));
console.log(checkArray([3, 2, 4],6));
console.log(checkArray([3, 3],6));
console.log(checkArray([1, 3, 3, 2, 5, 3, 7],10));