// Navigation and link handling
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation card clicks
    const navCards = document.querySelectorAll('.nav-card');
    navCards.forEach(card => {
        const link = card.querySelector('a');
        if (link) {
            card.addEventListener('click', function(e) {
                if (e.target.tagName !== 'A') {
                    link.click();
                }
            });
        }
    });
    
    // Add active state to current page in navigation
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    // Reload page content if needed
    location.reload();
});

