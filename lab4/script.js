document.addEventListener("DOMContentLoaded", () => {
  // --- ЗАДАНИЕ 1 ---
  // Элемент "Програмування" через getElementById
  const firstHobby = document.getElementById("hobby-1");
  // Элемент "Відео ігри" через querySelector
  const secondHobby = document.querySelector(".hobby-2");

  let firstClicks = 0;
  if (firstHobby) {
    firstHobby.addEventListener("click", () => {
      firstClicks++;
      if (firstClicks % 2 === 1) {
        // 1-й, 3-й, 5-й клик -> синий фон, белый текст
        firstHobby.classList.remove("click-2-yellow");
        firstHobby.classList.add("click-1-blue");
      } else {
        // 2-й, 4-й, 6-й клик -> жёлтый фон, чёрный текст
        firstHobby.classList.remove("click-1-blue");
        firstHobby.classList.add("click-2-yellow");
      }
    });
  }

  let secondClicks = 0;
  if (secondHobby) {
    secondHobby.addEventListener("click", () => {
      secondClicks++;
      if (secondClicks % 2 === 1) {
        // 1-й, 3-й, 5-й клик -> зелёный фон, белый текст
        secondHobby.classList.remove("click-2-yellow");
        secondHobby.classList.add("click-1-green");
      } else {
        // 2-й, 4-й, 6-й клик -> жёлтый фон, чёрный текст
        secondHobby.classList.remove("click-1-green");
        secondHobby.classList.add("click-2-yellow");
      }
    });
  }

  // --- ЗАДАНИЕ 2 ---
  const imageContainer = document.getElementById("image-container");
  const btnAdd = document.getElementById("btn-add");
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const btnRemove = document.getElementById("btn-remove");

  const defaultImageSrc =
    "https://24tv.ua/resources/photos/news/202510/2929684.jpg?v=1759926254000&w=1200&h=675&fit=cover&output=webp&q=85";
  const defaultLinkHref =
    "https://24tv.ua/trends24/harkiv-zvidki-pohodit-nazva-mista_n2929684";

  btnAdd.addEventListener("click", () => {
    let img = document.getElementById("city-image");
    if (!img) {
      const link = document.createElement("a");
      link.id = "city-link";
      link.href = defaultLinkHref;
      link.target = "_blank";
      link.rel = "noopener";

      img = document.createElement("img");
      img.id = "city-image";
      img.src = defaultImageSrc;
      img.alt = "Фото міста Харків";
      img.width = 1000;

      link.appendChild(img);
      imageContainer.appendChild(link);
    }
  });

  btnZoomIn.addEventListener("click", () => {
    const img = document.getElementById("city-image");
    if (img) {
      const currentWidth = img.clientWidth;
      img.style.width = currentWidth + 100 + "px";
    }
  });

  btnZoomOut.addEventListener("click", () => {
    const img = document.getElementById("city-image");
    if (img) {
      const currentWidth = img.clientWidth;
      if (currentWidth > 200) {
        img.style.width = currentWidth - 100 + "px";
      }
    }
  });

  btnRemove.addEventListener("click", () => {
    const link = document.getElementById("city-link");
    const img = document.getElementById("city-image");
    if (link) {
      link.remove();
    } else if (img) {
      img.remove();
    }
  });
});