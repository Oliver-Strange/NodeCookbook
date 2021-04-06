// create a TCP server using the net Node module
const net = require("net")

const HOSTNAME = 'localhost'
const PORT = 3000

// create the server passing port and hostname 
net.createServer((socket) => {
    console.log("Client connected.")
    // add socket event listeners
    socket.on('data', (name) => {
        socket.write(`Hello ${name}!`)
    })
})
.listen(PORT, HOSTNAME)


