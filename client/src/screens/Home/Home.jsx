import "./Home.css";
import { Layout, VendorCards } from "../../components";
import { useState, useEffect } from "react";
import { getVendors } from "../../services/vendors";

const Home = (props) => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const aFewVendors = await getVendors();
      setVendors(aFewVendors);
    };
    fetchVendors();
  }, []);
  return (
    <Layout user={props.user}>
      <div className="home">
        {vendors.map((vendor, index) => {    
          return (
            index < 3 ? (
            <VendorCards
              _id={vendor._id}
              name={vendor.name}
              imgURL={vendor.imgURL}
              key={index}
            />

            ) : null
          )
        })}
      </div>
    </Layout>
  );
};

export default Home;
