function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});;
$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});;;
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());},
};
		let body = document.querySelector("body");
if (isMobile.any()) {
		body.classList.add("touch");
		let arrow=document.querySelectorAll(".arrow");
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add("parent");
		arrow[i].addEventListener("click", function() {
			subMenu.classList.toggle("open");
			thisArrow.classList.toggle("active");
		})
	}
}else {
	body.classList.add("mouse");
	let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
		let thisLink=arrow[i].previousElementSibling;
		let subMenu=arrow[i].nextElementSibling;
		let thisArrow=arrow[i];

		thisLink.classList.add('parent');
	arrow[i].addEventListener('click', function(){
		subMenu.classList.toggle('open');
		thisArrow.classList.toggle('active');
	});
}
};
const rangeSlider = document.getElementById("range-slider");

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [8000, 95000],
		connect: true,
		step: 1,
		range: {
			'min': [8000],
			'max': [95000]
		}
	});
	const input0 = document.getElementById("input-0");
	const input1 = document.getElementById("input-1");
	const inputs = [input0, input1];
	rangeSlider.noUiSlider.on("update", function(values, handle){
		inputs[handle].value = Math.round(values[handle])
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider.noUiSlider.set(arr)
	};
	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

const rangeSlider1 = document.getElementById("range-slider1");

if (rangeSlider1) {
	noUiSlider.create(rangeSlider1, {
		start: [250, 1000],
		connect: true,
		step: 1,
		range: {
			'min': [250],
			'max': [1000]
		}
	});
	const input1_0 = document.getElementById("input1-0");
	const input1_1 = document.getElementById("input1-1");
	const inputs1 = [input1_0, input1_1];
	rangeSlider1.noUiSlider.on("update", function(values, handle){
		inputs1[handle].value = Math.round(values[handle])
	});

	const setRangeSlider1 = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider1.noUiSlider.set(arr)
	};
	inputs1.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider1(index, e.currentTarget.value);
		});
	});
}

const rangeSlider2 = document.getElementById("range-slider2");

if (rangeSlider2) {
	noUiSlider.create(rangeSlider2, {
		start: [7, 75],
		connect: true,
		step: 1,
		range: {
			'min': [7],
			'max': [75]
		}
	});
	const input2_0 = document.getElementById("input2-0");
	const input2_1 = document.getElementById("input2-1");
	const inputs2 = [input2_0, input2_1];
	rangeSlider2.noUiSlider.on("update", function(values, handle){
		inputs2[handle].value = Math.round(values[handle])
	});

	const setRangeSlider2 = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider2.noUiSlider.set(arr)
	};
	inputs2.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider2(index, e.currentTarget.value);
		});
	});
}
;
