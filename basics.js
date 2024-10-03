//5-8 features

//feature 1: === and ==
// in addition to == (which compares the value of both), you can also use === which will return true if the type and value of the variables is the same.

//feature 2: special chars in var names
//$ and _ are allowed in var names. numbers are also allowed but it cannot be the first char in variable name so var name1 is allowed, but var 1name is not allowed

//feature 3: ? condition evaluation
//can evaulaute conditions similarly to if else with condition ? ifConditonTrue : ifConditonFalse

//feature 4: ; not required
//unlike java, not every line needs to have a ; to end the line. Although it may help in some cases

//feature 5: Hoisting
//js will 'hoist' functions and vars to the top of your code so that you do not need to code them into the top of your program for them to initialize before calling them
//i.e., you can call functions that before they have been initialized in the code you have written because js will 'hoist' them to the correct place for them to be initialized, similarly to the way one would hoist a flag up to its correct place
//you can do a similar thing with vars, but they will only be initalized and not be declared before you declare them. So if you call a var before you declare or initialize it it will show undefined 
