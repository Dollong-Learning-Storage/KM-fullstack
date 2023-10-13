// https://65268f2b917d673fd76c86db.mockapi.io/:endpoint

const BASE_API = "https://65268f2b917d673fd76c86db.mockapi.io/";

const fetcher = async ({ endpoint = "", config = {} }) => {
  try {
    const response = await fetch(`${BASE_API}/${endpoint}`, config);
    const data = await response.json();

    return {
      data,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const handleSubmit = (e) => {
  console.log("tes");
  e.preventDefault();

  const inputName = document.getElementById("name").value;
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  fetcher({
    endpoint: "users",
    config: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      }),
    },
  });
};

document.getElementById("form").onsubmit = handleSubmit;
