let btn = document.querySelector('.open');
let root = document.querySelector(':root');

btn.addEventListener('click', () => {


    if(btn.innerHTML=='Open'){
        root.style.setProperty('--box-coordinates--','3.5em');
        root.style.setProperty('--box-coordinates-negative--','-3.5em');
        btn.innerHTML='Close';

    }else if(btn.innerHTML=='Close'){
        root.style.setProperty('--box-coordinates--','1.5em');
        root.style.setProperty('--box-coordinates-negative--','-1.5em');
        btn.innerHTML='Open';

    }
})