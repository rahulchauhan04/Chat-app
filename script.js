let username = "";
const joinChat = document.getElementById("join-chat");
const usernameInput = document.getElementById("username-input");
const form = document.getElementById("form");
const groupChat = document.getElementById("group-chat");

joinChat.addEventListener("click", (e) => {
     e.preventDefault();
     if (usernameInput.value) {
          username = usernameInput.value;
          form.style.display = "none";
          groupChat.style.display = "block";
          // alert('Chat Page Loading....');
     }
     else {
          alert("Please enter a non empty username");
     }
})