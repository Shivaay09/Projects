

const form = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
})

const sendData=(usernameVal,sRate,count)=>{
  if(sRate===count){
    location.href=`welcome.html?username=${usernameVal}` 
  }
}

const successMsg = (usernameVal) => {
  let formCon = document.getElementsByClassName('input-box');
  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === 'input-box success') {
      var sRate = 0 + i;
      sendData(usernameVal,sRate,count);
    }
    else {
      return false;
    }
  }
}

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
}
const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  if (usernameVal === "") {
    setErrorMsg(username, 'Please enter the username');
  }
  else if (usernameVal.length <= 3) {
    setErrorMsg(username, 'Length is too short');
  }
  else {
    setSuccessMsg(username);
  }

  if (email === "") {
    setErrorMsg(email, 'Please enter the email');
  }
  else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Email is not valid');
  }
  else {
    setSuccessMsg(email);
  }

  if (passwordVal === "") {
    setErrorMsg(password, 'Please enter the password');
  }
  else if (passwordVal.length <= 8) {
    setErrorMsg(password, 'Lenght is too short');
  }
  else {
    setSuccessMsg(password);
  }

  successMsg(usernameVal);

}

function setErrorMsg(input, errormsgs) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector('small');
  inputBox.className = 'input-box error';
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const inputBox = input.parentElement;
  inputBox.className = 'input-box success';
}