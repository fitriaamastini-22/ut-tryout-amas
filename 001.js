function grade(val) {
   if(val >= 90){
       return 'A';
   }
   else if(val >= 80 && val <= 89){
       return 'B';
   }
   else if(val >= 70 && val <= 79){
       return 'C';
   }
   else if(val >= 60 && val <= 69){
       return 'D';
   }
   else if(val <= 59){
       return 'E';
   }
   
}
document.write(grade(10)); // output E
document.write("<br/>");
document.write(grade(80)); // output B
document.write("<br/>");
document.write(grade(90)); // output A