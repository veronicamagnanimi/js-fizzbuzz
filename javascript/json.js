//ciclo
for (let i = 1; i <= 100; i++) {


// se divisibile per 3   
    if (i % 3 === 0) {
        console.log("Fizz");
    } 

// se divisibile per 5  
    else if (i % 5 === 0) {
        console.log("Buzz");
    }

// se divisibile per entrambi
    else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    }

// in tutti gli altri casi
    else {
       console.log(i);
    }
}