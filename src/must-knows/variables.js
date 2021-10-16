// How to declare variables in JavaScript

//Constants
const name = "Dary"
// name = "Michael" This will throw an error
console.log(name)

//Let
function letExample() {
    let x = 1;
    {
        let x = 2;
        console.log(x)
    }
    console.log(x)
}

//Let
function varExample() {
    var x = 1;
    {
        var x = 2;
        console.log(x)
    }
    console.log(x)
}

varExample()