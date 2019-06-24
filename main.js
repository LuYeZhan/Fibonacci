'use strict';

var limit = 30;
var a = 0;
var b = 1;
console.log(a);

while (a<= limit){
 var temp = a+b;
  console.log(a); 
  a = b;
  b = temp;
 
}

for (a=0 ; a<=limit; ){
  console.log(a)
  var temp = a+b ;
  a = b;
  b = temp;
}