import "./available.css";

function Available() {
  let currDate = new Date().toDateString();

  return (
    <div className="available">
      <p className="dot">&#x2022;</p>
      <p className="text"> Available</p>
      <p className="date"> {currDate}</p>
    </div>
  );
}

export default Available;
