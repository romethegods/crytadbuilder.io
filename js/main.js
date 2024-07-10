// main.js for AdGenius Hub

// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', function() {

    // Function to handle mobile navigation menu toggle
    function handleMobileNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('nav ul');

        if (navToggle) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('show');
            });
        }
    }

    // Function to handle smooth scrolling for anchor links
    function handleSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Function to handle form submission
    function handleFormSubmission() {
        const form = document.querySelector('form');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would typically send the form data to a server
                // For this example, we'll just log it to the console
                const formData = new FormData(form);
                for (let [key, value] of formData.entries()) {
                    console.log(key + ': ' + value);
                }

                // Show a success message (you can replace this with a modal or other UI element)
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            });
        }
    }

    // Function to handle lazy loading of images
    function handleLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.getAttribute('data-src');
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Function to handle the pricing toggle (monthly/yearly)
    function handlePricingToggle() {
        const pricingToggle = document.querySelector('.pricing-toggle');
        const monthlyPrices = document.querySelectorAll('.price-monthly');
        const yearlyPrices = document.querySelectorAll('.price-yearly');

        if (pricingToggle) {
            pricingToggle.addEventListener('change', function() {
                if (this.checked) {
                    monthlyPrices.forEach(price => price.style.display = 'none');
                    yearlyPrices.forEach(price => price.style.display = 'block');
                } else {
                    monthlyPrices.forEach(price => price.style.display = 'block');
                    yearlyPrices.forEach(price => price.style.display = 'none');
                }
            });
        }
    }

    // Call all the functions
    handleMobileNav();
    handleSmoothScroll();
    handleFormSubmission();
    handleLazyLoading();
    handlePricingToggle();

    // You can add more functions and call them here as needed
});