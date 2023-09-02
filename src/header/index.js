import html from "./index.html";
import "./index.scss";

export function getName() {
  const nameUser = document.querySelector(".name");
  const profileImg = document.querySelector(".profile-img");

  function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
      nameUser.innerHTML = person;
    }
    else if(person == null){
       // ===let person = prompt("Please enter your name");
        alert("error");
    }
  }
  myFunction();
}

export default html;
