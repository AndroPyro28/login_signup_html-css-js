const errorFields = document.querySelectorAll(".error__message");
const form = document.querySelector(".form__container");

// const checkFullName = () => {
//   const fullName = document.querySelector("#fullName").value;
//   errorFields[0].textContent =
//     fullName.length <= 0 ? "Full name must be filled out" : "";
// };

// const checkEmail = () => {
//   const emailAddress = document.querySelector("#emailAddress").value;
//   const emailPattern =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const isValid = emailPattern.test(emailAddress);

//   errorFields[1].textContent =
//     emailAddress.length <= 0
//       ? "Email must be filled out"
//       : isValid
//       ? ""
//       : "Email is invalid";
// };

// const checkPassword = () => {
//   const password = document.querySelector("#password").value;

//   errorFields[2].textContent =
//     password.length <= 0
//       ? "password must be filled out"
//       : password.length < 10
//       ? "Password must contain 10 or more characters"
//       : "";
// };

// const checkConfirmationPassword = () => {
//   const confirmPassword = document.querySelector("#confirmPassword").value;
//   const password = document.querySelector("#password").value;

//   errorFields[3].textContent =
//     password !== confirmPassword
//       ? "password and confirmation password must be match"
//       : confirmPassword.length <= 0 ? "Confirmation password must be filled along with password" : "";
// };

form.addEventListener("reset", () => {
  errorFields.forEach((errorField) => {
    errorField.textContent = "";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailAddress = document.querySelector("#emailAddress").value;
  const fullName = document.querySelector("#fullName").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  if (fullName.length <= 0) {
    errorFields[0].textContent = "Fullname must be filled out!";
  } else {
    errorFields[0].textContent = "";
  }
  if (emailAddress.length <= 0) {
    errorFields[1].textContent = "Email must be filled out!";
  } else {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailPattern.test(emailAddress);

    if (!isValid) {
      errorFields[1].textContent = "Email is invalid!";
    } else {
      errorFields[1].textContent = "";
    }
  }

  if (password.length <= 0) {
    errorFields[2].textContent = "Password must be filled out!";
  } else {
    errorFields[2].textContent = "";
  }

  if (password.length < 10) {
    errorFields[2].textContent = "Password must contain 10 or more characters!";
  } else {
    errorFields[2].textContent = "";
  }

  if (confirmPassword != password || confirmPassword == "") {
    errorFields[3].textContent = "Password and confirm password must match!";
  } else {
    errorFields[3].textContent = "";
  }

  // errorFields.forEach((errorField) => {
  //   errorField.textContent = "";
  // });
});
