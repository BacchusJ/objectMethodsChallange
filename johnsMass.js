var mark = {
    fullName: 'Mark Miller',
    height: 1.89,
    weight: 97.1,
    calcMass: function() {
       this.bmi = this.weight / (this.height * this.height);
       return this.bmi;
    }

}
mark.calcMass();
console.log(mark);


var john = {
    fullName: 'John Smith',
    height: 177,
    weight: 90.71,
    calcMass: function() {
        this.bmi=this.weight / (this.height * this.height);
        return this.bmi;
    }
}
john.calcMass();
console.log(john);


if (mark.bmi > john.bmi) {
    console.log (mark.fullName + ' \'s BMI of ' + mark.bmi  + ' is higher than John\'s there for, he wins! ');

} else {
    console.log(john.fullName + ' \'s BMI of ' + john.bmi + 'is higher than John\'s there for, he wins! ');
}