// JavaScript for Fullscreen Videos
document.querySelectorAll('.clickable-video').forEach(video => {
    video.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen(); // For most modern browsers
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // For Safari
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen(); // For IE/Edge
        }
    });
});

// Light Box
document.querySelectorAll('.img-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        
        const imgSrc = this.getAttribute('data-fullsize');

        // lightbox container
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.innerHTML = `
            <img src="${imgSrc}" alt="Enlarged Image">
        `;
        document.body.appendChild(lightbox);

        
        lightbox.classList.add('active');

        // Close lightbox on clicking anywhere outside the image
        lightbox.addEventListener('click', (event) => {
            if (event.target !== lightbox.querySelector('img')) {
                closeLightbox(lightbox);
            }
        });

        // Close lightbox on pressing the Escape key
        document.addEventListener('keydown', function onKeyPress(event) {
            if (event.key === "Escape") {
                closeLightbox(lightbox);
                document.removeEventListener('keydown', onKeyPress); // Remove the event listener
            }
        });
    });
});

// Function to close the lightbox
function closeLightbox(lightbox) {
    lightbox.remove(); // Remove lightbox from DOM
}
 