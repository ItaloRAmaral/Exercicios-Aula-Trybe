const a = 100;
const b = 79;
const c = 1;

if ((a+b+c) == 180){
    console.log("true");
} else if ((a+b+c)> 180 || (a+b+c) < 180 && (a+b+c)>0){
    console.log("false");
} else if ((a+b+c) < 0){
    console.log("ErrOr");
}
