import Peer from "simple-peer";
import io from "socket.io-client";

const baseUrl = "http://localhost:3001";
export const socket = io(baseUrl);


export const joinRoom = (room) => {
    socket.emit("joinCall", { room })
}

export default Peer;