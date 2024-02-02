import './style.css'
import Experience from './Experience/Experience.js'
const experience = new Experience(document.querySelector('canvas.webgl'))


Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }});
    document.body.addEventListener('click', function () {
        playVideoIfNotAlreadyPlaying();
    });
    
    document.body.addEventListener('touchstart', function () {
        playVideoIfNotAlreadyPlaying();
    });
    
    document.body.addEventListener('click', function () {
        playVideoIfNotAlreadyPlaying();
    });
    
    document.body.addEventListener('touchstart', function () {
        playVideoIfNotAlreadyPlaying();
    });
    
    function playVideoIfNotAlreadyPlaying() {
        const videoElement = document.getElementById('video1');
    
        // Use the "paused" property to check if the video is not playing
        if (videoElement.paused) {
            videoElement.play();
        }
        // If the video is playing, do nothing
    }