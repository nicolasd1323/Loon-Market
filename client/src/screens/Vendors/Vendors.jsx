import "./Vendors.css";
import { getVendors } from "../../services/vendors";
import VendorCards from "../../components/VendorCards/VendorCards";
import { useEffect } from "react";
import Layout from "../../components/Layout/Layout";

const Vendors = (props) => {
  useEffect(() => {
    const fetchVendors = async () => {
      const allVendors = await getVendors();
    };
    fetchVendors();
  }, []);
  return (
    <Layout user={props.user}>
      <div className="vendors">
        <div className="current-vendors">
          <h3>Check out what our current vendors have to offer!</h3>
        </div>
        <VendorCards />
      </div>
    </Layout>
  );
};

export default Vendors;
