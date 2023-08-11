
var submitButton = document.getElementById('submit-button'); 
var contactDiv = document.querySelector('.comments');

submitButton.addEventListener('click', function() {
    var successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you for your comment! We will take it into consideration';
    successMessage.style.fontSize = '30px';
    contactDiv.innerHTML = '';
    contactDiv.appendChild(successMessage);
});