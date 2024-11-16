let interval;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startConnecting') {
    startConnecting();
  } else if (request.action === 'stopConnecting') {
    stopConnecting();
  }
});

function startConnecting() {
  console.log('Starting connection requests...');
  interval = setInterval(() => {
    const connectButton = document.querySelector('button[data-control-name="connect"]');
    if (connectButton) {
      connectButton.click();
      console.log('Connection request sent!');
    
      let waitTime = Math.floor(Math.random() * 5000) + 5000;
      setTimeout(() => {}, waitTime);
    }
  }, 1000); 
}

function stopConnecting() {
  clearInterval(interval);
  console.log('Stopped connection requests');
}
