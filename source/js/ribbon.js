// const ribbon = document.querySelector(".ribbon");

// const Ribbon = {

	
	
// 	count: Number(ribbon.querySelector(".ribbon__wrapper").dataset.count),
// 	parent: ribbon.querySelector(".ribbon__wrapper"),
// 	text: ribbon.querySelector(".ribbon__text"),
// 	bgColor: ribbon.querySelector(".ribbon__wrapper").dataset.bg,
// 	color: ribbon.querySelector(".ribbon__wrapper").dataset.color,

// 	setBgColor: function (color) {
// 		// this.parent.style.backgroundColor = this.bgColor;
//     ribbon.style.backgroundColor = this.bgColor;
//     ribbon.style.color = this.color;
// 	},

// 	ribbonTextGenerator: function (text, parent, count) {
// 		for (let i = 0; i <= count; i++) {
// 			parent.appendChild(text.cloneNode(true));
// 		}
// 	}
// };
const Ribbon = (ribbon) => {

	const count = Number(ribbon.querySelector(".ribbon__wrapper").dataset.count)
	const parent = ribbon.querySelector(".ribbon__wrapper")
	const text = ribbon.querySelector(".ribbon__text")
	const bgColor = ribbon.querySelector(".ribbon__wrapper").dataset.bg
	const color = ribbon.querySelector(".ribbon__wrapper").dataset.color

	const setBgColor = (bgColor, color) => {
    ribbon.style.backgroundColor = bgColor;
    ribbon.style.color = color;
	}

	const ribbonTextGenerator = (text, parent, count) => {
		for (let i = 0; i <= count; i++) {
			parent.appendChild(text.cloneNode(true));
		}
	}

	setBgColor(bgColor, color)
	ribbonTextGenerator(text, parent, count)

}

export { Ribbon }