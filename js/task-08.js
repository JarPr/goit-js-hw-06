const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const {elements:{email, password}} = form;
  // const email = form.elements.email;
  // const password = form.elements.password;
   
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  const showData = { email: email.value, password: password.value };
  console.log(showData);
  form.reset();
}





// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit );

// function onFormSubmit(event) {
//     event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);
  
//   formData.forEach((value, name) => {
//       console.log(`${name}:`, value);
      
//       if (value === "") {
//     alert("Please fill in all the fields!");
//   }
//   });
//     document.querySelector('.login-form').reset();    
// }

