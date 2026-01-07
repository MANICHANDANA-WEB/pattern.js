let n = 5;
let pattern = "";

for(let i = n; i >=1; i--){

    for (let j = 0; j<n - i; j++){
        pattern += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++){
        pattern +="*";
    }
    pattern +="\n";
}
console.log(pattern)