function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function checkPaused() {
    try {
        var video = document.getElementById("meow")
        if (video.paused == true) {
            video.play();
        }
    } catch(e) {
        console.log("An error occured: " + e)
    }
}

async function noPause() {
    await delay(500)
    checkPaused();
}