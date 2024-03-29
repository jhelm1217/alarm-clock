let currentTime = new Date ();
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
const display = document.getElementById('clock');


hours.innerHTML = currentTime.getHours();
minutes.innerHTML = currentTime.getMinutes();
seconds.innerHTML = currentTime.getSeconds(); 


/* The local time */
function updateClock(){
    let currentTime = new Date ();
    hours.innerHTML = currentTime.getHours() % 12 || 12;; /* 12 hour time*/
    minutes.innerHTML = currentTime.getMinutes();
    seconds.innerHTML = currentTime.getSeconds();
};

setInterval(updateClock, 1000); /* have the clock running continuously */ 
updateClock();


let alarmInFutureButton = document.getElementById('alarmInFuture');
let snoozeButton = document.getElementById('snooze');
let stopButton = document.getElementById('stop');
let alarmInFuture = new Date ();

/*Alarm goes here*/

alarmInFutureButton.addEventListener('click', setAlarmInFuture);

function setAlarmInFuture() {
    alarmInFuture = new Date();
    alarmInFuture.setSeconds(alarmInFuture.getSeconds() + 5000); /*5 seconds in the future */
    console.log('Alarm', alarmInFuture);
    setTimeout(function() {
    alert('Wake up!');
    }, 5000);
}

/* Snooze Button*/
snoozeButton.addEventListener('click', snooze);

function snooze() {
    alarmInFuture.setSeconds(alarmInFuture.getSeconds() + 3000); /*snoozes alarm for 3 seconds*/
    console.log('Snooze', alarmInFuture);
}

/*Stop Alarm*/

stopButton.addEventListener('click', stop);

function stop() {
    clearTimeout(alarmInFuture);
    console.log('Stop Alarm');
}


// /*Alarm Sound*/

// // let audio = doucment.getElementById('alarmSound'); 
// alarmSound.play(); /* play the alarm*/

  

