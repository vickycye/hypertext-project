// Enhanced hover effects with accessibility
document.addEventListener('DOMContentLoaded', function() {
    const hoverables = document.querySelectorAll('.hoverable');
    
    hoverables.forEach(element => {
        // Mouse events
        element.addEventListener('mouseenter', showHoverContent);
        element.addEventListener('mouseleave', hideHoverContent);
        
        // Touch events for mobile
        element.addEventListener('touchstart', toggleHoverContent);
        
        // Keyboard accessibility
        element.setAttribute('tabindex', '0');
        element.addEventListener('focus', showHoverContent);
        element.addEventListener('blur', hideHoverContent);
    });
    
    function showHoverContent(e) {
        const hoverContent = this.querySelector('.hover-content');
        if (hoverContent) {
            hoverContent.style.opacity = '1';
            hoverContent.style.maxHeight = '500px';
        }
    }
    
    function hideHoverContent(e) {
        const hoverContent = this.querySelector('.hover-content');
        if (hoverContent && !this.classList.contains('keep-visible')) {
            hoverContent.style.opacity = '0';
            hoverContent.style.maxHeight = '0';
        }
    }
    
    function toggleHoverContent(e) {
        e.preventDefault();
        this.classList.toggle('keep-visible');
        if (this.classList.contains('keep-visible')) {
            showHoverContent.call(this);
        } else {
            hideHoverContent.call(this);
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

