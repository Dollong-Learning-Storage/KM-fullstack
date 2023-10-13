// .list-content
const listContainer = document.getElementsByClassName("list-content")[0];

const BASE_API = "https://65268f2b917d673fd76c86db.mockapi.io/";

const fetcher = async ({ endpoint = "", config = {} }) => {
  const response = await fetch(`${BASE_API}/${endpoint}`, config);
  const data = await response.json();

  return {
    data,
  };
};

// const fetcher = async ({ endpoint = "", config = {} }) => {
//   const response = await fetch(`${BASE_API}/${endpoint}`, config);
//   const data = await response.json();

//   data.content.map((item) => {
//     listContainer.innerHTML += `
//     <li id="item-1">
//       <img
//         src=${item.image}
//         alt=""
//       />
//       <p>${item.name}</p>
//     </li>
//     `;
//   });
// };

fetcher();
