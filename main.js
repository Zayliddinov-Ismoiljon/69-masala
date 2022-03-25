// Masala: a va b massiv bor ularni qiymatlari ichidan tenglarini oluvchi dastur tuzing

let a=[12,3,4,5,6,7,8,9,10];
let b=[12,0,9,45,3,6];
const c=[];

for(i=0; i<a.length; i++){
    for(j=0; j<b.length; j++){
        if(a[i]==b[j]){
            c.push(a[i]);
        }
    }
}

console.log(c);
