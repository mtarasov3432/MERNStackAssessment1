//.call, .apply, and .bind are all used to change the context win which a given function executes. Similarly to the way you might change the context of a java object by changing the object properties

//.call:
//.call allows you to set the scope/context/execution context of a function, immediately execute, and return the result. 
//So, by calling functionName1.call(object1), you are making the scope, and all the variables entailed in that scope, available to the function titiled functionName1
//Can also pass arguments to the function by passing arguments after the object you pass e.g., funcitonName,call(object1, parameter1, parameter2)
//By default, the context of the funciton will be the global varaibles

//.apply:
//.apply does the same thing as .call but accepts an array as the parameter arg and reads it in element by element into the required function parameters
//e.g., functionName1.apply(object1, array1) will set the context of functionName1 to object1 and then pass the elements of array1 as parameters to function1

//.bind
//Sets the context for a funciton similarly to .call and .apply but does not necessarily execute immediately. Instead it binds the contexts to the function so that the context can be used when needed, like after a time delay.