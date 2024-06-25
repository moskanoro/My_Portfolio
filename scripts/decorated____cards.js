function toggleMenu()
 {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  
/*fancy card javascript 
code*/

const panels = document.querySelectorAll('.panel');
/*Obtaining  panels node list
*/
panels.forEach(panel =>
   {
  panel.addEventListener('click', () =>
    
    {
    removeActiveClasses();
    panel.classList.add('active');
  })
})

function removeActiveClasses()

{
  panels.forEach(removePanel =>
     {
    removePanel.classList.remove('active');
  })
}

/* Added interactivity to the photo

*/
const mainPhoto = document.querySelector('.jesse1');

mainPhoto.addEventListener('click', () => {
    alert('Please teacher give me 99/100 ! 🤪');
});


/* typing sty;e */

const typingText = document.querySelector('.port-title');
const textArray = ['Hey everyone 👨🏻‍💻', 'Welcome to My Portfolio', 'I am a Web Developer', 'I love Coding'];
let textIndex = 0;
let charIndex = 0;

function type()
 {
    if (charIndex < textArray[textIndex].length) {
        typingText.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase()
 {
    if (charIndex > 0) 
      {
        typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else 
    
    {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function ()
 {
    setTimeout(type, 1000);});
