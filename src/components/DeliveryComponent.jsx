import React from "react";
import Chevron from "../image/chevron.svg";

function DeliveryComponent({
  status,
  date,
  tracking,
  size,
  weight,
  places,
  payment,
}) {
  return (
    <div className="delivery">
      <img src={Chevron} alt="Open" />

      <div className="delivery__status">
        <div
          className="delivery__status_circle"
          style={status !== "Доставлен" ? { background: "#FFD964" } : {}}
        ></div>

        <p className="delivery__status_text">{status}</p>
      </div>

      <p className="delivery__title">{date}</p>

      <div className="delivery__description">
        <p className="delivery__title">Трекинг номер</p>
        <p className="delivery__tracking">{tracking}</p>
      </div>

      <div className="delivery__description">
        <p className="delivery__title">Габариты</p>
        <p className="delivery__subtitle">{size}</p>
      </div>

      <div className="delivery__description">
        <p className="delivery__title">Общий вес</p>
        <p className="delivery__subtitle">{weight}</p>
      </div>

      <div className="delivery__description">
        <p className="delivery__title">Кол-во мест</p>
        <p className="delivery__subtitle">{places}</p>
      </div>

      <div className="delivery__description">
        <p className="delivery__title">Оплата доставки</p>
        <p className="delivery__subtitle">{payment}</p>
      </div>
    </div>
  );
}

export default DeliveryComponent;
