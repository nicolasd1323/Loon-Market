import "./VendorCard.css";
import { Link } from "react-router-dom";

const VendorCard = (props) => {
  return (
    <div className="vendor-card">
      <Link className="card" to={`/vendors/${props._id}`}>
        <div className="" >
          
        <img className="vendor-card-image"
          src={props.imgURL}
          alt={props.name}
          />
          </div>
        <div className="card-name-background">
          <p className="vendor-card-name">{props.name}</p>
        </div>
      </Link>
    </div>
    );
};

export default VendorCard;
