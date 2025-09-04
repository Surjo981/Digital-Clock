//Time functionality
function updateClock() {
    const date = new Date();
    const dateString = date.toDateString();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampmEl = 'AM';

    if (hours >= 12) {
        ampmEl = 'PM';
        if (hours > 12) hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;

    const timeString = `${hours} : ${minutes} : ${seconds} ${ampmEl}`;

    document.querySelector('.time-container').textContent = timeString;
    document.querySelector('.date-container').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();

// Fullscreen functionality

const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      alert(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});

