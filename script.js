setInterval(setClock, 1000)

const handHours  =   document.querySelector('[data-hand-hours]');
const handMinutes  = document.querySelector('[data-hand-minutes]');
const handSeconds  = document.querySelector('[data-hand-seconds]');

function setClock()
{
	const currentDate = new Date()
	const secondsratio = currentDate.getSeconds()/ 60
	const minutesratio = (secondsratio + currentDate.getMinutes())/60
	const hoursratio= (minutesratio +currentDate.getHours()) /12
	    setRotation(handSeconds , secondsratio)
		setRotation(handMinutes , minutesratio)
	    setRotation(handHours , hoursratio)
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation',rotationRatio*360)
}

setClock()