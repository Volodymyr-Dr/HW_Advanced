

document.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const boxes = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    removeClassPlaying()
    audio.currertTime = 0;
    audio.play()
    boxes.classList.add("playing");
});

const boxes = document.getElementsByClassName("box")
    Array.from(boxes).forEach((el) => {
        el.addEventListener("click", e => {
            if(el.getAttribute("id") === e.target.getAttribute("id")) {
                removeClassPlaying()
                el.currertTime = 0;
                el.querySelector("audio").play();
                el.classList.add("playing");
        }
    })
})

function removeClassPlaying() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((el) => {
        el.classList.remove("playing")
    })
}

