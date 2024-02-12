// Buttons
let i = 0;

const btnDelivery = document.querySelector('.delivery-selected');
btnDelivery.addEventListener('click', addDelivery);
function addDelivery(e) {
    e.preventDefault();
    i = 5.37;
    document.querySelector('#showDelivery').textContent = i;
}

const btnCalculate = document.querySelector('.btn-calculate');
btnCalculate.addEventListener('click', showTotalSum);
function showTotalSum(e) {
    e.preventDefault();
    
    let deliveryValue = document.querySelector('#showDelivery').innerHTML = i;
    let sum = 0;
    if (document.querySelector('#chooseOne').checked) sum += 29.79;
    if (document.querySelector('#chooseTwo').checked) sum += 17.29;
    if (document.querySelector('#chooseThree').checked) sum += 21.59;
    if (document.querySelector('#chooseFour').checked) sum += 19.39;
    if (document.querySelector('#chooseFive').checked) sum += 15.39;
    if (document.querySelector('#chooseSix').checked) sum += 23.69;
    if (document.querySelector('#chooseSeven').checked) sum += 29.79;
    if (document.querySelector('#chooseEigth').checked) sum += 27.59;

    let sumAndDelivery = sum + deliveryValue;
    sumAndDelivery = sumAndDelivery.toFixed(2);
    document.querySelector('#showTotal').innerHTML = sumAndDelivery;

}

// Uncheck
const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', function clearRadio() {
    uncheck();
    document.querySelector('#showDelivery').innerHTML = '';
    document.querySelector('#showTotal').innerHTML = ''; 
});

function uncheck() {
    let uncheck = document.querySelectorAll('input');
    uncheck.forEach(item => {
        if (item.type === 'checkbox') {
            item.checked = false;
        }
    })
}

// Animation
gsap.to('.head, .under-title', {
    scrollTrigger: {
        trigger: '.main-container',
        start: 'top top',
        scrub: true
    }, 
    opacity: 1, 
    scale: 2, 
    duration: 3})    

gsap.registerPlugin(ScrollTrigger)
gsap.fromTo('.info-delivery-card', {
    scrollTrigger: {
        trigger: '.about-delivery-container',
        start: 'top'
    },
    opacity: 0,
    scale: 0
}, {
    scrollTrigger: {
        trigger: '.about-delivery-container',
        start: 'top'
    },
    opacity: 1,
    rotate: 360,
    scale: 1,
    duration: 2
})

gsap.fromTo('.flip-card', {
    scrollTrigger: {
        trigger: '.group-of-cakes-section',
        start: '-=30% top',
        end: '+=300px'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.group-of-cakes-section',
        start: '-=30% top',
        end: '+=300px'
    },
    opacity: 1,
    duration: 2,
    stagger: .5
})

if (window.innerWidth < 1200) {
    let move = 100;
    gsap.to('.img-donuts', {
        repeat: -1,
        yoyo: true,
        ease: 'back', 
        rotation: 260,
        duration: 5,
        delay: 1,
        stagger: .7,
        x: function(i) {
            if(i%2 === 1) return -move;
            else return move;
        }
    })
} else {
    let move = 500;
    gsap.to('.img-donuts', {
        repeat: -1,
        yoyo: true,
        ease: 'back', 
        rotation: 260,
        duration: 5,
        delay: 1,
        stagger: .7,
        x: function(i) {
            if(i%2 === 1) return -move;
            else return move;
    }
})
}

gsap.to('.btn-call', {
    scale: 1.2,
    duration: 1,
    repeat: -1,
    yoyo: true
})




