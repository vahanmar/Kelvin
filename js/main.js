const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav__btn')
const navBtnImg = document.querySelector('#nav__btn_img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './img/icon/nav_close.svg';
    }else{
        navBtnImg.src = './img/icon/nav.svg';
    }
}