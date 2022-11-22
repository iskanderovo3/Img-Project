const firstImage = document.getElementById('first-img');
const secondImage = document.getElementById('second-img');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function removeImg(){
    secondImage.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function addImg(){
    secondImage.classList.add('hidden');
    closeBtn.classList.add('hidden');
    overlay.classList.add('hidden');
}

firstImage.addEventListener('click', function(){
    removeImg();
});
closeBtn.addEventListener('click', function(){
    addImg();
});
overlay.addEventListener('click', function(){
    addImg();
});

document.addEventListener('keydown', (e)=>{
    if(e.key == 'Escape'){
        addImg();
    }
});