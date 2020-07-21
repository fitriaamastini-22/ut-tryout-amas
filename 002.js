function oddEven(val) {
   if(val % 2 === 0){
       return 'Genap';
   }
   else{
       return 'Ganjil';
   }
   
}
document.write(oddEven(10)); // output genap
document.write("<br/>");
document.write(oddEven(5)); // output ganjil