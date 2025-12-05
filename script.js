  let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;

        // Create dots
        function createDots() {
            const dotsContainer = document.getElementById('dotsContainer');
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.onclick = () => goToSlide(i);
                dotsContainer.appendChild(dot);
            }
        }

        // Show slide
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
            
            slides[n].classList.add('active');
            document.querySelectorAll('.dot')[n].classList.add('active');
            document.getElementById('currentSlide').textContent = n + 1;
        }

        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Previous slide
        function previousSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        // Go to specific slide
        function goToSlide(n) {
            currentSlide = n;
            showSlide(currentSlide);
        }

        // Initialize
        // add a new line code 
        document.getElementById('totalSlides').textContent = totalSlides;
        createDots();