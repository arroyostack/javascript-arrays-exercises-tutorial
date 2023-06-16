let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = null;

// your code here

counts = par.toLowerCase().split('').reduce((acc,curr ) => {
    if(acc[curr]){
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {})

console.log(counts);