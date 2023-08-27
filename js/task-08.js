const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const {elements:{email, password}} = form;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  const showData = { email: email.value, password: password.value };
  console.log(showData);
  form.reset();
}


