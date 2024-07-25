
// animation for big screen 
function bigscreen(){

    gsap.from("#head1",{
        y:-100,
        duration:1.5,
        delay:2,
    })

    gsap.from("#head2",{
        y:-120,
        duration:1.5,
        delay:1,
    })
}

//animation for small screen
function smallscreen(){
    gsap.from("#head1",{
        y:-100,
        duration:1.5,
        delay:1,
    })

    gsap.from("#head2",{
        y:-107,
        duration:1.5,
        delay:2,
    })
}

function applyAnimations(){
    if(window.innerWidth >= 768){
        bigscreen();
    }else{
        smallscreen();
    }
}

applyAnimations();

window.addEventListener('resize',applyAnimations);
