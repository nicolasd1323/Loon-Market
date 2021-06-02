import { useState } from "react";
import "./VendorCreate.css";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createVendor } from "../../services/vendors";

const VendorCreate = (props) => {
  const [vendor, setVendor] = useState({
    name: "",
    description: "",
    imgURL: "",
    hours: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVendor({
      ...vendor,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createVendor(vendor);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/vendors`} />;
  }
  return (
    <Layout user={props.user}>
      <div className="add-vendor">
        <div className="add-vendor-input">
        <form className="add-vendor-form" onSubmit={handleSubmit}>
          <input
            className="add-vendor-name"
            placeholder="Name"
            value={vendor.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="add-vendor-description"
            rows={5}
            placeholder="Description"
            value={vendor.description}
            name="description"
            required
            onChange={handleChange}
          />
          <input
            className="add-vendor-image"
            placeholder="Image Link"
            value={vendor.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <input
            className="add-vendor-hours"
            placeholder="Hours"
            value={vendor.hours}
            name="hours"
            required
            onChange={handleChange}
          />
          <div className="add-vendor-button-box">
            <button type="submit" className="add-vendor-button">
              Submit
            </button>
          </div>
          </form>
          </div>
      </div>
    </Layout>
  );
};

export default VendorCreate;
