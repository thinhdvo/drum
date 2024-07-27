// detecting click button

var buttonNode = document.querySelectorAll(".drum");
for (let i = 0; i < buttonNode.length; i++) {
    buttonNode[i].addEventListener("click", function() {
        playSound(this.textContent);
        animate(this.textContent);
    });
};
// animate
function animate(key) {
    var currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(() => {
        currentKey.classList.remove("pressed");
    }, 100);
}
// playSound
function playSound(key) {
    switch (key) {
        case "w":
            var w = new Audio("sounds/w.mp3");
            w.play();
            break;
        case "a":
            var a = new Audio("sounds/a.mp3");
            a.play();
            break;
        case "d":
            var d = new Audio("sounds/d.mp3");
            d.play();
            break;
        case "j":
            var j = new Audio("sounds/j.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/k.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio("sounds/l.mp3");
            l.play();
            break;
        case "s":
            var s = new Audio("sounds/s.mp3");
            s.play();
            break;
        default:
    }
}
// keypress
document.addEventListener("keydown", function(eve) {
    playSound(eve.key);
    animate(eve.key);
});