import html from "./index.html";
import "./index.scss";
import { getName } from "../header/index";

function loaderPage() {

  const socket = new WebSocket("wss://ws.postman-echo.com/raw");
  const btnInput = document.querySelector(".button");
  const userInput = document.querySelector(".input");

  function statueSocket(event) {
    console.log("connecting", event);
  }
  socket.addEventListener("open", statueSocket);

  function messageSocket(event) {
    const messagesContainer = document.querySelector(".one");
    const messageElement = document.createElement("li");
    messageElement.textContent = event.data;
    messagesContainer.appendChild(messageElement);
  }
  socket.addEventListener("message", messageSocket);

  function sendMessage() {
    const userInput = document.querySelector(".input");
    const message = userInput.value;
    if (message.trim() !== "") {
      socket.send(message);
      const messagesContainer = document.querySelector(".two");
      const userMessageElement = document.createElement("li");
      userMessageElement.textContent = message;
      messagesContainer.appendChild(userMessageElement);
      userInput.value = "";
    }
  }
  btnInput.addEventListener("click", sendMessage);

  function enterClick(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  userInput.addEventListener("keyup", enterClick);
}

window.addEventListener("load", loaderPage);

export default html;
