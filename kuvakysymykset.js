// the feedback- sentences
const OIKEA1 = "Oikea vastaus, hyvä! Ranskan kuningas Ludvig XIV muistetaan myös nimellä Aurinkokuningas.";
const OIKEA2 = "Oikea vastaus, hyvä! Marie Curie oli Nobel-palkittu fyysikko.";
const OIKEA3 = "Oikea vastaus, hyvä! Abraham Lincoln oli Yhdysvaltain tunnetuimpia presidenttejä.";
const OIKEA4 = "Oikea vastaus, hyvä! Earhart oli ilmailun uranuurtaja, joka teki useita pitkiä lentoja ensimmäisenä maailmassa. ";
const OIKEA5 = "Oikea vastaus, hyvä! Mandela oli Nobel-palkittu eteläafrikkalainen poliitikko ja presidentti. ";
const VÄÄRÄ = "Väärä vastaus, harmi! Kokeile uudelleen.";


// answers right or wrong
let right1 = document.getElementById("right1");
let right2 = document.getElementById("right2");
let right3 = document.getElementById("right3");
let right4 = document.getElementById("right4");
let right5 = document.getElementById("right5");

//printing elements for the feedback
let feedback1 = document.getElementById("feedback1");
let feedback2 = document.getElementById("feedback2");
let feedback3 = document.getElementById("feedback3");
let feedback4 = document.getElementById("feedback4");
let feedback5 = document.getElementById("feedback5");

let progressBar = document.getElementById("progressBar");
let progressLabel = document.getElementById("progressLabel");
let rightAnswers = 0;


//starting button actions
function start() {
    feedback1.textContent = "";
    document.getElementById("ludvig").style.display = "block";
    document.getElementById("header").style.display = "none";
    document.getElementById("aloitusnappi").style.display = "none";
    document.getElementById("seuraava2").style.display = "none";  
    progressBar.style.display = "block"; 
    progressLabel.style.display = "block"; 
}

//question 1 actions
function v1(){
    feedback1.textContent = ""; //to empty the previous feedback
    //if the correct answer is checked, give congratulations and next-button, 
    //hide the check-button and grow the progress-bar & informed progress amount
    if (right1.checked == true){feedback1.textContent = OIKEA1;
        document.getElementById("seuraava2").style.display = "block";
        document.getElementById("tarkista1").style.display = "none";
        //progressbar-actions
        rightAnswers ++;
        document.getElementById("answersOk").innerText = rightAnswers;  
        progressBar.value = rightAnswers;
    }
    //if wrong answer or no answer is checked, give sorry feedback
    else {feedback1.textContent = VÄÄRÄ;}

    document.getElementById("seuraava2").onclick = function(){
        document.getElementById("ludvig").style.display ="none";
        document.getElementById("marie").style.display ="block";
        document.getElementById("seuraava3").style.display = "none";
    };
}
//question 2 actions
function v2(){
    feedback2.textContent = ""; //to empty the previous feedback
    if (right2.checked == true){feedback2.textContent = OIKEA2;
        document.getElementById("seuraava3").style.display = "block";
        document.getElementById("tarkista2").style.display = "none";
        //progressbar-actions
        rightAnswers ++;
        document.getElementById("answersOk").innerText = rightAnswers;  
        progressBar.value = rightAnswers;

    }
    else {feedback2.textContent = VÄÄRÄ;}

    document.getElementById("seuraava3").onclick = function(){
        document.getElementById("marie").style.display ="none";
        document.getElementById("abraham").style.display ="block";
        document.getElementById("seuraava4").style.display = "none";
    };
}
//question 3 actions
function v3(){
    feedback3.textContent = ""; //to empty the previous feedback
    if (right3.checked == true){feedback3.textContent = OIKEA3;
        document.getElementById("seuraava4").style.display = "block";
        document.getElementById("tarkista3").style.display = "none";
        //progressbar-actions
        rightAnswers ++;
        document.getElementById("answersOk").innerText = rightAnswers;  
        progressBar.value = rightAnswers;
    }
    else {feedback3.textContent = VÄÄRÄ;}

    document.getElementById("seuraava4").onclick = function(){
        document.getElementById("abraham").style.display ="none";
        document.getElementById("amelia").style.display ="block";
        document.getElementById("seuraava5").style.display = "none";
    };
} 
//question 4 actions
function v4(){
    feedback4.textContent = ""; //to empty the previous feedback
    if (right4.checked == true){feedback4.textContent = OIKEA4;
        document.getElementById("seuraava5").style.display = "block";
        document.getElementById("tarkista4").style.display = "none";
        //progressbar-actions
        rightAnswers ++;
        document.getElementById("answersOk").innerText = rightAnswers;  
        progressBar.value = rightAnswers;
    }
    else {feedback4.textContent = VÄÄRÄ;}

    document.getElementById("seuraava5").onclick = function(){
    document.getElementById("amelia").style.display ="none";
    document.getElementById("nelson").style.display ="block";
    document.getElementById("tulos").style.display = "none";
    };
}
//question 5 actions
function v5(){
    feedback5.textContent = ""; //to empty the previous feedback
    if (right5.checked == true){feedback5.textContent = OIKEA5;
        document.getElementById("tarkista5").style.display = "none";
        document.getElementById("tulos").style.display = "block";
        //progressbar-actions
        rightAnswers ++;
        document.getElementById("answersOk").innerText = rightAnswers;  
        progressBar.value = rightAnswers;
    }
    else {feedback5.textContent = VÄÄRÄ;}

    document.getElementById("tulos").onclick = function(){
        document.getElementById("nelson").style.display ="none";
        document.getElementById("prize").style.display ="block";
        progressBar.style.display = "none"; 
        progressLabel.style.display = "none";
    };   

    document.getElementById("uudestaan").onclick = function(){
        feedback1.textContent = "";   
        location.reload(); //w3schools: reload the page
        };
}
    document.getElementById("aloitusnappi").onmouseover = function() {
        aloitusnappi.style.width = "115px";
        aloitusnappi.style.height = "55px";
    }
    document.getElementById("aloitusnappi").onmouseleave = function() {
        aloitusnappi.style.width = "100px";
        aloitusnappi.style.height = "50px";
    }