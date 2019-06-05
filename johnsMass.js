var mark = {
    fullName: 'Mark Miller',
    height: 1.89,
    weight: 97.1,
    //adding a function to our object 
    //the BMI is object's weight devided by their height multiplied by 2
    calcMass: function() {
       this.bmi = this.weight / (this.height * this.height);
       return this.bmi;
    }

}




var john = {
    fullName: 'John Smith',
    height: 1.77,
    weight: 90.71,
    calcMass: function() {
        this.bmi=this.weight / (this.height * this.height);
        return this.bmi;
    }
}


//using our functions for the if and else if statements
if (john.calcMass() > mark.calcMass()) {
    console.log (mark.fullName + ' \'s BMI of ' + mark.bmi  + ' is higher than John\'s there for, he wins! ');

} else if (john.calcMass() > mark.calcMass()) {
    console.log (john.fullName + ' \'s BMI of ' + john.bmi  + ' is higher than John\'s there for, he wins! ');
}
//in case of a tide
else {
    console.log('They are both the same');
}