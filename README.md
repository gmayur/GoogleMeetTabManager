# GoogleMeetTabManager
Google Chrome extension to automatically close inactive Google Meet landing tabs to help users manage their browser resources more efficiently.
# Google Meet Tab Manager

This Chrome extension automatically closes inactive Google Meet landing tabs and keeps track of the number of tabs closed.

> Note: This extension was created with the assistance of Claude 3.5 Sonnet and Cursor AI.

## Features

- Automatically closes inactive Google Meet landing tabs every 3 minutes
- Keeps a count of tabs closed in the last 16 hours
- Displays the count as a badge on the extension icon


## How It Works

1. The extension checks all open tabs every 3 minutes.
2. It identifies and closes any inactive tabs with URLs containing "meet.google.com/landing".
3. The number of closed tabs is tracked and displayed on the extension icon.
4. The counter resets every 16 hours to avoid inflated numbers over long periods.

## Installation

1. Clone this repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. I've also submitted this version to be published to Google Chrome Extension Store, but might not be able to keep up with updates or feature requests.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

