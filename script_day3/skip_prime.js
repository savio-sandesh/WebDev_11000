// program to print from 1-50 but skip prime numbers

for(let i=1;i<=10;i++){
    let isPrime=true
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime=false;
                break;
            }
        }
    if(isPrime){
        continue;
    }
    else{
        console.log(i);
    }
}