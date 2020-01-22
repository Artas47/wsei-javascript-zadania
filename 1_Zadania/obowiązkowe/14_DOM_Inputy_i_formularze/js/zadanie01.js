function toggle() {
  const checkbox = document.forms["form"]["invoice"].checked;
  if (checkbox) {
    document.querySelector("#invoiceData").style.display = "block";
  } else {
    document.querySelector("#invoiceData").style.display = "none";
  }
}
toggle();
