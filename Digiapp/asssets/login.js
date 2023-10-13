// https://65268f2b917d673fd76c86db.mockapi.io/:endpoint

const BASE_API = "https://65268f2b917d673fd76c86db.mockapi.io/";

const fetcher = async ({ endpoint = "", config = {} }) => {
  let result = {
    data: [],
    error: {},
  };

  try {
    const response = await fetch(`${BASE_API}/${endpoint}`, config);
    const data = await response.json();

    console.log(data, "data");

    result.data = data;
  } catch (error) {
    result.error = error;
  }

  return result;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  const { data } = await fetcher({
    endpoint: "users",
  });

  const isUserExist = data?.find(
    (item) => item.email === inputEmail && item.password === inputPassword
  );

  if (!isUserExist) return alert("Email dan Password mu salah");

  localStorage.setItem(
    "usr",
    JSON.stringify({
      id: isUserExist.id,
      name: isUserExist.name,
    })
  );
  return alert("Berhasil login");
};

document.getElementById("form").onsubmit = handleSubmit;
