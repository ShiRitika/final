
/* compare whose BMI is higher between mark & john using their mass and height,
  using object method including this object */

let MarkObject = {
    Name : "Mark",
    title : "Doe",
    mass : 78 ,
    height : 1.69,
    calcBMI : function(){
        markBMI =   this.mass / (this.height ** 2);
        return markBMI;
    }
};



let JohnObject = {
    Name : "john",
    title : "jess",
    mass : 92,
    height : 1.95 ,
    calcBMI : function(){
        johnBMI =   this.mass / (this.height ** 2);
        return johnBMI;
    }
};

let markBMI;
markBMI = MarkObject.calcBMI();
let johnBMI;
johnBMI = JohnObject.calcBMI();
console.log( markBMI, johnBMI);
if(markBMI > johnBMI){
    console.log("Mark BMI " + markBMI +" is higher then John BMI "+ johnBMI + ".");
} else{
    console.log("John BMI "+ johnBMI+" is higher then Mark BMI"+ markBMI+" .");
}

//Finding second largest element in Array

let a = [47, 35, 87 , 9 , 35];
let largest = 0;
for( let i = 0 ; i <= a.length ; i++){
    if( a[i] > largest ){
        largest = a[i];
    }
}
console.log(largest);// print largest element
let secondLargest = 0;
for( let i = 0 ; i <= a.length ; i++){
    if( a[i] > secondLargest && a[i] != largest ){
        secondLargest = a[i];
        console.log(`${secondLargest} is second largest element in Array`);// print second largest element
    }
}

//find the number is prime.

let b = 5;
if(b > 1){
    for(let i = 2 ; i <= b ; i++){
        if(b % i == 0){
            console.log(` ${b} is not a Prime Number. `);
        } else{
            console.log(`${b} is a Prime Number`);
        }
        break;
    }
}

//Find Fibnocci series
let fib = 10;
let n1 = 0;
let n2 = 1;
let x;
for(let i = 1 ; i < fib ; i++){
    x = n1 + n2;
    n1 = n2;
    n2 = x;
    console.log(n1);
}

//find frequency of character in string
let str = "Banana";
let object = {};
for(let i = 0 ; i < str.length ; i++){
    if(object[str[i]] == undefined)
    {
        object[str[i]] = 1;
    } else {
        object[str[i]] = object[str[i]] + 1;
    }
}
console.log(object);


let strr = "AAAAAaaaaaaaa";
let Array = [];
for(let i = 0 ; i < strr.length ; i++){
    if(Array[strr[i]] == undefined)
    {
        Array[strr[i]] = 1;
    } else {
        Array[strr[i]] = Array[strr[i]] + 1;
    }
}
console.log(Array);
