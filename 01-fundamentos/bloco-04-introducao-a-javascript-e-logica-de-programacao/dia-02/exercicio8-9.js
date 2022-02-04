let num = [];

for (let i = 0; i <=25; i++) {
   num.push(i);
}

console.log(num);

let divisao= 0;

for (index=0; index < num.length; index+=1) {
    divisao = num[index]/2;
    console.log(divisao);
}