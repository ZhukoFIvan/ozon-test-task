let progress = document.querySelector('.progress')
let inputValue = document.querySelector('.percent').value
let animate = document.getElementById('switch')
let hide = document.getElementById('switch2')
let progressStartValue = inputValue
let progressEndValue
let speed = 10

const handleChange = (input) => {
	if (input.value < 0) {
		input.value = 0
	}
	if (input.value > 100) {
		input.value = 100
	}
	progressEndValue = input.value
	let changePercent = setInterval(() => {
		if (progressEndValue <= progressStartValue) {
			animate.checked
				? progressStartValue--
				: (progressStartValue = progressEndValue)
			progress.style.background = `conic-gradient(blue ${
				progressStartValue * 3.6
			}deg, rgb(226, 226, 226) 0deg)`
		} else {
			animate.checked
				? progressStartValue++
				: (progressStartValue = progressEndValue)
			progress.style.background = `conic-gradient(blue ${
				progressStartValue * 3.6
			}deg, rgb(226, 226, 226) 0deg)`
		}

		if (progressStartValue == progressEndValue) {
			clearInterval(changePercent)
		}
	}, speed)
}

const setHidden = (toggle) => {
	hide.checked ? (progress.style.opacity = '0') : (progress.style.opacity = '1')
}
