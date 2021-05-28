import "./Vendors.css";
import { getVendors } from "../../services/vendors";
import { Layout, Vendor, Sort } from "../../vendors";
import { AZ, ZA } from '../../utils/sort';
import { useEffect, useState } from "react";

const Vendors = (props) => {
  const [vendors, setVendors] = useState([]);
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState([]);
  const [sortType, setSortType] = useState("name-matching")

  useEffect(() => {
    const fetchVendors = async () => {
      const allVendors = await getVendors()
      setVendors(allVendors)
      setSearchResult(allVendors)
    }
    fetchVendors
  }, [])

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSubmit = event => event.preventDefault()

  return (
    <Layout user={props.user}>
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="vendors">
        {searchResult.map((vendor, index) => {
          return (
            <Vendor
            _id={vendor._id}
              name={vendor.name}
              imgURL={vendor.imgURL}
              description={vendor.description}
              key={index}
            />
         )
       })} 
      </div>
    </Layout>
  )
}

export default Vendors

