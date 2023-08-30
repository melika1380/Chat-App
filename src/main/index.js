import html from "./index.html";
import "./index.scss";

function loaderPage() {
  
const socket = new WebSocket(
  "ws://localhost:8080"
);

  const chatMessages = document.querySelector(".shopping-list");
  const messageInput = document.querySelector(".input");
  const sendButton = document.querySelector(".button");

  socket.addEventListener("open", (event) => {
    console.log("Connected to the server");

    sendButton.addEventListener("click", () => {
      const message = messageInput.value;
      socket.send(message);
      messageInput.value = "";
    });
  });

  socket.addEventListener("message", (event) => {
    const message = event.data;
    const messageElement = document.createElement("li");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
  });

}
window.addEventListener("load", loaderPage);

export default html;
