import Swiper from './node_modules/swiper/swiper-bundle.js';
import './node_modules/swiper/swiper-bundle.css';
var swiper = new Swiper('.swiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});