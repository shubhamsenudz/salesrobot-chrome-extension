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
    const connectButtons = document.querySelectorAll('button[aria-label^="Invite"][aria-label$="to connect"]');
    
    let connectRequestsSent = false;

    connectButtons.forEach((button) => {
      const buttonText = button.querySelector('.artdeco-button__text')?.textContent.trim();
      
      if (buttonText === 'Connect') {
        button.click();
        console.log('Connection request sent!');

        setTimeout(() => {
          const addNoteDialog = document.querySelector('.compose-invite__container');
          
          if (addNoteDialog) {
            const sendWithoutNoteButton = addNoteDialog.querySelector('button[aria-label="Send without a note"]');
            if (sendWithoutNoteButton) {
              sendWithoutNoteButton.click();
              console.log('Sent connection request without a note!');
            }
          }

          const sendWithoutNoteModalButton = document.querySelector('button[aria-label="Send without a note"]');
          if (sendWithoutNoteModalButton) {
            sendWithoutNoteModalButton.click();
            console.log('Clicked "Send without a note" in the modal.');
          }
        }, 1000); 

        let waitTime = Math.floor(Math.random() * 5000) + 5000;
        setTimeout(() => {}, waitTime);

        connectRequestsSent = true;
      }
    });

    if (!connectRequestsSent) {
      goToNextPage();
    }

  }, 1000);
}

function goToNextPage() {
  const paginationButtons = document.querySelectorAll('.artdeco-pagination__indicator');

  const currentPageButton = Array.from(paginationButtons).find(button => button.classList.contains('active'));
  if (currentPageButton) {
    const nextPageButton = currentPageButton.nextElementSibling;
    
    if (nextPageButton) {
      nextPageButton.querySelector('button').click();
      console.log('Moving to next page...');
    } else {
      console.log('No more pages to navigate.');
      clearInterval(interval);
    }
  }
}

function stopConnecting() {
  clearInterval(interval);
  console.log('Stopped connection requests');
}
