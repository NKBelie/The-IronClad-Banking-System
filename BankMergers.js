// concat()
let branchA = ["Alice", "Bob"];
let branchB = ["Charlie", "Diana"];

let allCustomers = branchA.concat(branchB);

console.log("All Customers:", allCustomers);


// flat()
let messyData = [
    ["Eve", "Frank"],
    ["Grace"],
    ["Hank", "Ivy"]
];

let cleanData = messyData.flat();

console.log("Flattened Data:", cleanData);


// sort() and reverse()
cleanData.sort();
cleanData.reverse();

console.log("Z to A Order:", cleanData);


// join()
let banner = allCustomers.join(" - ");

console.log("Welcome Banner:", banner);


// fill()
let tellerWindows = new Array(5).fill("Closed");

console.log("Teller Windows:", tellerWindows);gi