document.getElementById('startBtn').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "startConnecting" });
    });
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('stopBtn').style.display = 'block';
  });
  
  document.getElementById('stopBtn').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "stopConnecting" });
    });
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('startBtn').style.display = 'block';
  });
  