document.getElementById('loginForm').addEventListener('submit', function(event)
 {
    event.preventDefault();
    
const username = document.getElementById('username').value;

const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);
    const loginMessage = document.getElementById('loginMessage');

  if (storedPassword === password) 
        {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'projects.html';
        }, 1000);
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Invalid username or password';}});
