import React, { useState } from "react";
import Chevron from "../image/chevron.svg";
import DeliveryComponent from "./DeliveryComponent";
import FormTable from "./FormTable";

function FirmComponent({
  image,
  name,
  places,
  sumOrder,
  sumShipment,
  sumRemains,
  succsess,
  deliveryData,
}) {
  const [isFirmOpen, setIsFirmOpen] = useState(false);

  const toggleFirm = () => {
    setIsFirmOpen(!isFirmOpen);
  };

  return (
    <section>
      <div
        className={`${
          isFirmOpen ? "firm-component background-active" : "firm-component"
        }`}
      >
        <div className="firm-component__block-about">
          <div className="frim-component__image">
            <img
              className="firm-component__arrow"
              src={Chevron}
              alt="open"
              onClick={toggleFirm}
              style={isFirmOpen ? { transform: "rotate(90deg)" } : {}}
            />
            <div
              className="frim-component__logo"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>

          <div className="firm-component__about">
            <p className="firm-component__about_name">{name}</p>
            <p className="firm-component__about_address">{places}</p>
          </div>
        </div>

        <p className="firm-component__sums">{sumOrder}</p>
        <p className="firm-component__sums">{sumShipment}</p>
        <p className="firm-component__sums">{sumRemains}</p>

        <div className="firm-component__complete">
          <p className="firm-component__sums no-width-sum">{succsess}</p>
          <div className="firm__component__complete-line"></div>
        </div>
      </div>
      {isFirmOpen && (
        <div className="firm-component__more-info">
          <div className="firm-component__more-info__delivery">
            {deliveryData.map((item, index) => (
              <DeliveryComponent
                key={index}
                status={item.status}
                date={item.date}
                tracking={item.tracking}
                size={item.size}
                weight={item.weight}
                places={item.places}
                payment={item.payment}
              />
            ))}
          </div>

          <FormTable />

          <div className="firm-component__more-info_btns">
            <button className="firm-component__more-info_btn-s">
              Сохранить
            </button>
            <button className="firm-component__more-info_btn-d">Удалить</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FirmComponent;
