// filtering out negative numbers from an array

let num=[-1,2,3,-4,5,6,-7,8,9,-10];
for (let index = 0; index < num.length; index++) {
    if(num[index]<0){
        console.log(num[index]);
    }
}

// second approach using additional array 
let nums=[-1,2,3,-4,5,6,-7,8,9,-10];
let negativeNums=[];
for(let i=0;i<nums.length;i++){ 
    if(nums[i]>0){
        continue;
    }
    negativeNums.push(nums[i]);
}
console.log(negativeNums);