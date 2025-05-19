// For automatic typingeffect

function runtypingeffect(){
    const text = 'I am Lorem Ipsum.';
    const typingplace = document.getElementById('typing-text');
    const timedelay = 100;

    typetext(text,typingplace,timedelay);
}
function typetext(text, typingplace, timedelay){
    for(let i=0; i<text.length; i++){
        setTimeout(()=>{
            typingplace.textContent += text.charAt(i);
        },timedelay*i);
    }
}
document.addEventListener('DOMContentLoaded', runtypingeffect);