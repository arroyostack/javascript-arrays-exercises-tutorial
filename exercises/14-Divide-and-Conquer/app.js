let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
const mergeTwoList = (numArr) => {
    let odd = [];
    let even = [];
    
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] % 2 === 0) {
            even.push(numArr[i])
        } else{
            odd.push(numArr[i])
        }
    }
    let helper = [...odd,...even];
    return helper;

}