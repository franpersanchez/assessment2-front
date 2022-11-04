import "./FlightItem.css";

function FlightItem(props) {
  return (
    <div className="flight-item-box">
      <div className="Flight-item-origin-date">10 June 2022</div>
      <div className="Flight-item-origin-description">
        <div> Sevilla </div>
        <div> Bruselas</div>
      </div>
      <div className="Flight-item-return-date">15 June 2022</div>
      <div className="Flight-item-price">155€</div>
    </div>
  );
}

export default FlightItem;
