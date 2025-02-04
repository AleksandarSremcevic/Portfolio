document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Background Video Loop Switching
    const videos = document.querySelectorAll(".header-video");
    let currentIndex = 0;

    setInterval(() => {
        videos[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % videos.length;
        videos[currentIndex].classList.add("active");
    }, 6000); // Changes every 6 seconds

    // Popup functionality
    const createPopup = (items, type) => {
        const popup = document.getElementById("popup");
        const popupGallery = document.getElementById("popup-gallery");
        popupGallery.innerHTML = ""; // Clear previous items

        items.forEach(item => {
            let element;
            if (type === "videos") {
                element = document.createElement("video");
                element.src = item;
                element.autoplay = true;
                element.loop = true;
                element.muted = true;
            } else {
                element = document.createElement("img");
                element.src = item;
                element.alt = "Additional Image";
                element.addEventListener("click", () => {
                    showEnlargedView(item);
                });
            }
            popupGallery.appendChild(element);
        });

        popup.style.display = "flex";

        const closeButton = document.querySelector(".close-popup");
        closeButton.addEventListener("click", () => {
            popup.style.display = "none";
        });

        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    };

    // Event listeners for "See More" buttons
    document.querySelectorAll(".see-more").forEach(button => {
        button.addEventListener("click", () => {
            const sectionId = button.dataset.type;
            let items = [];
            let type = "images";
            if (sectionId === "logos") {
                items = Array.from({ length: 10 }, (_, i) => `images/additional-logos/logo${i + 4}.jpg`);
            } else if (sectionId === "graphics") {
                items = Array.from({ length: 10 }, (_, i) => `images/additional-graphics/graphic${i + 4}.jpg`);
            } else if (sectionId === "websites") {
                items = Array.from({ length: 10 }, (_, i) => `videos/additional-websites/web${i + 3}.mp4`);
                type = "videos";
            }
            createPopup(items, type);
        });
    });

    // Enlarged view functionality
    const showEnlargedView = (src) => {
        const enlargedView = document.getElementById("enlarged-view");
        const enlargedImage = document.getElementById("enlarged-image");
        enlargedImage.src = src;
        enlargedView.style.display = "flex";

        const closeEnlargedButton = document.querySelector(".close-enlarged");
        closeEnlargedButton.addEventListener("click", () => {
            enlargedView.style.display = "none";
        });

        enlargedView.addEventListener("click", (e) => {
            if (e.target === enlargedView) {
                enlargedView.style.display = "none";
            }
        });
    };

    // Add click event to existing gallery images
    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", () => {
            showEnlargedView(img.src);
        });
    });
});

