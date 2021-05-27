var x = document.getElementById("diceRollerbutton");
var demo = document.getElementById('demo');

function Myfunction(){
    var randonNumber1 = Math.floor(Math.random() * 7); 
    var randonNumber2 = Math.floor(Math.random() * 7); 

 
 
        if(randonNumber1 == randonNumber2 ){

            document.getElementById("placeholder1").innerHTML = randonNumber1;
            document.getElementById("placeholder2").innerHTML = randonNumber2;
           // document.getElementById("demo").innerHTML = "You are winner."
            // var target = document.getElementById('demo');
            // var node = document.createElement("P");
            // var textnode = document.("You are winner.");
            // node.appendChild(textnode);
            // document.getElementById('demo').appendChild(node);
            demo.innerHTML="you are winner."
           // alertify.confirm('Basic: true').set('basic', true); 
           document.getElementById("placeholder1").classList.add("shake");
           document.getElementById("placeholder2").classList.add("shake");
           
           
          
           } else
           {
            document.getElementById("placeholder1").innerHTML = randonNumber1;
            document.getElementById("placeholder2").innerHTML = randonNumber2;
            //document.getElementById("demo").innerHTML = "";
            // var target = document.getElementById('demo');
            // target.querySelector('p').style = 'display: none;';
            document.getElementById("placeholder1").classList.remove("shake");
           document.getElementById("placeholder2").classList.remove("shake");
            
           }
    
           






}