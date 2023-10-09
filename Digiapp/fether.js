// .list-content
const listContainer = document.getElementsByClassName("list-content")[0];

const fetcher = async () => {
  const response = await fetch("https://digimon-api.com/api/v1/digimon");
  const data = await response.json();

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
};

fetcher();
