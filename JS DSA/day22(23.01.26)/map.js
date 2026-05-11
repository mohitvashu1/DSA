let map = new Map();

// map.set("name" ,"mohit");
// map.set("age" ,"23");
// map.set("isEmployed",true);
// map.set("Contact","Mohitchoubey.live")
// map.set("name", "Vashu")

map.set("Mohit",4)
map.set("shivam",3)
map.set("amit",6)
map.set("rahul",4)
map.set("Sakshi",2)
map.set("Aarohi",4)
map.set("Ayushi",9)

console.log(map.size);

for(let [key,value]of map){
    console.log(key+" is at "+value);
}

for(let key of map.values()){
    console.log(key);
}