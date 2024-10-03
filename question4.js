function doAddition(firstNum, secondNum, thirdNum){
    var sum = firstNum + secondNum + thirdNum;
    return sum;
}

console.log(doAddition(2,3,4))
//the output of this is 9 because the function identifies each param as an int and adds them
console.log(doAddition(2)) 
//output is NaN because it is missing the secondNum and thirdNum arguments and therefore is unable to do to the arithmetic expression
console.log(doAddition(2.3,3))
//output is NaN bc it is missing thirdNum argument and therefore it is unable to complete the arithmetic expression
console.log(doAddition("first", 2, "three"))
//output is first2three bc it is concatenating strings together in place of doing an arithmetic expression since the firstNum and secondNum parameters are strings