const handleToDetail = (itemId) => {
  localStorage.setItem("productid", JSON.stringify(itemId));
  window.location.href = "/Blog/detail.html";
};

const renderListBlog = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data?.map((item) => {
      document.getElementById("root").innerHTML += `
        <li>
           <a href="/Blog/detail.html" onclick="localStorage.setItem('productid', JSON.stringify(${item.id}))">
            <img src=${item.image} />
            <p>${item.title}</p>
            <p>${item.description}</p>
           </a>
        </li>
        `;
    });
  } catch (error) {
    alert("Sistem lagi bermasalah");
  }
};

renderListBlog();

// dom action
