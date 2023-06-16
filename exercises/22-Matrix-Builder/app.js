// Code goes here

const matrixBuilder = ( int ) => {
    let matrix = [];
    for ( let i = 0; i < int; i++ ) {
        matrix[ i ] = [];
        for ( let j = 0; j < int; j++ ) {
            matrix[ i ][ j ] = Math.floor(Math.random() * 2);
        }
    }

    return [ matrix ];
};

// do not change anything from this line down
console.log(matrixBuilder(5))