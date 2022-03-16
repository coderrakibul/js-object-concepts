const first = {a: 1, b: 2};
const second = {a: 1, b: 2};
const third = first;

// object compare korar jonno first ta third er vetor rekhe comapre kora hoice
if(first === third){
    // console.log("objects are equal");
}
else{
    // console.log("they are differenet");
}



// object ke age string a convert kora hoice then compare kora hoice
if(JSON.stringify(first) === JSON.stringify(second)){
    // console.log("objects are equal");
}
else{
    // console.log("they are differenet");
}

// string kore compare korle kicu jhamela hoy jemon value and property akoi thakleo position ulta palta thakle false dakhabe

const first2 = {a: 1, b: 2,};
const second2 = {b: 2, a: 1};
if(JSON.stringify(first2) === JSON.stringify(second2)){
    // console.log("objects are equal");
}
else{
    // console.log("they are differenet");
}



//advance way to compare an object
const first3 = {a: 1, b: 2};
const second3 = {b: 2, a: 1};
function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first3, second3);
console.log(isEqual);