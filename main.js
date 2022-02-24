const menu = document.querySelector('#hamburger-menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    document.body.classList.toggle('open');
})