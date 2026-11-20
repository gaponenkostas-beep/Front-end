import React from "react";
import GoodsCard from "./GoodsCard";

const goodsList = [
  {
    id: 1,
    title: "Яблука червоні (1 кг)",
    price: 35,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Полуниця свіжа (1 кг)",
    price: 120,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Апельсини (1 кг)",
    price: 65,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Лимони (1 кг)",
    price: 75,
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Виноград (1 кг)",
    price: 90,
    image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Банани (1 кг)",
    price: 55,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
  },
];

function GoodsGallery() {
  return (
    <section className="gallery-section">
      <h2>Галерея товарів</h2>
      <div className="goods-grid">
        {goodsList.map((item) => (
          <GoodsCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default GoodsGallery;