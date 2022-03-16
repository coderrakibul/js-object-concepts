// object er property ke bola hoy key abong tar man ke bola hoy value... ar key thakle tar value thake bole ader boalr key value pair

const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isCleaned: true};
// getting all property name
const keys = Object.keys(bottle);
console.log(keys);

// getting the property value
const values = Object.values(bottle);
console.log(values);

// get property and value
// this is called two dimension array
const pairs = Object.entries(bottle);
console.log(pairs);

// jodi seal kore dei tahole delete kora jabe na ba notun jog o kora jabe na but propertyr man change kora jabe
Object.seal(bottle);
bottle.price = 100;

// freeze kore dile kono kicu add kora jabe na delete kora jabe na and propertyr man o change kora jabe na
Object.freeze(bottle);

// delete a property from an object
delete bottle.isCleaned;
console.log(bottle);