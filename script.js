const student = {
    name:"Erik",
    birthYear: 1990,
    major: "Computer Science",
    likes: ["ice cream", "pizza", "chips"],
    hasDriverLicense: true,
    
    calcAge: function(){
      return 2023 - this.birthYear;
    },
    licenseVer: function(){
      if(this.hasDriverLicense == true){
        return `and he has a driver's license`
      }
      else{
        return `and he does NOT have a driver's license`
      }
    },
    getSummary: function(){
      return `${this.name} is a ${this.calcAge()} year old student who is majoring in ${this.major} ${this.licenseVer()}`
    }
  }
  
  console.log(student.getSummary())


const markMiller = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        let bmi;
        bmi = this.mass / (this.height**2)
        return bmi
    }

}

const johnSmith = {
    name: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        let bmi;
        bmi = this.mass / (this.height * this.height)
        return bmi
    }
}

function higherBmi(){
    const markBmi = markMiller.calcBMI();
    const johnBmi = johnSmith.calcBMI();
    
    if(markBmi > johnBmi){
        return `${markMiller["name"]}'s BMI (${markBmi}) is higher than John's (${johnBmi})`
    }
    else if(johnBmi > markBmi){
        return `${johnSmith['name']}'s BMI (${johnBmi}) is higher than Mark's (${markBmi})`
    }
    else{
        return `Both ${markMiller["name"]} and ${johnSmith['name']} have the same BMI coincidentally!`
    }
}
console.log(higherBmi());


const erik = ["Erik", "Luna", 2023 - 1990, 'swe', ['Bryan', "Dan", "Brice"], true];
const newArr = [];
for(let i = 0; i < erik.length; i++){
  if(typeof(erik[i]) == "object"){
    newArr[i] = erik[i][2]
  }
  else{
    newArr[i] = erik[i]
  }
}
console.log(newArr)


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for(let i = 0; i < bills.length; i++){
    if(bills[i] >= 50 && bills[i] <= 300){
        tips.push(bills[i] * .15);
        totals.push(bills[i] * .15 + (bills[i]))

    }
    else{
        tips.push(bills[i] * .20)
        totals.push(bills[i] * .20 + (bills[i]))
    }
}


const calcTipAvg = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;
}

console.log("The average tip for all bills are: " + "$"+calcTipAvg(tips))
console.log("The average bill for all the bills are: " + "$"+calcTipAvg(totals))