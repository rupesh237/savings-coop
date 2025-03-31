let slideIndex = 0;

        function moveSlide(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let slides = document.getElementsByClassName("carousel-slide");
            let container = document.querySelector(".carousel-container");

            if (n > slides.length - 1) {
                slideIndex = 0;
            }
            if (n < 0) {
                slideIndex = slides.length - 1;
            }

            container.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        // Automatic carousel slide
        setInterval(function() {
            moveSlide(1);
        }, 3000); // Change slide every 3 seconds