// script.js
const videoLink = document.getElementById('yt');
const videoPopup = document.getElementById('video-popup');
const closeButton = document.getElementById('close-button');

videoLink.addEventListener('click', () => {
    videoPopup.style.display = 'block';
});

// Close the pop-up when clicking outside the video or on the close button
document.addEventListener('click', (event) => {
    if (event.target !== videoLink && event.target !== videoPopup && event.target !== closeButton) {
        videoPopup.style.display = 'none';
    }
});

// Additional: Close the pop-up when the close button is clicked
closeButton.addEventListener('click', () => {
    videoPopup.style.display = 'none';
});