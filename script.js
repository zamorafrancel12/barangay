// Get the modal element
const popupForm = document.getElementById("popupForm");

// Get the <span> element that closes the modal
const closeButton = document.getElementsByClassName("close")[0];

// Flag to track if the pop-up has been closed or submitted
let popupClosed = false;

// Show the popup for the first time after 5 seconds, if not closed
setTimeout(() => {
  if (!popupClosed) {
    showPopup();
  }
}, 5000);

// When the user clicks on <span> (x) or submits the form, close the modal
closeButton.addEventListener("click", closePopup);
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission for demonstration
  closePopup();
});

// Function to show the popup
function showPopup() {
  popupForm.style.display = "flex"; // Show pop-up
}

// Function to close the popup
function closePopup() {
  popupForm.style.display = "none"; // Close the pop-up
  popupClosed = true; // Set the flag to indicate that the pop-up has been closed
}
