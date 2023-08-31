import html from "./index.html";
import "./index.scss";

function loaderPage() {
  const chatBox = document.querySelector(".one");
  const chatServerBox = document.querySelector(".two");
  const messageInput = document.querySelector(".input");
  const sendButton = document.querySelector(".button");

  const ws = new WebSocket("ws://localhost:3000"); 


  ws.addEventListener("open", (event) => {
    console.log("WebSocket connection established.");
  });


  ws.addEventListener("message", (event) => {
    const message = event.data;
    chatServerBox.innerHTML += `<li>${message}</li>`;
    chatServerBox.scrollTop = chatBox.scrollHeight;
  });

  
  sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    chatBox.innerHTML += `<li>${message}</li>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    ws.send(message); 
    messageInput.value = ""; 
  });
}
window.addEventListener("load", loaderPage);

export default html;
