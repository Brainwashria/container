let mobileMenu = document.querySelector('.mobileMenu');
let closeImg = document.querySelector('.menuDiv img');
let darkDiv = document.querySelector('.menuDarkDiv');

mobileMenu.onclick = function () {
    openMenu();
};

closeImg.onclick = function () {
    closeMenu();
};

darkDiv.onclick = function (e) {
    if (e.target !== this) {
        return;
    }
    closeMenu();
};

let openMenu = function () {
    darkDiv.style.display = 'flex';
};

let closeMenu = function () {
    darkDiv.style.display = 'none';
};
