// basic math functions abstracted
function abs(x) {
    return x > 0 
        ? x 
        : x === 0
        ? 0
        : -x;
}
function average(x, y) {
    return (x + y) / 2;
}
function square(x) {
    return x * x;
}

// sqrt function
function sqrt(x) {

    function is_good_enough(guess, x) {
        return abs(square(guess) - x) < 0.001;
    }
    function improve(guess, x) {
        return average(guess, x / guess);
    }

    function sqrt_iter(guess, x) {
        return is_good_enough(guess, x) 
                ? guess 
                : sqrt_iter(improve(guess, x), x)
    }


    return sqrt_iter(1, x);
}


// input (x, y)
let x = 144;
let y = sqrt(x);

// output 
console.log("√" + x + " = " + y);







/*
how does one compute square-roots ??

    √x = y , such that y>=0 and y^2=x

newton method of successive approximations
    guess y ? for the value of the sq_root of a num x

    (hint: simple manipulation for better guess, by averaging y with x/y)

sq_root of 2 (x); suppose our initial guess(y) it 1
    guess(y)    quotient(x/y)       average
    1           2/1 = 2             (2+1)/2 = 1.5
    1.5         2/1.5 = 1.3333      (1.3333 + 1.5)/2 = 1.4167
    1.4167      ....    

*/
