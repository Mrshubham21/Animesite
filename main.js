document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    document.addEventListener('click', (event) => {
        if (!nav || !bar || !nav.classList.contains('active')) return;

        const clickedNav = nav.contains(event.target);
        const clickedMenuButton = bar.contains(event.target);

        if (!clickedNav && !clickedMenuButton) {
            nav.classList.remove('active');
        }
    });

    const revealItems = document.querySelectorAll(
        '#anime-history h2, #anime-history p, .history-box, #product1 h2, #product1 > p, #product1 .pro, #banner h4, #banner h2, #banner button, #sm-banner .banner-box, #newsletter .newstext, #newsletter .form, footer .col'
    );

    revealItems.forEach((item, index) => {
        item.classList.add('scroll-reveal');
        item.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 80}ms`);
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -70px 0px'
    });

    revealItems.forEach((item) => revealObserver.observe(item));
});
