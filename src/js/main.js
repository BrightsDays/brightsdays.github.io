window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    const toggle = document.querySelector('.card__toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    const switchTheme = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggle.checked = true;
        }
    }

    toggle.addEventListener('change', switchTheme, false);
});