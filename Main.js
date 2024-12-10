// Switching background video on page load
const videos = ['vid1.mp4', 'vid2.mp4', 'vid3.mp4'];
let videoIndex = 0;
const videoElement = document.getElementById('background-video');

function switchVideo() {
    videoIndex = (videoIndex + 1) % videos.length;
    videoElement.src = videos[videoIndex];
}

setInterval(switchVideo, 10000); // Switch video every 10 seconds

// Smooth transition to page.html on button click
document.getElementById('goToPage').addEventListener('click', () => {
    document.body.style.transition = 'opacity 1s ease-out';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'page.html';
    }, 1000);
}); 
 