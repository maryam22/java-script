// document.getElementById("btn").onclick = function(){
//    document.getElementById("fname").innerHTML = "hello"
//   //return Math.floor((Math.random() * 10) + 1);

// }

//var x = document.getElementById("btn");
function myFunction(){

var x = document.getElementById("myNumber");
var randonNumn = Math.floor(Math.random() * 2); 
 if (x != isNaN){
 
    if(x.value == randonNumn){
        document.getElementById("demo").innerHTML = "Yes they are equal"
      
       } else
       {
        document.getElementById("demo").innerHTML ="No they are not equal"
       }       
 }


};

