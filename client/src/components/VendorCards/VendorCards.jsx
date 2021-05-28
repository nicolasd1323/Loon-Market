import { useState, useEffect } from 'react'
import './VendorCards.css'
import VendorCard from '../VendorCard/VendorCard'
import { getVendors } from '../../services/vendors'

const VendorCards = () => {
  const [vendors, setVendors] = useState([])

  useEffect(() => {
    const fetchVendors = async () => {
      const allVendors = await getVendors()
      setVendors(allVendors)
    }
    fetchVendors()
  }, [])

  const CARDS = vendors
    .reverse()
    .map((vendor, index) =>
      index < 8 ? (
        <VendorCard
          _id={vendor._id}
          name={vendor.name}
          imgURL={vendor.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='vendor-cards'>
      <div className='latest'><h3>Current Vendors</h3></div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default VendorCards