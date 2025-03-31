const timeHours = document.getElementById('hours');
const timeMinutes = document.getElementById('minutes'); 
const timeSeconds = document.getElementById('seconds');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

let seconds = 0, minutes = 0, hours = 0;

function numFormater(num) {
    return num.toString().padStart(2, '0');
}


function adjustTime(unit, change) {
    if (unit === 'hours') {
        hours = Math.max(0, Math.min(12, hours + change));
        timeHours.innerText = `${numFormater(hours)}`;
    }

    if (unit === 'minutes') {
        minutes = Math.max(0, Math.min(59, minutes + change));
        timeMinutes.innerText = `${numFormater(minutes)}`;
    }

    if (unit === 'seconds' ) {
        seconds = Math.max(0, Math.min(59, seconds + change));
        timeSeconds.innerText = `${numFormater(seconds)}`
    }
}

start.addEventListener('click', function() {
    document.querySelector('.clock').classList.add('hidden-button');
    
    timer = setInterval(() => {
        if (seconds === 1) {
            seconds = 59;
            if (minutes === 0){
                minutes = 59
                if (hours === 0){
                    alert('Time Out!');
                    resetTimer(); 
                    return;
                }else {
                    hours --;
                }
            }else{
                minutes --;
            }

        }else {
            seconds --;
        }
        console.log(timer)

        timeHours.innerText = `${numFormater(hours)}`;
        timeMinutes.innerText = `${numFormater(minutes)}`;
        timeSeconds.innerText = `${numFormater(seconds)}`

    }, 1000)

})

reset.addEventListener('click', function(){
    resetTimer();
    return
})


function resetTimer() {
    clearInterval(timer);

    hours = 0;
    minutes = 0;
    seconds = 0;

    timeHours.innerText = '00';
    timeMinutes.innerText = '00';
    timeSeconds.innerText = '00';

    document.querySelector('.clock').classList.remove('hidden-button');

}