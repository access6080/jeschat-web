import io from "socket.io-client";

const baseUrl = "https://jeschat.herokuapp.com";

export const socket = io(baseUrl);

export const joinRoom = (username, room) => {
    socket.emit("joinChat", {username, room})
}

export const emitMessage = (message) => {
    socket.emit("newMessage", {message})
}
