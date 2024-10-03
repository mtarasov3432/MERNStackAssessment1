var Student = {
    name : "Mark",
    age : 25,
    grade : "Senior",
    standing : "Good-Standing",
    getStudentDetails : function () {
        setTimeout(function(){
            console.log(`
                ${this.name} 
                ${this.age}
                ${this.grade}
                ${this.standing}
            `)
        }.bind(Student), 1000);
    }
}

Student.getStudentDetails();

