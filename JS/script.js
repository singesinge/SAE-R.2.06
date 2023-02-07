function updateTime() {
    const timeDisplay = document.querySelector('#time');
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  setInterval(updateTime, 1000);