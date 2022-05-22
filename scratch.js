document.addEventListener("keydown", function(e) {

    if (e.code == "KeyA" || e.code == "KeyS" || e.code == "KeyD" || e.code == "KeyF" || e.code == "KeyG" || e.code == "KeyH" || e.code == "KeyJ" || e.code == "KeyW" || e.code == "KeyE" || e.code == "KeyT" || e.code == "KeyY" || e.code == "KeyU") {
        let audio = new Audio(e.code[3] + ".mp3");
        audio.load();
        audio.play();
    }
    else {
        console.log("Warning!!!");
    }
});
