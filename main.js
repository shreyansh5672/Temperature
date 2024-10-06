const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");


let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update the timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
}


function change(){

    document.getElementById("watch").style.display = "block"
    document.getElementById("cntrl").style.display = "none"
    document.getElementById("nwCntrl").style.display = "block"
    document.getElementById("controls").style.display = "block"
    clearInterval(interval)
    interval = null;
    time_el.innerText = '00:00:00'
    
    // start();
    
}
function update_timer(){
    if(time == 0) {
        alert("TIME UP");
        document.getElementById("watch").style.display = "none"
        document.getElementById("nwCntrl").style.display = "block"
        clearInterval(interval)
        interval = null;
    }    
    if(time>0){
        let min = Math.floor(time/60);
        let sec = Math.floor(time%60)
        if(min<10) min = '0'+min;
        if(sec<10) sec = '0'+sec
        time_el.innerText = `${min}:${sec}`
        time--;
    }
}
let time;
function newChange(){
    clearInterval(interval);
    time_el.innerText = '00:00'
    document.getElementById("watch").style.display = "block"
    document.getElementById("controls").style.display = "none"
    document.getElementById("cntrl").style.display = "block"
    document.getElementById("nwCntrl").style.display = "none"
    let start = prompt("Enter start time in minutes");
    time = Math.floor(start * 60);
    interval = setInterval(update_timer,1000)

}
