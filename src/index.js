import './styles/style.scss';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import './img/icon-arrow-left.png';
import './img/icon-arrow-right.png';
import './img/logo-short.png';
import './img/logo.png';
import './img/mp4.png';
import './img/p1.png';
import './img/p2.png';
import './img/p3.png';
import './img/p5.png';
import './img/ph1.png';
import './img/ph2.png';
import './img/ph3.png';
import './video/example_vid.mp4';
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-auto-slide .gallery__image--slider').forEach(function (element) {
        let splide = new Splide(element.querySelector('.splide'), {
            type: 'loop',
            autoplay: true,
            drag: false,
            dragAngleThreshold: 0,
            pauseOnHover: false,
            arrows: false,
            pagination: false,
            interval: 4000,
        }).mount();
    });

    new Splide(document.querySelector('.gallery--overflow-slider .splide'), {
        type: 'slide',
        perPage: 1,
        fixedWidth: '40vw',
        width: '100vw',
        pagination: false,
    }).mount()

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let currentScroll = document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            this.document.querySelectorAll('.nav-bar__option').forEach((element) => {
                element.classList.add('nav-bar__option--fade')
            })
        } else {
            if (currentScroll === 0) {
                this.document.querySelectorAll('.nav-bar__option').forEach((element) => {
                    element.classList.remove('nav-bar__option--fade')
                })
            }
        }
        lastScrollTop = currentScroll;
    });

})


