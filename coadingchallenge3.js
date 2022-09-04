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
