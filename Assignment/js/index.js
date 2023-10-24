// Hide all the image sections in the .imageContainer div
const imageContainer = document.querySelector('.imageContainer');
const imageSections = imageContainer.querySelectorAll('section');
imageSections.forEach(section => section.style.display = 'none');

// Get all the buttons in the .buttons div
const buttons = document.querySelector('.buttons').querySelectorAll('button');

// Iterate over the buttons and add a click event listener to each one
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all the image sections
        imageSections.forEach(section => section.style.display = 'none');

        // Show the image section that corresponds to the clicked button
        const imageSection = imageSections[index];
        imageSection.style.display = 'flex';

        // Show the "hide result" button for the current image section
        const hideResultButton = imageSection.querySelector('button');
        hideResultButton.style.display = 'block';
    });
}); 