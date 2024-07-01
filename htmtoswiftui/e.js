const { exec } = require('child_process');

function openEmptyWindow() {
  const command =
    process.platform === 'darwin'
      ? 'open -na "Google Chrome" --args --new-window --app=https://example.com'
      : '';

  if (command) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening an empty window: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Window opening error: ${stderr}`);
        return;
      }
      console.log('Empty window opened successfully');
    });
  } else {
    console.error('Unsupported platform');
  }
}

openEmptyWindow();
