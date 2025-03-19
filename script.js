document.querySelectorAll('.slide-container').forEach(container => {

    const banner = container.querySelector('.banner');
container.addEventListener('mouseenter', () => {
    banner.style.transform = "translateY(100%)"; // Slide banner down
});

container.addEventListener('mouseleave', () => {
    banner.style.transform = "translateY(0)"; // Slide banner back up
});
});

