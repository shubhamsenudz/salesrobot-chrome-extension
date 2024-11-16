Salesrobot Chrome Extension
This Chrome extension automatically sends connection requests to people on LinkedIn based on a specific search query, for example, CEOs in Bangalore. The extension interacts with LinkedIn's interface to click the "Connect" buttons on profiles in the search results, waits for a random time between 5-10 seconds between each request, and skips people with the "Message" button instead of "Connect."

Features:
Automatically sends connection requests to people listed on LinkedIn search results.
Skips profiles with a "Message" button (instead of "Connect").
Waits a random time (between 5-10 seconds) between each request to mimic human behavior.
Works only on the first page of LinkedIn search results (this feature can be expanded in future versions).
Includes minimal and clean code to perform the task efficiently.
How It Works:
Search on LinkedIn:

Perform a search on LinkedIn, for example: "CEOs in Bangalore."
Activate the Extension:

The Chrome extension will automatically detect the "Connect" buttons on the page and click them.
Skipping the "Message" Button:

If a profile shows a "Message" button instead of a "Connect" button, the extension will skip that profile.
Random Time Delay:

After sending a connection request, the extension waits for a random time between 5-10 seconds before sending the next request. This ensures that the connection requests don't appear to be sent in a batch, mimicking human behavior.
Pagination:

My Approach:
HTML DOM Manipulation:

I used querySelector to find elements like the "Connect" button and "Send without a note" buttons.
This allows us to programmatically interact with the page elements.
Random Time Delays:

To avoid detection by LinkedIn as a bot, I introduced a random delay between each connection request (between 5 to 10 seconds).
Pagination Handling:

The script checks for pagination buttons at the bottom of the page and automatically clicks the "Next" button if the current page has no more connection requests to send.
Skipping the "Message" Button:

If a profile shows a "Message" button, I ensure the script skips that profile and does not attempt to send a connection request.

If the connection requests on the current page are finished, the extension will automatically move to the next page and repeat the process.
