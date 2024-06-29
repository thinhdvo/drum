// detecting button click
var btnNode = $(".drum")
for (let i = 0; i < btnNode.length; i++) {
    btnNode[i].addEventListener("click", btnOnClick)
}

function btnOnClick() {
    var btnOnClick = this.textContent;
    playSound(btnOnClick);
    btnAnimate(btnOnClick);
}
// detecting key press
document.addEventListener("keydown", keyOnPress);

function keyOnPress(event) {
    var key = event.key;
    playSound(key);
    btnAnimate(key);
}

// Add animate
function btnAnimate(key) {
    var activeBtn = $("." + key);
    activeBtn.addClass("pressed");
    setTimeout(function() {
        activeBtn.removeClass("pressed");
    }, 100);
}

function playSound(event) {
    switch (event) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
    }
}