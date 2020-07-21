function max(arr_num) {
    let max = arr_num.reduce(function(a, b) {
        return Math.max(a, b);
    });
    
    return max;
}

function min(arr_num) {
    let min = arr_num.reduce(function(a, b) {
        return Math.min(a, b);
    });
    
    return min;
}

function average(arr_num) {
    total = arr_num.length;
    sum   = arr_num.reduce((acc, val) => acc + val);
    return sum/total;
}
function randNum(){
    arr = [];
    for(let i =0; i < 100; i++){
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}


let deretAngka = randNum();
document.write(deretAngka);
document.write("<br/>");
document.write(max(deretAngka));
document.write("<br/>");
document.write(min(deretAngka));
document.write("<br/>");
document.write(average(deretAngka));