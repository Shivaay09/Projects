let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rock = document.getElementById('rock');
let forest = document.getElementById('forest');
let water = document.getElementById('water');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    text.style.marginTop=value * 1.5 + 'px';
    bird1.style.top=value * -1.5 + 'px';
    bird1.style.left=value * 2+ 'px';
    bird2.style.top=value * -1.5 + 'px';
    bird2.style.left=value * -5 + 'px';
    rock.style.top=value * -0.12 + 'px';
})
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    salmon.style.left=value * 1 + 'px';
    Snapper.style.left=value * 1 + 'px';
    Swordfish.style.left=value * -1 + 'px';
    Tuna.style.left=value * -1 + 'px';
})