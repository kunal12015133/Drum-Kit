var li=document.querySelectorAll('.drum');
for(let i=0;i<li.length;i++)
{
    li[i].addEventListener('click',function (){
        
        var txt=this.innerText;
        makeSound(txt);
        addAnimation(txt);
    })
}

    
document.addEventListener('keypress',function(ev){
    var txt=ev.key;
        makeSound(txt);
        addAnimation(txt);
})


function makeSound(txt)
{
        switch(txt){
            case 'w':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            
            case 'a':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case 'j':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case 'k':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case 'l':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            default:
                console.log(txt);
        }
}

function addAnimation(key){
    if(key==='w' || key==='a' || key==='s' || key==='d' || key==='j'|| key==='k'|| key==='l')
   {
        var classOfEvent='.'+key;
        var activeButton= document.querySelector(classOfEvent);
        activeButton.classList.add('pressed');
        setTimeout(function () {activeButton.classList.remove('pressed')},100);
    }
    else console.log('Invalid Entry');

}