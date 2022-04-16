
const mobileShareBar = document.querySelector('.mobile_share');
const mobileShareIcon = document.querySelector('.mobile_share_icon');
const mobileShareIconClicked = document.querySelector('.mobile_share_icon_clicked');
const desktopTooltip = document.querySelector('.desktop_tooltip');
let width = window.innerWidth;


mobileShareIcon.addEventListener('click', () => {
        if (width < 768){
            mobileShareBar.classList.toggle('hidden')
        }
        if (width >= 768){
            desktopTooltip.classList.toggle('hidden')
        }
        
});

mobileShareIconClicked.addEventListener('click', () => {
    mobileShareBar.classList.toggle('hidden')
});


// 'transition', 'ease-in-out', 'delay-150'