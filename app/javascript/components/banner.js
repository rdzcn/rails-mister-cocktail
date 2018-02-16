import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["D", "DE", "DEL", "DELI", "DELIC", "DELICI", "DELICIO", "DELICIOU", "DELICIOUS"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };