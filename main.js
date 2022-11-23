const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.stype.display = 'inline-block';
});

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.stype.display = 'none';
};

closeNavBtn.addEventListener('click', closeNav);

// close nav menu when a menu item is closed
if (window.innerWidth < 1024) {
    document.querySelectorAll('nav__Items li a').forEach((navItem) => {
        navItem.addEventListener('click', () => {
            closeNav();
        });
    });
}

// TESTIMONIALS SECTION (swiper js)
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Responsive Breakpoints
    breakpoints: {
        // When window width is >= 600px
        600: {
            slidesPerView: 2,
        },

        // When window width is >= 1024px
        1024: {
            slidesPerView: 3,
        },
    },
});
