const navitem1=document.getElementById('navitem1');
const navitem2=document.getElementById('navitem2');
const navitem3=document.getElementById('navitem3');
const navitem4=document.getElementById('navitem4');
navitem1.addEventListener('click', ()=>{
    navitem1.style.color='#a87933';
    navitem2.style.color='black'
    navitem3.style.color='black';
    navitem4.style.color='black';
});
navitem2.addEventListener('click', ()=>{
    navitem1.style.color='black';
    navitem2.style.color='#a87933'
    navitem3.style.color='black';
    navitem4.style.color='black';
});
navitem3.addEventListener('click', ()=>{
    navitem1.style.color='black';
    navitem2.style.color='black'
    navitem3.style.color='#a87933';
    navitem4.style.color='black';
});
navitem4.addEventListener('click', ()=>{
    navitem1.style.color='black';
    navitem2.style.color='black'
    navitem3.style.color='black';
    navitem4.style.color='#a87933';
});