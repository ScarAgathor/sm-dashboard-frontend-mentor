# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

## My process

I used a lot of scss and bem for this, I also practiced using Eric Meyers reset.

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- SCSS
- Javascript

### What I learned

I learned a lot about the prefers color scheme feature of the browsers. I didn't have to add it but I wanted to use this project to practice it. This was also the first time I used scss so it was nice to get some practice in with it. The theme switching checks was also fun to work on. I also practice new ways of naming for styling and scripting, i.e using classes and data-attributes respectively. I am trying to develop a working process that I can follow for future projects. I have gotten better at building toggle buttons and manipulation them too and, the scss really made styling everything a little bit more organized. In the JS file, there may be some repeated code, but that is the only way I currently know how to make a theme switcher.

```js
window.onload = () => {
    // Theme switching Logic for on page load
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
```

## Author

- Frontend Mentor - [@ScarAgathor](https://www.frontendmentor.io/profile/ScarAGathor)
