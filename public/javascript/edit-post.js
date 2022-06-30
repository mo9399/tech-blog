const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  const editPostHandler = async function (event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;
  
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        post_body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  };
  
  const deletePostHandler = async function (event) {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector("#edit-post-form")
    .addEventListener("submit", editPostHandler);
  document
    .querySelector("#delete-btn")
    .addEventListener("click", deletePostHandler);