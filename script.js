const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const submitForm = document.querySelector('.form-submit form');

if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
}

const overlay = document.getElementById('overlay');
const messageTitle = document.getElementById('messageTitle');
const messageText = document.getElementById('messageText');

let isComplete = false;

function openDialog() {
    if (overlay) {
        overlay.style.display = 'flex';
    }
}

function closeDialog() {
    if (overlay) {
        overlay.style.display = 'none';
    }

    if (isComplete && submitForm) {
        submitForm.reset();
    }
}

if (submitForm && overlay && messageTitle && messageText) {
    submitForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const bName = document.getElementById('bName').value.trim();
        const bAddress = document.getElementById('businessadd').value.trim();
        const bCategory = document.getElementById('category').value;
        const rating = document.querySelector('input[name="rating"]:checked');

        if (!bName || !bAddress || !bCategory || !rating) {
            isComplete = false;
            messageTitle.textContent = 'Incomplete Information';
            messageText.textContent = 'Please complete all information before submitting.';
        } else {
            isComplete = true;
            messageTitle.textContent = 'Thank You!';
            messageText.textContent = 'Your recommendation has been received.';
        }

        openDialog();
    });
}

const foodSlide = document.querySelector('.food-slide');
const nextButton = document.querySelector('.food-next');
const prevButton = document.querySelector('.food-prev');

if (foodSlide && nextButton && prevButton) {

    nextButton.addEventListener('click', () => {
        const firstImage = foodSlide.firstElementChild;
        foodSlide.appendChild(firstImage);
    });

    prevButton.addEventListener('click', () => {
        const lastImage = foodSlide.lastElementChild;
        foodSlide.prepend(lastImage);
    });
}