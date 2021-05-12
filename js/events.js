document.getElementById('hamb-menu').addEventListener('click', () => {
    const nav = document.getElementsByClassName('hero_nav--mobile')[0];

    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        nav.classList.add('hidden');
        nav.style.display = 'none';
    } else {
        nav.classList.remove('hidden');
        nav.classList.add('show');
        nav.style.display = 'block';
    }
})