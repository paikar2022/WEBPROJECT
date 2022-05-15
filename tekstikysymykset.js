// Koodin pohjassa otettu mallia henkiön M.Rekinen TIK22KM/Ryhmä 16 projektityö 2022.

let questionsRight = 0
//answers
let correctAnswer1 = document.getElementById("right1");
let correctAnswer2 = document.getElementById("right2");
let correctAnswer3 = document.getElementById("right3");
let correctAnswer4 = document.getElementById("right4");
let correctAnswer5 = document.getElementById("right5");
let wrongAnswer = document.getElementsByClassName("wrong");
//right or wrong
let result = document.querySelector("#result")
let right = new String("Oikein!").fontcolor("green");
let wrong = new String("Väärin!").fontcolor("red");
//progressbar 
let progress = document.getElementById("progressbar")
//images
let image1 = document.getElementById("kysymys1")
let image2 = document.getElementById("kysymys2")
let image3 = document.getElementById("kysymys3")
let image4 = document.getElementById("kysymys4")
let image5 = document.getElementById("kysymys5")
//check -functions
function question1() {
	//if not answered yet
	document.querySelector("#quesright").className="visible"
	document.querySelector("#progressbar").className="visible"
	//if the right radiobutton was checked
	if (correctAnswer1.checked == true) {
		//increase the 'right answers' with one
		questionsRight++
		//showing "Oikein!"
		result.innerHTML= right
		//hides the previous and gives a new question
		document.getElementById("question1").className="hidden"
		image1.className="visible"
		//gives a new question
		document.getElementById("question2").className="visible"
	} else {
		//showing "Väärin!"
		result.innerHTML = wrong
		//hides the question
		document.getElementById("question1").className="hidden"
		//gives a new question 
		document.getElementById("question2").className="visible"
	}
    //progress
	//questions answered right/questions total amount
    document.getElementById("correctAnswers").innerText = questionsRight  
	//updating progress 
    progress.value = questionsRight
}
function question2(){
	if (correctAnswer2.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question2").className="hidden"
		image2.className="visible"
		document.getElementById("question3").className="visible"
	} else {
		result.innerHTML = wrong
		document.getElementById("question2").className="hidden"
		document.getElementById("question3").className="visible"
	}
    document.getElementById("correctAnswers").innerText = questionsRight 
    progress.value = questionsRight
}
function question3(){
	if (correctAnswer3.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question3").className="hidden"
		image3.className="visible"
		document.getElementById("question4").className="visible"
	} else {
		result.innerHTML = wrong
		document.getElementById("question3").className="hidden"
		document.getElementById("question4").className="visible"
	}
    document.getElementById("correctAnswers").innerText = questionsRight
    progress.value = questionsRight
}
function question4(){
	if (correctAnswer4.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question4").className="hidden"
		image4.className="visible"
		document.getElementById("question5").className="visible"
	} else {
		result.innerHTML = wrong
		document.getElementById("question4").className="hidden"
		document.getElementById("question5").className="visible"
	}
    document.getElementById("correctAnswers").innerText = questionsRight
    progress.value = questionsRight
}
function question5(){
	if (correctAnswer5.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question5").className="hidden"
		image5.className="visible"
		document.getElementById("feedback").innerText = "Pääsit visan loppuun."
		//showing try again -button
	} else {
		result.innerHTML = wrong
		document.getElementById("question5").className="hidden"
		document.getElementById("feedback").innerText = "Pääsit visan loppuun."
		//showing try again -button
	}
    document.getElementById("correctAnswers").innerText = questionsRight
    progress.value = questionsRight

	//try again -button
	document.querySelector("#uudestaan").className=""
	//if all questions right
	if (progress.value == 5) {
		document.querySelector("#vastaukset").className="hidden"
		document.getElementById("feedback").innerText = "Hienoa! Sait kaikki oikein!"
		start()
        stop()
	}
}
function uudestaan(){
	location.reload();
}
function vastaukset(){
	image1.className="visible"
	image2.className="visible"
	image3.className="visible"
	image4.className="visible"
	image5.className="visible"
}
