import romit from "./../../assets/romit-2.jpg";
import "./Loading.css";

function Loading() {
  return (
    <>
      <div className="intro">
        <div className="intro-content">
          <div className="intro-usp-box">
            <p className="intro-usp-text">
                
            Express <br /> who you are <br />through <br /> your <br /> portfolio
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



