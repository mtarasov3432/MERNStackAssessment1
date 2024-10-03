//closure
function employeeDetails(userId, name, role, salary){
    var userId = userId
    var name = name
    var role = role
    var salary = salary
    var password = "myPassword"
    var getEmployeeDetails = function(enteredPassword){
        if(password == enteredPassword){
            return{
                userId,
                password,
                role,
                salary
            }
        }else{
            return "Incorrect Login Info"
        }
    }
    return getEmployeeDetails;
}
var empObj = new employeeDetails(1, "Mark", "Programmer", 20000000)
console.log(empObj("myPassword"))
console.log(empObj("incorrectPassword"))
//hoisting
printStuff(1,2,3)

function printStuff(firstParam, secondParam, thirdParam){
    console.log("first: ", firstParam, " second: ", secondParam, " third: ",thirdParam)
}

console.log(testVar)

var testVar = "My Test Var"

//constructor function
function empDetails(userId, name, role, email) {
    this.userId = userId
    this.name = name
    this.role = role
    this.email = email

    this.getEmpDetails = function () {
        console.log("Employee Details: ", this.userId,", ", this.name,", ", this.role,", ", this.email)
    }
}

var empObj = new empDetails(1 ,"Mark", "Programmer", "mtarasov@gmail.com")
empObj.getEmpDetails()