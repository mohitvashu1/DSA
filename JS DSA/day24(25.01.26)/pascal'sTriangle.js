
// let a=[1]
// let b=[a[0],a[0]]
// let c=[b[0],b[0]+b[1],b[1]]
// let d=[c[0],c[0]+c[1],c[1]+c[2],c[2]]
// let e=[d[0],d[0]+d[1],d[1]+d[2],d[2]+d[3],d[3]]
// let newArr=[a,b,c,d,e]
// console.log(newArr);

// function row(n){
//     if(n==0){return [1]}
//   row(n)
// let prev = row(n-1);
// let currentRow = [1, prev[i-1]+prev[i], 1]
// return currentRow;

// }
// console.log(row(4));

// function pT(){
//     for(i=n )
// }

var generate = function(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row);
    }

    return result;
};

console.log(generate(5));

