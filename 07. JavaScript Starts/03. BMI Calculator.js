//BMI Calculator

function bmiCalculator(height, weight){
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}
 var bmi = bmiCalculator(72 , 1.8);
 console.log("Your BMI is " + bmi);