console.log("Kona Dancer page loaded");
   document.addEventListener('DOMContentLoaded', () => 
    {
    const konaDancer = document.getElementById('kona-dancer');

 const audio = new Audio('mp3/Paradisio Ft Maria Garcia & Dj Patrick Samoy - Bailando - 1997 International Official Video.mp3');

 let isDragging = false;
      let scale = 1;
    let isPlaying = false;

    /* hhandling the clicking so to be able to play or pause music*/
konaDancer.addEventListener('click', () => {
        if (isPlaying) 
            {
            audio.pause();
            isPlaying = false;
        } else
         {
            audio.play();

             isPlaying = true;
      
            }
    });


    /*handling the mousedownto start dragging with the cursor*/
  konaDancer.addEventListener('mousedown', () => {
        isDragging = true;
    });




    /*this one is for stoping dragging of the mouseup*/

 document.addEventListener('mouseup', () =>
    {
        isDragging = false;
    });

    /*this code is for moving the dancer with the mouse*/


  document.addEventListener('mousemove', (event) => 
    {
     if (isDragging) {
            konaDancer.style.left = `${event.clientX - konaDancer.offsetWidth / 2}px`;
            konaDancer.style.top = `${event.clientY - konaDancer.offsetHeight / 2}px`;
        }
    });
});


    /*   changing the size of the dancer gif by wheeling up or wheeling down the mouse 
  document.addEventListener('wheel', (event) => {
        if (event.deltaY < 0) {
            /* making it bigger  
              scale += 0.1;
        } else {
            /* making it smaller 
            scale -= 0.1;
        }
        scale = Math.max(0.1, scale);  /* and this code is for stoping it to go down below 0.1 
        konaDancer.style.transform = `scale(${scale})`;
        konaDancer.style.width = `${konaDancer.offsetWidth * scale}px`;
        konaDancer.style.height = `${konaDancer.offsetHeight * scale}px`;
    });   to fix __ this part for changing the size by mouse wheel is not working    */ 