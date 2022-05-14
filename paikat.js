function vaseBlock() {
    document.getElementById("exploreButton1").style.display = "none";
    document.getElementById("vaseblock").style.display = "block";
    document.getElementById("exploreButton2").style.display = "block";
}
function nijonBlock() {
    document.getElementById("vaseblock").style.display = "none";
    document.getElementById("exploreButton2").style.display = "none";
    document.getElementById("nijonblock").style.display = "block";
    document.getElementById("exploreButton3").style.display = "block";
}
function kukulcanBlock() {
    document.getElementById("nijonblock").style.display = "none";
    document.getElementById("exploreButton3").style.display = "none";
    document.getElementById("kukulcanblock").style.display = "block";
    document.getElementById("exploreButton4").style.display = "block";
}
function valtionhotelliBlock() {
    document.getElementById("kukulcanblock").style.display = "none";
    document.getElementById("exploreButton4").style.display = "none";
    document.getElementById("valtionhotelliblock").style.display = "block";
    document.getElementById("exploreAgain").style.display = "block";
}
function again(){
    document.getElementById("exploreButton1").style.display = "none";
    document.getElementById("exploreAgain").style.display = "none";
    document.getElementById("vaseblock").style.display = "block";
    document.getElementById("exploreButton2").style.display = "block";
}