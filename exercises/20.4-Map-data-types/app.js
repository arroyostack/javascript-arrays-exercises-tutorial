let arrayOfStrings = [ '1', '5', '45', '34', '343', '34', 6556, 323 ];

let newArray = arrayOfStrings.map( item => {
    return typeof item;
} );

console.log( newArray );