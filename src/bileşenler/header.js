const Header = (baslik, tarih, yazi) => {
  /*// GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //*/
  const headerSec = document.createElement("div");
  headerSec.className = "header";

  const span = document.createElement("span");
  span.className = "date";
  span.textContent = tarih;

  const baslikHead = document.createElement("h1");
  baslikHead.textContent = baslik;

  const temp = document.createElement("span");
  temp.className = "temp";
  temp.textContent = yazi;

  headerSec.append(span, baslikHead, temp);

  return headerSec;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const hedef = document.querySelector(secici);

  const headerEkle = Header(
    "Teknoloji Zamanı",
    "11 Kasım 2022",
    "sağdaki yazi"
  );

  hedef.append(headerEkle);
};

export { Header, headerEkleyici };
