const dogApi = fetch("https://dog.ceo/api/breeds/image/random");

// dogApi.then((data) => console.log(data));

// dogApi
//   .then((res) => res.json())
//   .then((data) => {
//     document.getElementById("dog").src = data.message;
//   });

// ==================================

// async function fetchData() {
//   const res = await dogApi;

//   const data = await res.json();

//   document.getElementById("dog").src = data.message;
// }

// fetchData();

// =========================================

// const fetchDogData = new Promise((resolve, reject) => {
//   if (!dogApi.status === 200) {
//     return reject("server failed");
//   }

//   setTimeout(() => {
//     resolve(dogApi);
//   }, 3000);
// });

// fetchDogData
//   .then((res) => res.json())
//   .then((data) => (document.getElementById("dog").src = data.message))
//   .catch((err) => {
//     console.log(err.message);
//   });

// ===========================================

async function fetchData() {
  try {
    const res = await dogApi;

    const data = await res.json();

    document.getElementById("dog").src = data.message;
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
