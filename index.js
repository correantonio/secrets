import {Ribbon} from './source/js/ribbon.js';
import {faqActive} from './source/js/faq.js';

const divs = document.querySelectorAll("dl > div")
const ribbons = document.querySelectorAll('.ribbon')


ribbons.forEach( ribbon => {
  Ribbon(ribbon)
} )

divs.forEach(div => {
  faqActive(div)
})