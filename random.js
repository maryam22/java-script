var x = document.getElementById("diceRollerbutton");
var demo = document.getElementById('demo');

function Myfunction() {
    var randonNumber1 = Math.floor(Math.random() * 7);
    var randonNumber2 = Math.floor(Math.random() * 7);



    if (randonNumber1 == randonNumber2) {

        document.getElementById("placeholder1").innerHTML = randonNumber1;
        document.getElementById("placeholder2").innerHTML = randonNumber2;
        document.body.style.backgroundColor = "rgba(232, 202, 202, 1)";
        //document.getElementById("demo").innerHTML = "You are winner."
        demo.style.visibility = "visible";
        // var target = document.getElementById('demo');
        // var node = document.createElement("P");
        // var textnode = document.("You are winner.");
        // node.appendChild(textnode);
        // document.getElementById('demo').appendChild(node);

        //demo.innerHTML="you are winner."
        // alertify.confirm('Basic: true').set('basic', true); 
        document.getElementById("placeholder1").classList.add("shake");
        document.getElementById("placeholder2").classList.add("shake");
        anime.timeline({ loop: true })
            .add({
                targets: '.ml2 .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70 * i
            }).add({
                targets: '.ml2',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });



    } else {
        document.getElementById("placeholder1").innerHTML = randonNumber1;
        document.getElementById("placeholder2").innerHTML = randonNumber2;
        document.body.style.backgroundColor = "white";
        //document.getElementById("demo").innerHTML = "";
        //demo.style.display ='none';
        demo.style.visibility = "hidden";
        //target.querySelector('p').style = 'display: none;';
        document.getElementById("placeholder1").classList.remove("shake");
        document.getElementById("placeholder2").classList.remove("shake");


    }








}