import html from "./index.html";
import "./index.scss";

function loaderPage() {
  const socket = new WebSocket("wss://ws.postman-echo.com/raw");
  const btnInput = document.querySelector(".button");
  socket.addEventListener("open", (event) => {
    console.log("connecting", event);
  });

  socket.addEventListener("message", (event) => {
    const messagesContainer = document.querySelector(".one");
    const messageElement = document.createElement("li");
    messageElement.textContent = event.data;
    messagesContainer.appendChild(messageElement);
  });

  btnInput.addEventListener("click", () => {
    const messageInput = document.querySelector(".input");
    const message = messageInput.value;

    if (message.trim() !== "") {
      socket.send(message);
      const messagesContainer = document.querySelector(".two");
      const userMessageElement = document.createElement("li");
      userMessageElement.textContent = message;
      messagesContainer.appendChild(userMessageElement);

      messageInput.value = "";
    }
  });
  btnInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      sendMessage();
      event.preventDefault(); 
    }
  });
  

}
window.addEventListener("load", loaderPage);

export default html;
