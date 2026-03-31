let car = {
    name:'toyota',
    brand:"suzuki",
    "full name":"Akshay",
    speed:189,
    start:() => {
        console.log('this car will be start after 5 second');
    },
    stop:function(){
        console.log("this car is stopped now");
    }
}


car['full name']

let test = 'full name'

console.log(car[test]);

// console.log(car);
// console.log(car.brand);