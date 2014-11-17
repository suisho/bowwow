var mic = require('microphone');

mic.startCapture({
  mp3output : false
});

mic.audioStream.on('data', function(data) {
    process.stdout.write(data);
});