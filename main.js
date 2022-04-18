
const mobileShareBar = document.querySelector('.mobile_share');
const mobileShareIcon = document.querySelector('.mobile_share_icon');
const mobileShareIconClicked = document.querySelector('.mobile_share_icon_clicked');
const desktopTooltip = document.querySelector('.desktop_tooltip');
const desktopShareIconClicked = document.querySelector('.desktop_share_icon_clicked');
let width = window.innerWidth;


window.addEventListener('resize', () => { 
    "use strict";
    window.location.reload(); 
});

mobileShareIcon.addEventListener('click', () => {
        if (width < 768){
            mobileShareBar.classList.toggle('hidden')
        }
        if (width >= 768){
            desktopTooltip.classList.toggle('hidden')
            desktopShareIconClicked.classList.toggle('hidden')
            mobileShareIcon.classList.toggle('hidden')
        }
        
});

desktopShareIconClicked.addEventListener('click', () => {
    desktopTooltip.classList.toggle('hidden')
    mobileShareIcon.classList.toggle('hidden')
    desktopShareIconClicked.classList.toggle('hidden')
});


mobileShareIconClicked.addEventListener('click', () => {
    mobileShareBar.classList.toggle('hidden')
});
