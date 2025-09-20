function toggleTheme() {
    const body = document.body;
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
}
