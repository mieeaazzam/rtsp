const Stream = require('./src/videoStream')

const stream = new Stream({
    name: 'RtspStreamTest',
    url: 'rtsp://10.0.0.22:554/',
    port: 10086
})

stream.start()
