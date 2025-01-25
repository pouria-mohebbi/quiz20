Execution Flow: Code is executed line by line, in order, blocking the further execution of code until the current line completes.

Blocking: If a synchronous function contains a long-running task, it will block the execution of any subsequent code until that task completes. 


function synchronousFunction() {
    console.log("Start Task 1");
    for (let i = 0; i < 1e9; i++);  
    console.log("Task 1 Complete");
    
    console.log("Start Task 2");
    for (let i = 0; i < 1e9; i++);  
    console.log("Task 2 Complete");
}

synchronousFunction();
