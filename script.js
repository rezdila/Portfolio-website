
const videoButton = document.getElementById('yt');
const videoModal = document.getElementById('video-modal');

videoButton.addEventListener('click', () => {
    videoModal.style.display = 'block';
});

// Close the modal when clicking outside the video or on the modal itself
document.addEventListener('click', (event) => {
    if (event.target === videoModal || event.target === videoButton) {
        videoModal.style.display = 'none';
    }
});
