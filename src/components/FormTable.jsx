import React from "react";
import Trash from "../image/trash.svg";
import ItemComponent from "./ItemDelivery";
import { itemDeliveryData } from "../data/itemDeliveryData";
import arrow from "../image/arrow.svg";

function FormTable() {
  return (
    <div className="form-table">
      <div className="form-table__heading">
        <p className="delivery-form__heading_text">
          Доставка поставщика offine
        </p>
        <img src={Trash} alt="delete" />
      </div>

      <div className="form-table__inputs-block">
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">Статус</label>
          <div className="select-text">
            Деловые линии <img src={arrow} alt="arrow" />
          </div>
          {/* <select className="select-text">
            <option>Деловые линии</option>
          </select> */}
        </div>

        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">Дата отгрузки</label>
          {/* <input className="input-text" type="date" /> */}
          <div className="select-text">
            Деловые линии <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">Длина</label>
          {/* <select className="select-text">
            <option>100</option>
          </select> */}
          <div className="select-text">
            100 <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">Высота</label>
          {/* <select className="select-text">
            <option className="select-text">100</option>
          </select> */}
          <div className="select-text">
            100 <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">Ширина</label>
          {/* <select className="select-text">
            <option>100</option>
          </select> */}
          <div className="select-text">
            100 <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">
            Количество мест
          </label>
          <input
            className="input-text"
            placeholder="Деловые линии"
            type="text"
          />
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">Вес</label>
          {/* <select className="select-text">
            <option>100</option>
          </select> */}
          <div className="select-text">
            100 <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">
            Условия доставки
          </label>
          {/* <select className="select-text">
            <option>Деловые линии</option>
          </select> */}
          <div className="select-text select-width">
            Деловые линии <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">Цена доставки</label>
          {/* <select className="select-text">
            <option>100</option>
          </select> */}
          <div className="select-text">
            100 <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">
            Траснпортная компания
          </label>
          {/* <select className="select-text">
            <option>Траснпортная Компания</option>
          </select> */}
          <div className="select-text">
            Деловые линии <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">URL</label>
          <input
            className="input-url"
            type="text"
            placeholder="Деловые линии"
          />
        </div>
        <div className="form-table__inputs-block_pos">
          <label className="form-table__inputs-block_name">
            Номер отслеживания
          </label>
          <input
            className="input-text"
            placeholder="Деловые линии"
            type="text"
          />
        </div>
      </div>

      <div className="table-item">
        <div className="table-item__heading">
          <div className="p">Наименование</div>
          <div className="p">Отгрузка шт</div>
          <div className="p">Остаток шт</div>
          <div className="p">Сумма отгрузки</div>
          <div className="p">Сумма остаток</div>
        </div>
        {itemDeliveryData.map((item, index) => {
          return (
            <ItemComponent
              key={index}
              image={item.image}
              name={item.name}
              model={item.model}
              quantity={item.quantity}
              shipment={item.shipmentAmount}
              remaining={item.AmountRemaining}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FormTable;
