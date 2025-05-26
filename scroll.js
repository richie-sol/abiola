const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

const footerEl = document.getElementById("copy")

const yearEl = new Date().getFullYear()

footerEl.innerHTML = `<p>&copy; ${yearEl} ade.works. All Rights Reserved.</p>`