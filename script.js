// let, var

const nama = "doltons";
const umurDariNama = 20; // number
const boxBuah = ["mangga", "anggur", "apel", "jeruk", "pisang"]; // array
const listMovie = ["Marvel", "Minion"];
const marvelMovie = {
  name: "Marvel",
};

// hitungan biasa - 1
const listSepuh = [
  "Yusuf",
  "Dika",
  "Afif",
  "Ilham",
  "Ahmad",
  [
    [20, 29],
    [21, 30],
  ],
  [
    {
      nama: "Ilham",
      umur: 20,
      isMarried: false,
      favFood: "bakso",
      listFavMovie: [],
    },
    {
      nama: "Yusuf",
      umur: 20,
      isMarried: false,
      favFood: "bakso",
      listFavMovie: [],
    },
  ],
  ["Apel", "Mangga"],
];

console.log(listSepuh[6][1].nama); // Yusuf

const sepuhIlham = {
  nama: "Ilham",
  umur: 20,
  isMarried: false,
  favFood: "bakso",
  listFavMovie: [],
};

// console.log(listSepuh[4]);
// console.log(sepuhIlham.favFood);

// init, condition, action
// for (let i = 0; i < 4; i++) {
//   console.log(boxBuah[i]);
// }

// for in
// for (const buah of boxBuah) {
//   console.log(buah);
// }

// for of
// for (const item in sepuh) {
//   console.log(sepuh[item]);
// }

// // loop 1
// const item = "nama";
// sepuh[item];
// // loop 2

// const item = "umur";
// sepuh[item];

// console.log(sepuh.nama);
// console.log(sepuh.umur);
// console.log(sepuh.isMarried);
// console.log(sepuh.favFood);

// console.log(boxBuah[0]);
// console.log(boxBuah[1]);
// console.log(boxBuah[2]);
// console.log(boxBuah[3]);

// loop
// for loop
// while loop
// for in / for of
