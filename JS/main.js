window.addEventListener("DOMContentLoaded", e => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const btn = document.getElementById("btn");


  let emails = "ivan@gmail.com";
  let passwords = "123456";
  name.value = localStorage.getItem("name");
  email.value = localStorage.getItem("email");
  password.value = localStorage.getItem("password1");
  password2.value = localStorage.getItem("password2");

  

  name.addEventListener("change", () => {
  localStorage.setItem("name", name.value);
  namecheck();
});

email.addEventListener("change", () => {
  localStorage.setItem("email", email.value);
  emailcheck(); 
});

password.addEventListener("change", () => {
  localStorage.setItem("password1", password.value);
  passcheck(); 
  passcheck2(); 
  emptyCheck();
});



password2.addEventListener("change", () => {
  localStorage.setItem("password2", password2.value);
  passcheck2();
});
  


  const outName = document.getElementById("outName");
  const outEmail = document.getElementById("outEmail");
  const outPass1 = document.getElementById("outPass1");
  const outPass2 = document.getElementById("outPass2");

  let namef = false;
  let emailf = false;
  let passf = false;
  let pass2f = false;

  function passcheck() {
    if (password.value.length < 6) {
      outPass1.style.color = "red";
      outPass1.textContent = "Password must be at least 6 characters long";
      passf = false;
    } 
    else if(password.value != passwords){
      outPass1.style.color = "red";
      outPass1.textContent = "Wrong password";
      passf = false;
    }
    else {
      outPass1.textContent = "";
      passf = true;
    }
  }

  function passcheck2() {
    if (password.value != password2.value) {
      outPass2.style.color = "red";
      outPass2.textContent = "The passwords must be the same";
      pass2f = false;
    } else {
      outPass2.textContent = "";
      pass2f = true;
    }
  }

  function namecheck() {
    if (name.value == "") {
      outName.style.color = "red";
      outName.textContent = "The field must be filled out";
      namef = false;
    } else if (name.value.length < 2) {
      outName.style.color = "red";
      outName.textContent = "It must be a real name";
      namef = false;
    } else {
      outName.textContent = "";
      namef = true;
    }
  }

  function emailcheck() {
    if (email.value == "") {
      outEmail.style.color = "red";
      outEmail.textContent = "The field must be filled out";
      emailf = false;
    }
     else {
      const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!reg.test(email.value)) {
        outEmail.style.color = "red";
        outEmail.textContent = "Enter a valid email address";
        emailf = false;
      }
      else if(email.value != emails)
      {
        outEmail.style.color = "red";
        outEmail.textContent = "Wrong email";
        emailf = false;
      }
      else {
        outEmail.textContent = "";
        emailf = true;
      }
    }
  }
 
  function emptyCheck() {
    if (password.value == "") {
      outPass1.style.color = "red";
      outPass1.textContent = "The field must be filled out";
      passf = false;
    }
    if (password2.value == "") {
      outPass2.style.color = "red";
      outPass2.textContent = "The field must be filled out";
      pass2f = false;
    }
  }

  btn.addEventListener("click", e => {
    namecheck();
    emailcheck();
    emptyCheck();
  
    if (namef && emailf && passf && pass2f) {
      alert("Registration complete");
    }
  });
});