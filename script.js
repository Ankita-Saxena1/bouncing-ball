// Select the cursor
const cursor = document.querySelector('.Cursor');
document.body.classList.add('is-ready'); // Make cursor visible when page loads

// Move cursor with mouse movement
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Select all slide containers
document.querySelectorAll('.slide-container').forEach(container => {
    const banner = container.querySelector('.banner');

    // Slide-down animation on hover
    container.addEventListener('mouseenter', () => {
        banner.style.transform = "translateY(100%)"; // Slide banner down
        cursor.classList.add('is-active'); // Activate cursor animation
    });

    container.addEventListener('mouseleave', () => {
        banner.style.transform = "translateY(0)"; // Slide banner back up
        cursor.classList.remove('is-active'); // Reset cursor animation
    });
});