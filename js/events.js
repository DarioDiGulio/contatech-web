document.getElementById('hamb-menu').addEventListener('click', () => {
    const nav = document.getElementsByClassName('hero_nav--mobile')[0];
    const menu = nav.firstElementChild;

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('show');
    }
})