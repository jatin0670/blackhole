let btn1 = document.querySelector("#btn-1");
let vid = document.querySelector("#bg-video");
let txt = document.querySelector("#text");

const audio1 = new Audio('./music.mp3');

btn1.addEventListener("click", () => {
    audio1.currentTime = 0;
    vid.currentTime = 0;
    audio1.loop = true;
    audio1.play();
    vid.style.zIndex = 1;
    txt.style.zIndex = -1;
    vid.loop = true;
 
    vid.style.zIndex = 1;
    txt.style.zIndex = -1;

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(); // For Safari
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen(); // For IE11
    }
});