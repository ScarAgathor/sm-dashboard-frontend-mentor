const theme = window.matchMedia("(prefers-color-scheme: dark)");
const body = document.querySelector('[data-theme]');
const themeButton = document.getElementById('check');
const themeName = document.querySelector('[data-theme-name]');

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

// Continue tomorrow to add other color themes

    themeName.textContent = `Dark Mode`;

}

function setLightTheme() {
    body.classList.add('body--light');
    body.classList.remove('body--dark');

// Continue tomorrow to add other color themes

    themeName.textContent = `Light Mode`;
}






