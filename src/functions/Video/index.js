import Peer from "simple-peer";
import io from "socket.io-client";

const baseUrl = "https://jeschat.herokuapp.com/";
export const socket = io(baseUrl);


export const joinRoom = (room) => {
    socket.emit("joinCall", { room })
}

export default Peer;