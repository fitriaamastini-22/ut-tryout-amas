function factorial(num){
    if(num > 1){
        return num * factorial(num-1);
    }
    else{
        return 1;
    }
}

document.write(factorial(5));
