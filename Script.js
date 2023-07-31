const bookContainer = document.querySelector('.book');
const pages = bookContainer.querySelectorAll('.page');
let currentPage = 0;
let userName = '';
let userDesignation = '';

// Show the first page initially
pages[currentPage].style.display = 'block';

document.getElementById('userInfoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  userName = document.getElementById('name').value;
  userDesignation = document.getElementById('designation').value;

  if (userName && userDesignation) {
    handleFormSubmit(userName, userDesignation);
  } else {
    alert('Please enter your name and designation.');
  }
});

document.getElementById('nextPageArrow').addEventListener('click', function () {
  if (userName && userDesignation) {
    showNextPage();
  } else {
    alert('Please enter your name and designation before proceeding.');
  }
});

function handleFormSubmit(name, designation) {
  const welcomeColor = designation === 'professional' ? 'blue' : 'green';
  document.querySelector('h1').style.color = welcomeColor;
  alert(`Welcome, ${name}! Enjoy reading the book.`);
  showNextPage();
}

function showNextPage() {
  // Hide the current page
  pages[currentPage].style.display = 'none';

  // Move to the next page
  currentPage++;

  // If there are more pages, display the next one
  if (currentPage < pages.length) {
    pages[currentPage].style.display = 'block';
  } else {
    // If it's the last page, reset to the beginning
    currentPage = 0;
    pages[currentPage].style.display = 'block';
  }
}
