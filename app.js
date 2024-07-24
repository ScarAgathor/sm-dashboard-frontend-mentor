const theme = window.matchMedia("(prefers-color-scheme: dark)");
const body = document.querySelector('[data-theme]');
const themeButton = document.getElementById('check');
const themeName = document.querySelector('[data-theme-name]');
const headingTitle = document.querySelector('[data-heading-title]');
const headingText = document.querySelector('[data-heading-text]');
const account = document.querySelectorAll('[data-account]');
const accountUsername = document.querySelectorAll('[data-account-username]');
const accountValue = document.querySelectorAll('[data-account-value]');
const accountLogo = document.querySelectorAll('[data-account-logo]');
const statHeading = document.querySelector('[data-stat-heading]');
const stat = document.querySelectorAll('[data-stat]');
const statTitle = document.querySelectorAll('[data-stat-title');
const statValue = document.querySelectorAll('[data-stat-value]');

window.onload = () => {
    // Theme switching Logic for page load
    if(theme.matches) {
        setDarkTheme();
        themeButton.checked = false;
    } else if(!theme.matches) {
        setLightTheme();
        themeButton.checked = true;
    }
}

themeButton.addEventListener('click', () => {
    // Theme switching Logic for toggle button
    if(themeButton.checked) {
        setLightTheme()
    } else if(!themeButton.checked) {
        setDarkTheme()
    }
})



function setDarkTheme() {
    body.classList.add('body--dark');
    body.classList.remove('body--light');
    headingTitle.classList.add('heading__title--dark');
    headingTitle.classList.remove('heading__title--light');
    headingText.classList.add('heading__text--dark');
    headingText.classList.remove('heading__text--light');
    themeName.textContent = `Dark Mode`;
    themeName.classList.add('theme__name--dark');
    themeName.classList.remove('theme__name--light');
    statHeading.classList.add('stat__heading--dark');
    statHeading.classList.remove('stat__heading--light');

    for(let i = 0; i < account.length; i++) {
        account[i].classList.add('account--dark');
        account[i].classList.remove('account--light');
        accountUsername[i].classList.add('account__username--dark');
        accountUsername[i].classList.remove('account__username--light');
        accountValue[i].classList.add('account__value--dark');
        accountValue[i].classList.remove('account__value--light');
        accountLogo[i].classList.add('account__logo--dark');
        accountLogo[i].classList.remove('account__logo--light');
    }

    for(let i = 0; i < stat.length; i++) {
        stat[i].classList.add('stat--dark');
        stat[i].classList.remove('stat--light');
        statTitle[i].classList.add('stat__title--dark');
        statTitle[i].classList.remove('stat__title--light');
        statValue[i].classList.add('stat__value--dark');
        statValue[i].classList.remove('stat__value--light');
    }
}

function setLightTheme() {
    body.classList.remove('body--dark');
    body.classList.add('body--light');
    headingTitle.classList.remove('heading__title--dark');
    headingTitle.classList.add('heading__title--light');
    headingText.classList.remove('heading__text--dark');
    headingText.classList.add('heading__text--light');
    themeName.textContent = `Light Mode`;
    themeName.classList.remove(`theme__name--dark`);
    themeName.classList.add(`theme__name--light`);
    statHeading.classList.remove('stat__heading--dark');
    statHeading.classList.add('stat__heading--light');

    for(let i = 0; i < account.length; i++) {
        account[i].classList.remove('account--dark');
        account[i].classList.add('account--light');
        accountUsername[i].classList.remove('account__username--dark');
        accountUsername[i].classList.add('account__username--light');
        accountValue[i].classList.remove('account__value--dark');
        accountValue[i].classList.add('account__value--light');
        accountLogo[i].classList.remove('account__logo--dark');
        accountLogo[i].classList.add('account__logo--light');
    }

    for(i = 0; i < stat.length; i++) {
        stat[i].classList.remove('stat--dark');
        stat[i].classList.add('stat--light');
        statTitle[i].classList.remove('stat__title--dark');
        statTitle[i].classList.add('stat__title--light');
        statValue[i].classList.remove('stat__value--dark');
        statValue[i].classList.add('stat__value--light');
    }
}






