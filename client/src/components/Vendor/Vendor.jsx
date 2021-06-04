import "./Vendor.css";
import { Link } from "react-router-dom";

const Vendor = (props) => {
  return (
    <>
      <Link className="vendor" to={`/vendors/${props._id}`}>
        <img className="vendor-image" src={props.imgURL} alt={props.name} />
        <div className="vendor-name">{props.name}</div>
        <div className="hours">{props.hours}</div>
      </Link>
    </>
  );
};
export default Vendor;
