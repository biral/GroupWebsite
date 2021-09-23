var myIndex = 0;
var count= document.getElementById('demo').value;
function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
function validate(){ alert ("Thankyou for your efforts");}
function demo(count){
	count+=1;
      document.getElementById("result").innerHTML = count;
document.getElementById('demo').addEventListener('current', demo);}

function search() {
    var x = document.getElementsByClassName("mySearch");
    
}

