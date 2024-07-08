// detecting pressed button
$(document).keydown(function(eve) {
    var validKey = ["w", "a", "s", "d", "j", "k", "l"];
    if (validKey.includes(eve.key)) {
        playSound(eve.key);
        animate(eve.key);
    } else {
        console.log("wrong key");
    }
});

// detecting clicked button
$(".drum").click(function() {
    playSound(this.innerHTML);
    animate(this.innerHTML);
});

// play sound
function playSound(key) {
    var sound = new Audio("sounds/" + key + ".mp3");
    sound.play();
}

// animate
function animate(key) {
    $("." + key).addClass("pressed");
    setTimeout(() => {
        $("." + key).removeClass("pressed");
    }, 100);
}