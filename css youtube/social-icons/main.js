social_link = document.querySelector('.social-links');
social_link_btn = document.querySelector('.social-links-btn');


social_link_btn.addEventListener('click', () => {
    social_link.classList.toggle('visible');
})