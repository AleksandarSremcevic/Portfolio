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
                items = [
                    "portfolio-project/images/additional-logos/(EMB) Peng FC IL.png",
                    "portfolio-project/images/additional-logos/(LW) A R K IL.png",
                    "portfolio-project/images/additional-logos/(LW) DSGN IL.png",
                    "portfolio-project/images/additional-logos/(LW) Food IL.png",
                    "portfolio-project/images/additional-logos/(LW) TS IL.png",
                    "portfolio-project/images/additional-logos/(Simple) DT Care IL.png",
                    "portfolio-project/images/additional-logos/(Simple) Human Society  IL.png",
                    "portfolio-project/images/additional-logos/(Simple) Kids Day - Care IL.png",
                    "portfolio-project/images/additional-logos/(Simple) VV IL.png",
                    "portfolio-project/images/additional-logos/AS Logo IL.png",
                    "portfolio-project/images/additional-logos/UX Logo IL.png",
           "portfolio-project/images/additional-logos/Fire Boost Logo IL.png"
                ];
            } else if (sectionId === "graphics") {
                items = [
            "portfolio-project/images/additional-graphics/Eseence IL.png",
            "portfolio-project/images/additional-graphics/Evelyn's Diner IL.png",
            "portfolio-project/images/additional-graphics/Graphic Designs Menu Pic.png",
            "portfolio-project/images/additional-graphics/Quote IL.png",
            "portfolio-project/images/additional-graphics/Rerfrsh IL.png",
            "portfolio-project/images/additional-graphics/Star IL.png",
            "portfolio-project/images/additional-graphics/VM Clothing Bag IL.png",
            "portfolio-project/images/additional-graphics/VM Clothing Tag IL.png",
            "portfolio-project/images/additional-graphics/VM Clothing Tags OUT IL.png",
            "portfolio-project/images/additional-graphics/Zule AI Computer IL.png",
            "portfolio-project/images/additional-graphics/Zule AI Phone IL.png",
            "portfolio-project/images/additional-graphics/Chocolate-or-Candy-Bar-Mockup-PSD.png",
            "portfolio-project/images/additional-graphics/G-Chocolate Van PSD.png",
            "portfolio-project/images/additional-graphics/Wolf Cards IL.jpg",
            "portfolio-project/images/additional-graphics/Wolf App PSD.png",
            "portfolio-project/images/additional-graphics/Wolf Cap PSD.png",
            "portfolio-project/images/additional-graphics/Wolf Clothing PSD.png",
            "portfolio-project/images/additional-graphics/X-EX Shirt PSD.png",
            "portfolio-project/images/additional-graphics/X-EX Hoodie PSD.png",
            "portfolio-project/images/additional-graphics/X-EX Board PSD.png"
                ];
            } else if (sectionId === "websites") {
                items = [
                    "videos/additional-websites/web4.mp4",
                    "videos/additional-websites/web5.mp4",
                    "videos/additional-websites/web6.mp4",
                    "videos/additional-websites/web7.mp4",
                    "videos/additional-websites/web8.mp4",
                    "videos/additional-websites/web9.mp4",
                    "videos/additional-websites/web10.mp4",
                    "videos/additional-websites/web11.mp4",
                    "videos/additional-websites/web12.mp4",
                    "videos/additional-websites/web13.mp4"
                ];
                type = "videos";
            } else if (sectionId === "photoshop") {
                items = [
                    "portfolio-project/images/additional-photoshop/Calm2 PSD.png",
                    "portfolio-project/images/additional-photoshop/Calmness PS.png",
                    "portfolio-project/images/additional-photoshop/Excitment2 PSD.png",
                    "portfolio-project/images/additional-photoshop/Magazine Cover IL.png",
                    "portfolio-project/images/additional-photoshop/Magich Woods PSD.png",
                   "portfolio-project/images/additional-photoshop/Whales Space PSD.png" 
                ];
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

    // Show Google Form popup
    const showFormPopup = () => {
        const formPopup = document.getElementById("form-popup");
        formPopup.style.display = "flex";

        const closeFormButton = document.querySelector(".close-form-popup");
        closeFormButton.addEventListener("click", () => {
            formPopup.style.display = "none";
        });

        formPopup.addEventListener("click", (e) => {
            if (e.target === formPopup) {
                formPopup.style.display = "none";
            }
        });
    };

    // Add click event to design services
    document.querySelectorAll(".service").forEach(service => {
        service.addEventListener("click", showFormPopup);
    });
});