
// popup appears, when user moves mouse more than 100px on screenY axis
const body = document.querySelector('body');
body.addEventListener('mousemove', logKey);

const btnClose = document.querySelector('.close')
btnClose.addEventListener('click', closePopup)
let ctn = document.querySelector('.ctn');

function logKey(e) {
    if (e.screenY > 100) {
        let ctn = document.querySelector('.ctn');
        ctn.classList.add('visible');
        body.removeEventListener('mousemove', logKey)
    }
}
// close popup
function closePopup() {
    ctn.classList.remove('visible')
}


