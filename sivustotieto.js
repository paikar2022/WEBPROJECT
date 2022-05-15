//fetch
//this is just testing to see if I get this working

fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(
        data => {
            document.getElementById("printHere").innerHTML 
            ="<h2>" + "Should I study more about REST API? Answer is: "+ data.answer + "</h2>";
            document.getElementById("printHere").innerHTML 
            +=' <img src= " ' + data.image + ' " /> '; 
        }
    );