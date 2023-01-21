const map = new Map();

// Set Property in object (First one is key, and other one is value)

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4);

// Set Property of object by key (First one is key, and other one is new value)

map.set('a', 42);

// Get Property of object by key

const get = map.get('a');

// Delete Property of object by key
const del = map.delete('c');

// Size of map by

console.log("Length ===>", map.size)

// Checking that the property has exist or not,

// If this key has exist in object return "true"
var checking = map.has('a'); // True

// If this key has not exist in object return "false"
var checking = map.has('f'); // False

console.log(checking)

// Console

console.log(map);

// Perfect used example of new Map()

// var mapObj = new Map();

// mapObj.set('std-1', { name: 'arsalan', phone: '0336-349-1934', email: 'arsalan.sohail1934@gmail.com' })

// var nested = new Map();

// mapObj.set('std-2', nested.set('name', 'owais'));
// mapObj.set('std-2', nested.set('phone', '0317-2603998'))
// mapObj.set('std-2', nested.set('email', 'mowaissohail4@gmail.com'))

// console.log(mapObj.get('std-2'));