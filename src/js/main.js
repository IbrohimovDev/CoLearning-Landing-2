//main.js file
// // Accordion
// const accardion = document.querySelectorAll('.accordion__contentBox')
// accardion.forEach( item => {
//     item.onclick = () =>{
//         item.classList.toggle('active')
//     }
// })


// Responsive menu
const menu = document.querySelector('.mobile-menu')
const burger = document.querySelector('.mobile-burger')
burger.onclick = () => {
  menu.classList.toggle('active')
  burger.classList.toggle('active')
}

// Hide mobile menu onclick anchor 
const anchor = document.querySelectorAll('.mobile-menu li')
anchor.forEach(item => {
  item.onclick = () => {
    menu.classList.remove('active')
    burger.classList.remove('active')
  }
})

// dropdown 
let selected = document.querySelector('.ad-selected-value')
let list = document.querySelector('.list')
let chevronDown = document.querySelector('.chevron-down')
let listItem = list.querySelectorAll('li')

selected.addEventListener('click', () => {
  chevronDown.classList.toggle('active')
  list.classList.toggle('active')
})

listItem.forEach(item => {
  item.addEventListener('click', () => {
    console.log(selected.innerText = item.innerText)
  })
})
// console.log(listItem)


/* If the user clicks anywhere outside the select box,
then close all select boxes: */

// Play, pause video onclick

let video = document.querySelector('.video')
let btn = document.querySelector('.play')

function Play() {
  if (video.paused) {
    video.play()
    btn.src = '../img/pause.png'
    btn.style.transition = 'all .3s ease'
  } else {
    video.pause()
    btn.src = '../img/play.png'
    btn.style.transition = 'all .3s ease'
  }
}

function hideBtn() {
  btn.style.display = 'none'
  btn.style.transition = 'all .3s ease'
}

function showBtn() {
  btn.style.display = 'block'
  btn.style.transition = 'all .3s ease'
}

// Play, pause video on scroll

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.target.classList = 'video') {
      if (entry.isIntersecting) {
        entry.target.play()
        btn.src = '../img/pause.png'
      } else {
        entry.target.pause()
        btn.src = '../img/play.png'
      }
    }
  })
}
let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('.video'))


// Tab
let tabs = document.querySelectorAll('.tab-btn'),
    contents = document.querySelectorAll('.tab-body');

tabs.forEach((tab, index) =>{
  tab.addEventListener('click', () =>{
    contents.forEach((content) => {
      content.classList.remove('active')
    })
    tabs.forEach((tab) => {
      tab.classList.remove('active')
      
    })
    contents[index].classList.add('active')
    tabs[index].classList.add('active')
  })
})



// // Swiper js
var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  spaceBetween: 38,

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1440: {
      slidesPerView: 3.5
    },
    1800: {
      slidesPerView: 4
    },
    2000: {
      slidesPerView: 5
    },
    2400: {
      slidesPerView: 5.5
    }
  },
});
var swiper = new Swiper(".blogSwiper", {
  freeMode: true,
  spaceBetween: 38,

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1366: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 3.5
    },
    1800: {
      slidesPerView: 4
    },
    2000: {
      slidesPerView: 5
    },
    2400: {
      slidesPerView: 5
    }
  },
});