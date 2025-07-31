let countdownInterval;

function startTimer() {
  const input = document.getElementById('start-time').value;
  if (!input) {
    alert("Please select a time.");
    return;
  }

  const [hours, minutes] = input.split(":");
  const now = new Date();
  const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

  const nextCoffeeTime = new Date(startTime.getTime() + 5 * 60 * 60 * 1000);

  document.getElementById('countdown').classList.remove('hidden');

  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const remaining = nextCoffeeTime - currentTime;

    if (remaining <= 0) {
  document.getElementById('timer').textContent = "It's coffee time! ☕";
  clearInterval(countdownInterval);
  
  if (Notification.permission === "granted") {
    new Notification("It's coffee time! ☕", {
      body: "Take a break and enjoy your cup.",
      icon: "https://em-content.zobj.net/source/microsoft-teams/337/hot-beverage_2615-fe0f.png"
    });
  }

  return;
}

    const hrs = Math.floor(remaining / (1000 * 60 * 60));
    const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remaining % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent =
      `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}
