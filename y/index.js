function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function checkPaused() {
    var video = document.getElementById("meow")
    if (video.paused == true) {
        video.play();
    } else {
        noPause();
    }
}

noPause();
async function noPause() {
    await delay(500)
    checkPaused();
}