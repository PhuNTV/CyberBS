const playBtn = document.querySelector('.play-btn');
const videoPlayer = document.querySelector('#videoplayer');
const closeBtn = document.querySelector('.close-btn');
const iframe = document.querySelector('iframe');

playBtn.addEventListener('click', function() {
    videoPlayer.style.display = 'block';
    videoPlayer.style.position = 'fixed';
    videoPlayer.style.top = '50%';
    videoPlayer.style.left = '50%';
    //   videoPlayer.style.transform = 'translate(-50%, -50%)';
    videoPlayer.style.width = '50%';
    videoPlayer.style.height = '50%';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src += "&autoplay=1";
});

closeBtn.addEventListener('click', function() {
    videoPlayer.style.display = 'none';
    videoPlayer.style.position = 'relative';
    iframe.style.width = '100%';
    iframe.style.height = '0';
});