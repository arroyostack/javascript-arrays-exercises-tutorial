let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
const deletePerson = (person) => people.filter(item => item !== person);

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
