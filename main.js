const span3 = document.querySelector('.span3'); 
const span2 = document.querySelector('.span2'); 
const span1 = document.querySelector('.span1'); 
const cirl = document.querySelector('.cirl');

span1.addEventListener('click', (e) => {
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.remove('light-theme');
     cirl.style.marginLeft='0'
    
    
})

span2.addEventListener('click', (e) => {
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.add('light-theme');
    cirl.style.marginLeft='22px'
    
    
})


span3.addEventListener('click', (e) => {
    document.documentElement.classList.remove('light-theme');
    document.documentElement.classList.add('dark-theme');
     cirl.style.marginLeft='44px'
    
    
})



let oxirgiraqam='';

function qosh(number) {
    
    document.getElementById('ekran').textContent += number;
    oxirgiraqam=number;
}

function amal(operator) {
    const operatorTeksheruv=['+','-','x','/']
    let tek = document.getElementById('ekran');
   
    if(!operatorTeksheruv.includes(oxirgiraqam)) {
        console.log('ss');
        tek.textContent += operator;
        oxirgiraqam=operator;
        
    }
}

function tozala() {
   
    
    document.getElementById('ekran').textContent = '';
}

function ochir() {
    let display = document.getElementById('ekran').textContent;
    document.getElementById('ekran').textContent = display.slice(0, -1); 
}



function hisoblash() {  
        let result = eval(document.getElementById('ekran').textContent);
        document.getElementById('ekran').textContent = result;
    
}












