

//ciclo

for (let i = 1; i <= 100; i++) {

    // se divisibile per entrambi
     if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

// se divisibile per 3   
     else if (i % 3 === 0) {
        console.log("Fizz");
    } 

// se divisibile per 5  
    else if (i % 5 === 0) {
        console.log("Buzz");
    }



// in tutti gli altri casi
    else {
       console.log(i);
    }
    
   

}