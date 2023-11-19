/*
1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
3.Write a “person” class to hold all the details.
4.write a class to calculate the uber price. 
*/

// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie{
    constructor(title, studio, rating="PG"){
        this.title = title,
        this.studio = studio,
        this.rating = rating
    }
    getPG(arrMovies){
        let temp = [];
        arrMovies.forEach((obj) => {
            if(obj.rating==="PG"){
                temp.push(obj);
            }
        })
        return temp;
    }
}

let Casino_Royale = new Movie("Casino Royale","Eon Productions","PG13");

console.log(Casino_Royale.getPG(
    [
        new Movie("Eclipse","Hangs Box","PG"),
        new Movie("The Jungle Book","Walt Disney","G"),
        new Movie("Frost Queen","Monster reality","PG"),
        new Movie("The Slave","Tape Studio","R")
    ]
));


// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle{
    constructor(radius, color){
        this.radius = radius,
        this.color = color
    }

    getRadius(){
        return this.radius;
    }

    getColor(){
        return this.color;
    }

    getArea(){
        return Math.PI * this.getRadius() * this.getRadius();
    }
    getCircumference(){
        return 2 * Math.PI * this.getRadius();
    }
}

let vircle = new Circle(3,"Green");
console.log(vircle.getArea());
console.log(vircle.getCircumference());
console.log(vircle.getColor());


// 3.Write a “person” class to hold all the details.

class person{
    constructor(name, age, qualification, height, weight,blood_group){
        this.name = name,
        this.age = age,
        this.qualification = qualification,
        this.height = height,
        this.weight = weight,
        this.blood_group = blood_group
    }
    talk(){
        return `Hi, How are you my name is ${this.name}`
    }
}

let per = new person("Hari","24","B.E- Mechanical","188","79","A1+")
console.log(per.talk())


// 4.write a class to calculate the uber price.

class PriceCalculatorUber{
    constructor(distance,vehicle_type,priority){
        this.distance = distance,
        this.vehicle_type = vehicle_type,
        this.priority = priority
    }
    calculatePrice(){
        let tPrior = this.priority;
        let price = 0;
        if(this.priority > 4 || this.priority < 1){
            tPrior = 20;
        }
        let a = this.distance;
        if(a < 50){
            price += (5 * a);
        }else if(a>=50 && a < 100){
            price += (8 * a);
        }else{
            price += (15 * a);
        }
        if(this.vehicle_type === "sedan"){
            price += 150;
        }else if(this.vehicle_type === "hutchBack"){
            price += 200;
        }else if(this.vehicle_type === "Bike"){
            price += 50;
        }else{
            price += 75;
        }
        price += tPrior * 20;
        return price;
    }
}

let shift = new PriceCalculatorUber(38,"hutchBack",3);
console.log(shift.calculatePrice());

