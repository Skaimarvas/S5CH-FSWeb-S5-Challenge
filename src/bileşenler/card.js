import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  card.className = "card";

  const headLine = document.createElement("div");
  headLine.className = "headline";
  headLine.textContent = makale["anabaslik"];
  card.append(headLine);

  const author = document.createElement("div");
  author.className = "author";
  card.append(author);

  const imgAuthor = document.createElement("div");
  imgAuthor.className = "img-container";
  author.append(imgAuthor);

  const imgSec = document.createElement("img");
  imgSec.src = makale.yazarFoto;
  imgAuthor.append(imgSec);

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdı;
  author.append(yazarAdi);
  console.log("T1");
  return card;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const hedef = document.querySelector(secici);

  const cardEkle = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5001/api/makaleler",
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  cardEkle().then((data) => hedef.append(Card(data)));

  return hedef;
};

export { Card, cardEkleyici };
