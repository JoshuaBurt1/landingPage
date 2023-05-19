function changeImage7() {
    var image = document.getElementById('myImage7');
    if (image.src.match("assets/7/bioIndex1.png")) {
        image.src = "assets/7/bioIndex2.png";
    }
    else if (image.src.match("assets/7/bioIndex2.png")){
        image.src = "assets/7/bioIndex3.png";
    }
    else if (image.src.match("assets/7/bioIndex3.png")){
        image.src = "assets/7/bioIndex4.png";
    }
    else if (image.src.match("assets/7/bioIndex4.png")){
        image.src = "assets/7/bioIndex5.png";
    }
    else if (image.src.match("assets/7/bioIndex5.png")){
        image.src = "assets/7/bioIndex1.png";
    }
}
function changeImage6() {
    var image = document.getElementById('myImage6');
    if (image.src.match("assets/6/arduino1.png")) {
        image.src = "assets/6/arduino2.png";
    }
    else if (image.src.match("assets/6/arduino2.png")){
        image.src = "assets/6/arduino1.png";
    }
}
function changeImage5() {
    var image = document.getElementById('myImage5');
    if (image.src.match("assets/5/medRemind1.png")) {
        image.src = "assets/5/medRemind2.png";
    }
    else if (image.src.match("assets/5/medRemind2.png")){
        image.src = "assets/5/medRemind1.png";
    }
}
function changeImage4() {
    var image = document.getElementById('myImage4');
    if (image.src.match("assets/4/automatedReports1.png")) {
        image.src = "assets/4/automatedReports2.png";
    }
    else if (image.src.match("assets/4/automatedReports2.png")){
        image.src = "assets/4/automatedReports3.png";
    }
    else if (image.src.match("assets/4/automatedReports3.png")){
        image.src = "assets/4/automatedReports1.png";
    }
}