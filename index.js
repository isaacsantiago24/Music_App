window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors=[
        "#60D394",
        "#d36060",
        "#c6eb0f",
        "#4404c4",
        "#b40b90",
        "#527f80"
    ];

  

    //Lets get the sound
    pads.forEach((pad,index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime=0; //reset the time in order to click several times
            sounds[index].play();
            createBubbles(index);
        });
    });


    //Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble); //attaching the bubble to the visual div
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        });
    };
});

