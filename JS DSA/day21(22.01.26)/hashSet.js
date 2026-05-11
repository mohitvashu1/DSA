let set = new Set();

set.add(19);
set.add(21);
set.add(22);
set.add(20);
set.add(14);
set.add(19);
set.entries(9,19);

// console.log(set.delete(19));
// console.log(set.has(5));


for (const element of set) {
    console.log(element);
    
}


console.log(Array.from(set));



