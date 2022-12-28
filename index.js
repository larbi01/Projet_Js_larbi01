
// Get the username input field
const usernameInput = document.getElementById("username");
const eu = document.getElementById('erroruser');

usernameInput.addEventListener("keyup", (event) => {
  
  const username = event.target.value;

  // Check if the username contains a number
  if (username.match(/\d+/g) || username.length<=3) {
    // Add a red border to the username field
    usernameInput.style.borderColor = "red";
    eu.style.display = ' block' ; 
    eu.style.color = ' red' ; 
    eu.innerHTML = 'Username lenght must be > 3 and no numbers allowed ';

  } else {
    usernameInput.style.borderColor = "green";
    eu.style.display = ' none' ; 
  }
});




// Get the email input field
const emailInput = document.getElementById("email");
const em = document.getElementById('erroremail');

emailInput.addEventListener("keyup", (event) => {

  const email = event.target.value;

  // Check if the email is not a valid email address
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    
    event.target.style.borderColor = "red";
    em.style.color = 'red';
    em.style.display = 'block';
    em.innerHTML = 'mail must contain @ ';

  } else {
    
    event.target.style.borderColor = "green";
    em.style.display = 'none';
  }
});





var passwordInput = document.getElementById('password');
var passwordError = document.getElementById('password-error');

function validatePassword() {
    // get the password input element
    var passwordInput = document.getElementById('password');
  
    // check if the password input meets the requirements
    if (passwordInput.value.length < 8 || !/\d/.test(passwordInput.value) || !/\W/.test(passwordInput.value)) {
      // if not, add a red border to the input
      passwordInput.style.border = '1px solid red';
      passwordError.innerHTML = 'Password must be at least 8 characters long and contain 1 number and 1 symbol';
      passwordError.style.display = 'block';
    } else {
      // if it does, remove the red border
      passwordInput.style.borderColor = 'green';
      passwordError.style.display = 'none';
      
    }
  }




  function validateConfirmPassword() {
  var passwordInput = document.getElementById('password');
  var confirmPasswordInput = document.getElementById('confirm-password');
  var confirmPasswordError = document.getElementById('confirm-password-error');
    // get the password and confirm password input elements
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');
  
    
    // check if the values of the two inputs are identical
    if (passwordInput.value !== confirmPasswordInput.value) {
      // if not, add a red border to the confirm password input
      confirmPasswordInput.style.border = '1px solid red';
      confirmPasswordError.innerHTML = 'Passwords must be identical';
      confirmPasswordError.style.display = 'block';
    } else {
      // if they are, remove the red border
      confirmPasswordInput.style.borderColor = 'green';
      confirmPasswordError.style.display = 'none';
      
    }
  }



  


  