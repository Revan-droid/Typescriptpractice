function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally:" + i);
}
doSomething();
//let keyword is near block scoped 
//var keyword is function scoped 
//Here the tsc will compile even if there i an error in ts code and converts ts file to js file.
//let in ts is changed to var in js.
