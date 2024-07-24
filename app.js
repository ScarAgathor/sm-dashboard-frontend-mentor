const theme = window.matchMedia("(prefers-color-scheme: dark)");
const body = document.querySelector('[data-theme]');
const themeButton = document.getElementById('check');
const themeName = document.querySelector('[data-theme-name]');
const headingTitle = document.querySelector('[data-heading-title]');
const headingText = document.querySelector('[data-heading-text]')

window.onload = () => {
    if(theme.matches) {
        setDarkTheme();
        themeButton.checked = false;
    } else if(!theme.matches) {
        setLightTheme();
        themeButton.checked = true;
    }
}

themeButton.addEventListener('click', () => {
    if(themeButton.checked) {
        setLightTheme()
    } else if(!themeButton.checked) {
        setDarkTheme()
    }
})

// Primary theme switching Logic

function setDarkTheme() {
    body.classList.add('body--dark');
    body.classList.remove('body--light');
    headingTitle.classList.add('heading__title--dark');
    headingTitle.classList.remove('heading__title--light');
    headingText.classList.add('heading__text--dark');
    headingText.classList.remove('heading__text--light');
    themeName.textContent = `Dark Mode`;
    themeName.classList.remove('theme__name--light');
    themeName.classList.add('theme__name--dark');
}

function setLightTheme() {
    body.classList.remove('body--dark');
    body.classList.add('body--light');
    headingTitle.classList.remove('heading__title--dark');
    headingTitle.classList.add('heading__title--light');
    headingText.classList.remove('heading__text--dark');
    headingText.classList.add('heading__text--light');
    themeName.textContent = `Light Mode`;
    themeName.classList.add(`theme__name--light`);
    themeName.classList.remove(`theme__name--dark`);
}






