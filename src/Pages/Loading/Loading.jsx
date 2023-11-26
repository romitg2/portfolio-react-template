import romit from "./../../assets/romit.png";
import "./Loading.css";

function Loading() {
  return (
    <>
      <div className="intro">
        <div className="intro-content">
          <div className="intro-usp-box">
            <p className="intro-usp-text">
              Lorem ipsum <br /> dolor, sit <br /> amet consectetur <br />{" "}
              adipisicing elit. <br />
              Quibusdam, sint!
            </p>
          </div>
          <div className="intro-image-box">
            <img className="intro-image" src={romit} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Loading;



