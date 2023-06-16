let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************



for ( let key = 0; key < 10; key++ ) {
    const randomNumber = Math.floor( Math.random() * 20 );
    arr.push( randomNumber );
}

console.log( arr );
