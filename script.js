//your JS code here. If required.
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let submit = document.querySelector("#submit");
let user;
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function checkExistingUser() {
  user = JSON.parse(localStorage.getItem("user") ? localStorage.getItem("user") : "{}");

  if (!isEmptyObject(user)) {
    createButton();
    document.querySelector("#existing").addEventListener("click", () => {
      alert(`Logged is as ${user.username}`);
    });
  }
}

function createButton() {
  let existingUser = document.createElement("button");
  existingUser.setAttribute("id", "existing");
  existingUser.innerText = "Login as existing user";
  submit.parentNode.append(existingUser);
}

function formSubmit() {
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      let name = username.value;
      let pass = password.value;
      if (name !== "" && pass !== "") {
        if (checkbox.checked) {
          user = {
            username: name,
            password: pass,
          };
          localStorage.setItem("user", JSON.stringify(user));
          alert(`Logged in as ${name}.`);
        } else {
          localStorage.clear();
          alert(`Logged in as ${name}.`);
        }
      }
    });
}
formSubmit();
checkExistingUser();