// script.js
const playButton = document.getElementById('yt');
const videoModal = document.getElementById('video-modal');

playButton.addEventListener('click', () => {
    videoModal.style.display = 'block';
});

// Close the modal when clicking outside the video or on the modal itself
document.addEventListener('click', (event) => {
    if (event.target === videoModal || event.target === playButton) {
        videoModal.style.display = 'none';
    }
});
