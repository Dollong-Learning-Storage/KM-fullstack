const DIGIMON_DATA = [
  {
    id: 1,
    name: "Garummon",
    href: "https://www.digi-api.com/api/v1/digimon/1",
    image: "https://www.digi-api.com/images/digimon/w/Garummon.png",
  },
  {
    id: 2,
    name: "Craniummon",
    href: "https://www.digi-api.com/api/v1/digimon/2",
    image: "https://www.digi-api.com/images/digimon/w/Craniummon.png",
  },
  {
    id: 3,
    name: "Holy Angemon Agus",
    href: "https://www.digi-api.com/api/v1/digimon/3",
    image: "https://www.digi-api.com/images/digimon/w/Holy_Angemon.png",
  },
  {
    id: 4,
    name: "Agus",
    href: "https://www.digi-api.com/api/v1/digimon/3",
    image: "https://www.digi-api.com/images/digimon/w/Holy_Angemon.png",
  },
  {
    id: 5,
    name: "Agus",
    href: "https://www.digi-api.com/api/v1/digimon/3",
    image: "https://www.digi-api.com/images/digimon/w/Holy_Angemon.png",
  },
];

const listContainer = document.querySelector(".list-content");

// // iterasi 1 -> item -> DIGIMON_DATA[0]
// let item = DIGIMON_DATA[0];
// listContainer.innerHTML += `<p>${item.name}</p>`;

// // iterasi 2 -> item -> DIGIMON_DATA[1]
// item = DIGIMON_DATA[1];
// listContainer.innerHTML += `<p>${item.name}</p>`;

// // iterasi 3 -> item -> DIGIMON_DATA[2]
// item = DIGIMON_DATA[2];
// listContainer.innerHTML += `<p>${item.name}</p>`;

DIGIMON_DATA.map((item) => {
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

// DIGIMON_DATA.map((item) => {
//   listContainer.innerHTML += `<p>${item.name}</p>`;
// });

document.querySelector("#click-btn").textContent = "Click Button";
