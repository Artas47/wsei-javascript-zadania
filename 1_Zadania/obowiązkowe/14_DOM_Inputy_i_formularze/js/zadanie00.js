function validateForm() {
  //zadanie 1
  const email = document.forms["form"]["email"].value;
  if (!email.includes("@")) {
    addError("Email musi posiadać znak @");
    return false;
  }

  //zadanie 2
  const name = document.forms["form"]["name"].value;
  if (name.length < 6) {
    addError("Twoje imię jest za krótkie");
    return false;
  }

  //zadanie 3
  const surname = document.forms["form"]["surname"].value;
  if (surname.length < 6) {
    addError("Twoje nazwisko jest za krótkie");
    return false;
  }

  //zadanie 4
  const pass1 = document.forms["form"]["pass1"].value;
  const pass2 = document.forms["form"]["pass2"].value;

  if (!(pass1 === pass2) || pass1.length === 0 || pass2.length === 0) {
    addError("Hasła nie są takie same lub puste");
    return false;
  }

  //zadanie 5
  const checkbox = document.forms["form"]["agree"].checked;
  if (!checkbox) {
    addError("Musisz zaakceptować warunki");
    return false;
  }
  return true;
}

function addError(error) {
  const errorContainer = document.querySelector(".error-message");
  let newError = document.createElement("p");
  newError.innerHTML = error;
  errorContainer.appendChild(newError);
}
