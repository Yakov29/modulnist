import { createForm } from "./layout";
createForm()
document.getElementById('feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  

  document.getElementById('feedback-form').reset(); 
  document.getElementById('success-message').style.display = 'block'; 
  setTimeout(function() {
      document.getElementById('success-message').style.display = 'none'; 
  }, 3000);
});