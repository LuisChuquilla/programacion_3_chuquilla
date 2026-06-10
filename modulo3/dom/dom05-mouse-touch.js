const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'lightgreen';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'lightblue';
});

caja.addEventListener('click', () => {
    alert('¡Has hecho clic en la caja!');
});

const areaTouch = document.getElementById('areatouch');

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.backgroundColor = 'lightyellow';
});

areaTouch.addEventListener('touchend', () => {
    areaTouch.style.backgroundColor = 'lightcoral';
});


