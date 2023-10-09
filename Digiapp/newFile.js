data.content.map((item) => {
  listContainer.innerHTML += `
  <li id="item-1">
    <img
      src=${item.image}
      alt=""
    />
    <p>${item.name}</p>
  </li>
  `;
});
