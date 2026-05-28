const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const elements = document.querySelectorAll('.hidden')            //Caputarando todos os elementos da class hidden
const elements2 = document.querySelectorAll('.hiddenTitle')      //Caputarando todos os elementos da class hidden

elements.forEach( (elements) => {       
     myObserver.observe(elements)
})
elements2.forEach( (elements) => {       
     myObserver.observe(elements)
})

//PLAY AUDIO
// > Função para reproduzir áudio
function playAudio(card) {
  let audio = card.querySelector('.audio');
  audio.play();
}

// > Função para parar áudio
function stopAudio(card) {
  let audio = card.querySelector('.audio');
  audio.pause();
  audio.currentTime = 0;
}


//PLAY CARDSVIDEOS
    // > Play videoCards
function playVideo(card) {
    let video = card.querySelector('.video');
    video.play();
}
    // > Stoped videoCards
function stopVideo(card){
    let video = card.querySelector('.video');
    video.pause();
    video.currentTime = 0;
}

// SLIDER 
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 5000)

function nextImage(){
  count++;
  if(count>3){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        navbar.classList.add("navbar-show");
    }
    else{
        navbar.classList.remove("navbar-show");
    }

});