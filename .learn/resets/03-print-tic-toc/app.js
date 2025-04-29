for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        print = 'TicToc';
    } else if (i%3 === 0) {
        print = 'Tic';
    } else if (i%5 === 0) {
        print = 'Toc';
    } else {
        print = i;
    }
    console.log(print);
}