import "./Vendors.css";
import { getVendors } from "../../services/vendors";
import Sort from "../../components/Sort/Sort";
import Vendor from "../../components/Vendor/Vendor";
import VendorCards from "../../components/VendorCards/VendorCards";
import { AZ, ZA } from "../../utils/sort";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

const Vendors = (props) => {
  const [vendors, setVendors] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState([]);
  const [sortType, setSortType] = useState("name-matching");
  const { user } = props;

  useEffect(() => {
    const fetchVendors = async () => {
      const allVendors = await getVendors();
      setVendors(allVendors);
      setSearchResult(allVendors);
    };
    fetchVendors();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="vendors">
        <VendorCards />
      </div>
    </Layout>
  );
};

export default Vendors;
