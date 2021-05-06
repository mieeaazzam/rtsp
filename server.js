const Stream = require('./src/videoStream')

const stream = new Stream({
    name: 'RtspStreamTest',
    url: 'rtsp://10.0.1.88:554/',
    port: 10086
})

stream.start()
