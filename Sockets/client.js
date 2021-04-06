// client side socket connection
const net = require("net")

const HOSTNAME = 'localhost'
const PORT = 3000

// connect to socket
const socket = net.connect(PORT, HOSTNAME)

// once connected, write to the socket (send data)
socket.write("World")

// function to listen to the data returned by the socket
socket.on("data", (data) => {
    console.log(data.toString())
})