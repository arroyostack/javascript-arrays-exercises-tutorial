let mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

//your code here
const printAllTypes = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(typeof arr[i])
    };
    console.log(newArr);
    return newArr;
}

printAllTypes(mix)