// predicate : consequent-expression : alt-expression
    // syntax : ... ? ... : ...
    
// let result = condition ? value1 : value2;


const num = -12;

function check(x) {
    if (x === 0) {
        console.log("value is 0")
    } else {
        console.log(x > 10 ? "value greater than 10" : "value lesser than 10")
    }
}
check(num)
