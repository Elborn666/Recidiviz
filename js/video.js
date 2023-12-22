const playButton = document.querySelector('.video__play');
const wrapperTitle = document.querySelector(".video__wrapper-title");
const img = document.querySelector('.video__img');
const videoEl = document.querySelector('#video-player')

playButton.addEventListener('click', onHiddenTitle);

function onHiddenTitle (){
    console.log('click');
    wrapperTitle.classList.add('none')
    img.classList.add('none')
}

playButton.addEventListener('click', function () {
    if (videoEl.paused) {  // если видео остановлено, запускаем
        videoEl.play();
    } else {
        videoEl.pause();
    }
}, false);