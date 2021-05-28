import './VendorCard.css';
import { Link } from 'react-router-dom'

const VendorCard = (props) => {
    return (
        <div className="vendor-card">
            <Link className="card" to={`/vendors/${props._id}`}>
                <img className="vendor-card-image" src={props.imgURL} alt={props.name} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default VendorCard