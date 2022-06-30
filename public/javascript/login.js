const loginFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-login");
    const passwordEl = document.querySelector("#password-login");
  
    fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          username: usernameEl.value.trim(),
          password: passwordEl.value.trim(),
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then(function () {
        document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);