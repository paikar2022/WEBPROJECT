//fetch
//this is just testing to see if I get this working
fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(
        data => {
            document.getElementById("printHere").innerHTML 
            ="<h2>" + "I really think I should study more about REST API? Do you agree? : "+ data.answer + "</h2>";
            document.getElementById("printHere").innerHTML 
            +=' <img src= " ' + data.image + ' " /> '; 
        }
    );