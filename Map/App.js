//  Map


const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set(06, "Ankara");
map1.set(35, "İzmir");

console.log(map1.get("a"))
console.log(map1.get("b"))
console.log(map1.get("c"))
console.log(map1.get(6))
console.log(map1.get(35))
console.log(map1.delete("a"))
console.log(map1.has("b"))
console.log(map1.size)

console.log("\n")
for(let [key,value] of map1){
    console.log(key, value,);
}

console.log("\n")

const keys = Array.from(map1.keys());

keys.forEach(key => console.log(key, map1.get(key)));

console.log("\n")

for(values of map1.values()){
    console.log(values)
}


const array = [
    [34, "İstanbul"],
    [06, "Ankara"],
    [07, "Antalya"]
]
console.log("\n")

let arrayMap = new Map(array);

console.log(arrayMap);