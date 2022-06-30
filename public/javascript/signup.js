const signupFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-signup");
    const passwordEl = document.querySelector("#password-signup");
  
    fetch("/api/users", {
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
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);