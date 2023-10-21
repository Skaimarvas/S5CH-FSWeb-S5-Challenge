import axios from "axios";

const Card = (makale) => {
  const { anabaslik, yazarFoto, yazarAdi } = makale;

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = anabaslik;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const imgContainerDiv = document.createElement("div");
  imgContainerDiv.classList.add("img-container");

  const authorImg = document.createElement("img");
  authorImg.src = yazarFoto;

  imgContainerDiv.appendChild(authorImg);

  const authorSpan = document.createElement("span");
  authorSpan.textContent = `${yazarAdi} tarafından`;

  authorDiv.appendChild(imgContainerDiv);
  authorDiv.appendChild(authorSpan);

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  cardDiv.addEventListener("click", () => {
    console.log(anabaslik);
  });

  return cardDiv;
};

const cardEkleyici = (secici) => {
  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      const makaleler = response.data.makaleler;

      for (const makaleId in makaleler) {
        if (makaleler.hasOwnProperty(makaleId)) {
          const innerObj = makaleler[makaleId];
          for (let i = 0; i < innerObj.length; i++) {
            const card = Card(innerObj[i]);

            const element = document.querySelector(secici);
            element.appendChild(card);
          }
        }
      }
    })
    .catch((error) => {
      console.error("Makaleler alınırken hata oluştu:", error);
    });
};
export { Card, cardEkleyici };
