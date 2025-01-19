for (let i = 0; i < 5; i++) {
    console.log(i);
}
// set of instructions to be executed multiple times
// we use loops to avoid writing same code multiple times

for (let i = 5; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(String.fromCharCode(97 + i));
}

for(let i=1;i<=4;i++){
    if(i==3){
        continue;
    console.log(i);
    }
}