const themeBtn = document.getElementById('theme-btn');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const body = document.body;

// Automatic theme detection
if(prefersDark) body.classList.add('dark-theme');
else body.classList.add('github-theme');

themeBtn.addEventListener('click', () => {
    if(body.classList.contains('github-theme')){
        body.classList.remove('github-theme');
        body.classList.add('dark-theme');
    } else if(body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('github-theme');
    }
});
