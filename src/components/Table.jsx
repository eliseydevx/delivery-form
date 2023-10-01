import React, { useState } from "react";
import FirmComponent from "./FirmComponent";
import { firmData } from "../data/firmData";

function Table() {
  return (
    <div className="table">
      <header className="table__heading">
        {/* <p className="table__heading_name"></p> */}

        <p className="table__heading_name">Компания</p>
        <p className="table__heading_name">Сумма заказа</p>
        <p className="table__heading_name">Сумма отгрузки</p>
        <p className="table__heading_name">Сумма остаток</p>
        <p className="table__heading_name">Выполнение</p>
      </header>

      {firmData.map((item, index) => (
        <FirmComponent
          key={index}
          image={item.image}
          name={item.name}
          places={item.places}
          sumOrder={item.sumOrder}
          sumShipment={item.sumShipment}
          sumRemains={item.sumRemains}
          succsess={item.succsess}
          deliveryData={item.deliveryData}
        />
      ))}
    </div>
  );
}

export default Table;
