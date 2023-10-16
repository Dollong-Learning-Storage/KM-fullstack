const renderDetailContent = async () => {
  const itemId = localStorage.getItem("productid");

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
    const data = await response.json();

    document.getElementById("root").innerHTML += `
    <li>
       <button >
        <img src=${data.image} />
        <p>${data.title}</p>
        <p>${data.description}</p>
       </button>
    </li>
    `;
  } catch (error) {
    alert("Sistem lagi bermasalah");
  }
};

renderDetailContent();
