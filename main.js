const menuBtn = document.getElementById('hamburger');
const menuList = document.getElementById('menu-list');

function toggleBtn() {
    menuList.classList.toggle('show')
}

menuBtn.addEventListener('click', toggleBtn)