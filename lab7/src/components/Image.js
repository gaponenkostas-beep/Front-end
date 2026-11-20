import React, { useState } from "react";

function Image() {
  const defaultImageSrc =
    "https://24tv.ua/resources/photos/news/202510/2929684.jpg?v=1759926254000&w=1200&h=675&fit=cover&output=webp&q=85";
  const defaultLinkHref =
    "https://24tv.ua/trends24/harkiv-zvidki-pohodit-nazva-mista_n2929684";

  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(1000);

  const handleAdd = () => {
    setIsVisible(true);
  };

  const handleZoomIn = () => {
    if (isVisible) {
      setWidth((prevWidth) => prevWidth + 100);
    }
  };

  const handleZoomOut = () => {
    if (isVisible && width > 200) {
      setWidth((prevWidth) => prevWidth - 100);
    }
  };

  const handleRemove = () => {
    setIsVisible(false);
  };

  return (
    <section>
      <div id="image-container">
        {isVisible && (
          <a
            id="city-link"
            href={defaultLinkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="city-image"
              src={defaultImageSrc}
              alt="Фото міста Харків"
              style={{ width: `${width}px` }}
            />
          </a>
        )}
      </div>

      <div className="controls">
        <button id="btn-add" type="button" onClick={handleAdd}>
          Додати
        </button>
        <button id="btn-zoom-in" type="button" onClick={handleZoomIn}>
          Збільшити
        </button>
        <button id="btn-zoom-out" type="button" onClick={handleZoomOut}>
          Зменшити
        </button>
        <button id="btn-remove" type="button" onClick={handleRemove}>
          Видалити
        </button>
      </div>
    </section>
  );
}

export default Image;