document.addEventListener('DOMContentLoaded', () => {


    const burgerIcon = document.querySelector('.burger__icon'),
          burgerMenu = document.querySelector('.burger__menu');

    burgerIcon.addEventListener('click', () => {
        if (!burgerMenu.classList.contains('active')) {
            burgerMenu.classList.add('active');
        } else {
            burgerMenu.classList.remove('active');
        }
    });

    window.addEventListener('click', (e) => {
        if ((!e.target.matches('.burger__menu') && !e.target.closest('.burger__menu')) && (!e.target.matches('.burger__icon') && !e.target.closest('.burger__icon'))) {
            if (burgerMenu.classList.contains('active')) {
                burgerMenu.classList.remove('active');
            }
        }
    });


});