
const faqActive = el => {
	el.addEventListener('click', ()=>{
		el.querySelector('dd').classList.toggle('active')
    el.querySelector('dt').classList.toggle('pseudo-icon')
	})
}


export {faqActive};

