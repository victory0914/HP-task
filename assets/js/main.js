// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close mobile menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileMenuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Mobile submenu toggle functionality
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    mobileNavItems.forEach(item => {
        const title = item.querySelector('.mobile-nav-title');
        const submenu = item.querySelector('.mobile-submenu');
        const arrow = item.querySelector('.mobile-nav-arrow');
        
        if (title && submenu) {
            title.addEventListener('click', function() {
                const isActive = submenu.classList.contains('active');
                
                // Close all other submenus
                document.querySelectorAll('.mobile-submenu.active').forEach(activeSubmenu => {
                    if (activeSubmenu !== submenu) {
                        activeSubmenu.classList.remove('active');
                        activeSubmenu.previousElementSibling.querySelector('.mobile-nav-arrow')?.classList.remove('active');
                    }
                });
                
                // Toggle current submenu
                submenu.classList.toggle('active');
                if (arrow) {
                    arrow.classList.toggle('active');
                }
            });
        }
    });

    // Expose toggle function globally
    window.toggleMobileMenu = toggleMobileMenu;
});

// Mobile submenu toggle function
function toggleMobileSubmenu(element) {
    const submenu = element.nextElementSibling;
    const arrow = element.querySelector('.mobile-nav-arrow');
    
    if (submenu && submenu.classList.contains('mobile-submenu')) {
        // Close all other submenus
        document.querySelectorAll('.mobile-submenu.active').forEach(activeSubmenu => {
            if (activeSubmenu !== submenu) {
                activeSubmenu.classList.remove('active');
                activeSubmenu.previousElementSibling.querySelector('.mobile-nav-arrow')?.classList.remove('active');
            }
        });
        
        // Toggle current submenu
        submenu.classList.toggle('active');
        if (arrow) {
            arrow.classList.toggle('active');
        }
    }
}

// Desktop dropdown functionality (existing)
function toggleDropdown(element, event) {
    event.stopPropagation();
    
    // Close all other dropdowns
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    element.classList.toggle('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Smooth scrolling for anchor links
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
