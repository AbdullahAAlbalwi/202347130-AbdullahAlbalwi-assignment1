const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; 

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;


if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    htmlElement.setAttribute('data-theme', 'dark');
} else {
    htmlElement.setAttribute('data-theme', 'light');
}

toggleBtn.addEventListener('click', () => {
    let currentTheme = htmlElement.getAttribute('data-theme');
    let newTheme = (currentTheme === 'dark') ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
