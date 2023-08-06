

a = document.querySelectorAll('.drum')

aud = {
    'w':'tom-1',
    
    's':'tom-2',
    
    'a':'tom-3',
    
    'd':'tom-4',
    
    'j':'snare',
    
    'k':'crash',
    
    'l':'kick-bass',
}



function lg(c){
    qs = '.'+c;
    elem = document.querySelector(qs)
    
    elem.classList.add('pressed');
    setTimeout(function(){
        elem.classList.remove('pressed');
    },300)
    
    //'#DA0463'
}

function f(c){
    aou = new Audio('sounds/'+aud[c]+'.mp3')
    aou.play();
}

function dum(a,f){
    f(a);
}
document.addEventListener('keypress',function(e){
   // console.log(e.key)
    dum(e.key,f)
    lg(e.key)
});