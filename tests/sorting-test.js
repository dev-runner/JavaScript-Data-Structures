var sorting = require("../algorithms/sorting");

var a = [1, 20, 17, 3, 10, 13, 16, 22];
console.log("input array: " + a);

sorting.init(a);

// sorting with selection sort
console.log('Sorted array:');
sorting.quickSort();

sorting.printData();