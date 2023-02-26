const register = async () => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  console.log("clicked");
  const FirstName = document.getElementById("first_name");
  const password = document.getElementById("password");
  const Email = document.getElementById("email");
  const LastName = document.getElementById("last_name");
  // formatting into capitalise case
  //creating the body object
  let Data = {
    FirstName: capitalize(FirstName.value),
    LastName: capitalize(LastName.value),
    password: password.value,
    Email: Email.value,
    username: capitalize(FirstName.value)+ "  " +capitalize(LastName.value)
  };

  // creating xhr request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/register");
  xhr.setRequestHeader("content-type", "application/json");
  await xhr.send(JSON.stringify(Data));

  LastName.value = "";
  FirstName.value = "";
  Email.value = "";
  password.value = "";
};
