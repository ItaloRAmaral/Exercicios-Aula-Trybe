let aliquotINSS; 
let aliquotIR; 

let grossSalary = 3000.00;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary*0.08;
} else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary*0.09;
} else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary*0.11;
} else {
    aliquotINSS = grossSalary - 570,88;
};

let base = grossSalary - aliquotINSS



if (base <= 1903.98){
    aliquotIR = 0;
}   else if (base <= 2826.65) {
    aliquotIR = (base * 0.075) - 142.80;
} else if (base <= 3751.05) {
    aliquotIR = (base * 0.15) - 354.80;
} else if (base <= 4664.68) {
    aliquotIR = (base * 0.225) - 636.13;
} else {
    aliquotIR = (base * 0.275) - 869.36;
};

let liquidSalary = base - aliquotIR;

console.log (liquidSalary);