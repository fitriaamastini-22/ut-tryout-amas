function palindrome(str){
    str = str.replace(/[^a-zA-Z]/g,"");
    str = str.toLowerCase();
    
    let reverse_text = '';
    for(let i=str.length-1; i >= 0; i--){
        reverse_text  += str[i];
    }
    //return str+" -> "+reverse_text;
    if( str === reverse_text){
        return true;
    }
    else{
        return false;
    }
}

document.write(palindrome("Cigar? Toss it in a can. It is so tragic")); // output true
document.write("<br/>");
document.write(palindrome("I did, did I?")); // output true
document.write("<br/>");
document.write(palindrome("Red rum, sir, is murder")); // output true
document.write("<br/>");
document.write(palindrome("Eva, can I see bees in a cave?")); // output true
document.write("<br/>");
document.write(palindrome("Hello World")); // output false