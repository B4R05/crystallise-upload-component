### About

This is a dummy Upload component example with dummy features and no useful API.

### Running Locally

- Clone the repo locally
- `cd` into the repo and run `npm install`
- Run `npm start` to start the project live

### Notes

- The slider, button, upload feeatures etc are obviously dummy at this point and are just for demo purposes.

- In production, for uploading a file, I would make use of axios `onUploadProgress` property in my axios instance and use that to update local state for the progress bar rather than a dummy `setInterval`
- For better UX, I would definitely disable the 'Upload' button and the compression slider during file upload
