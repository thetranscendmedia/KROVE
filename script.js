// ==========================================
// KROVE BARBERSHOP - MAIN JAVASCRIPT
// ==========================================

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    // Toggle mobile menu and animate hamburger to X
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when any link inside it is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu if user clicks anywhere outside
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}