let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function ( name ) {
    const output = names.filter( item => item !== name ).map( item => `My name is ${ item }` );
	console.log(output)
    return output;
};

//your code here
prepender('Alice');