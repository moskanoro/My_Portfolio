document.getElementById('registerForm').addEventListener('submit', function(event)

{
    event.preventDefault();

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const email = document.getElementById('email').value;


    if (localStorage.getItem(username)) 
      {
        document.getElementById('registerMessage').textContent = 'Username already exists.';

    } else 
    {
        localStorage.setItem(username, password);
       document.getElementById('registerMessage').style.color = 'green';
       
        document.getElementById('registerMessage').textContent = 'Registration successful!';}});
