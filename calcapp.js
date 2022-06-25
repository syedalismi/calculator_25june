let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));
console.log(buttons);
buttons.map( button=>  {
    button.addEventListener('click', (e)=> {
     switch(e.target.innerText) {
         case 'C':
             display.innerText='';
             break;
             case'=':
             display.innerText = eval(display.innerText)
             default:
                 display.innerText +=e.target.innerText;
                 
     }
    });
});
