document.addEventListener("DOMContentLoaded", function () {
  const singupForm = document.getElementById("form");
  const errorConatiner = document.getElementById("Error-container");
  console.log(singupForm + " " + errorConatiner);

  let userDetails = {};

  singupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // to get values from user
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("CPassword").value;

    console.log(
      username + " " + email + " " + password + " " + confirmPassword
    );

    if (!username || !email || !password || !confirmPassword) {
      const para = document.createElement("p");
      para.innerText = "Error: All fields are mandatory!";
      para.style.textAlign = "center";
      para.style.color = "blue";

      errorConatiner.appendChild(para);
      return;
    }

    if (password !== confirmPassword) {
      const para = document.createElement("p");
      para.innerText = "Error: Your passwords are not matching!";
      para.style.textAlign = "center";
      para.style.color = "blue";
      errorConatiner.appendChild(para);
      return;
    }

    //local storage generate access token
    const accessToken = generateAccessToken();
    //store it
    const userDetails = {
      username,
      email,
      accessToken,
      password,
    };
    console.log(username, email, password, accessToken);
    // Convert user details to JSON and store in local storage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
  // Open the index2.html page with a query parameter
  window.location.href =
  'index2.html?userDetails=' + encodeURIComponent(JSON.stringify(userDetails));

    // alert("Signup successful!");

    // window.location.href = 'index2.html';
    // Open the profile popup
    // const profilePopup = window.open(index2.html);
    // if (!profilePopup) {
    //   alert("Please allow pop-ups to view your profile.");
    // }
  });
  function generateAccessToken() {
    // This function generates a random access token (16-byte string)
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const tokenLength = 16;
    let token = "";

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      token += charset.charAt(randomIndex);
    }

    return token;
  }
});
