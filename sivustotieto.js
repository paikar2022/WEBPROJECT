//fetch
//this is just testing to see if I get this working
fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(
        data => {
            document.getElementById("printHere").innerHTML 
            //= JSON.stringify(data)
            ="<h2>" + data.answer + "</h2>";
            document.getElementById("printHere").innerHTML 
            //= JSON.stringify(data) use if text?
            +=' <img src= " ' + data.image + ' " /> '; 
    }
    );