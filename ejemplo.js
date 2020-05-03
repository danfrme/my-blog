const cont2 = document.querySelector('.contenedor2');
const img = cont2.querySelector('#logo');
const btn = document.querySelector('#about');

function handdleEvent () {
    alert('dejando pagina');
}
img.addEventListener('click', handdleEvent);

btn.addEventListener('click', handdleEvent);