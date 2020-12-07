let box = document.getElementById('box')
let move = 10

window.addEventListener('load',()=>{
    box.style.position='relative'
    box.style.top=0;
    box.style.left=0;
})
window.addEventListener('keydown',(e)=>{
    
    switch(e.key){
        case'ArrowUp':
        if(parseInt(box.style.top)!==0)
        box.style.top=`${parseInt(box.style.top)-move}px`;
        break;
        case'ArrowDown':
        if(parseInt(box.style.top)!==450)
        box.style.top=`${parseInt(box.style.top)+move}px`;
        break;
        case'ArrowLeft':
        if(parseInt(box.style.left)!==0)
        box.style.left=`${parseInt(box.style.left)-move}px`;
        break;
        case'ArrowRight':
        if(parseInt(box.style.left)!==450)
        box.style.left=`${parseInt(box.style.left)+move}px`;
        break;
    }
})

const addbox=()=>{
 let x = document.createElement('div')
 x.id='box';
 x.textContent='2'
 document.body.appendChild(x)  
} 