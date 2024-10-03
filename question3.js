function showUserInfo(firstname, lastname, age){
    this.firstname=firstname,
    this.lastname=lastname,
    this.age=age;
    this.printUserInfo = function () {
        console.log("firstname: ",this.firstname," lastname: ",this.lastname," age: ",this.age);
    }
}

var userObj = new showUserInfo("mark", "tarasov", 25)
userObj.printUserInfo()