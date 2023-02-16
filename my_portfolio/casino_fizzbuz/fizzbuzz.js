/* FIZZBUZZ
/* 1. Count from 1 to 100
/* 2. If it's a multiple of 3, say fizz
/* 3. If it's a multiple of 5, say buzz
/* 4. If it's a multiple of 3 and 5, say fizzbuzz
/* 5. If it's NOT a multiple of 3 or 5, say the number

-declare a counter variable
-loop 100 times, incrementing i each iteration
    -is i a multiple of 3 and 5?
        console.log(fizzbuzz);
    -else if is i a multiple of 3 ?
        -console.log(fizz); 
    -else if is i a multiple of 5?
        -console.log(buzz);
    -else?
        console.log(i);

*/
var min =parseInt(prompt("Enter a min number for fizzbuzz"));
var max = parseInt(prompt("Enter a max number for fizzbuzz."));

for (var i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("fizzbuzz");
    }
    else if (i % 3 === 0){
        console.log ("fizz");
    }
    else if (i % 5 === 0){
        console.log ("buzz");
    }
    else {
        console.log (i);
    }
}