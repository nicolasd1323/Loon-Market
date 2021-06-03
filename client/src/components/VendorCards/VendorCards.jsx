import { useState, useEffect } from 'react'
import './VendorCards.css'
import VendorCard from '../VendorCard/VendorCard'
import { getVendors } from '../../services/vendors'

const VendorCards = () => {
  const [vendors, setVendors] = useState([])
  
  useEffect(() => {
    const fetchVendors = async () => {
      const allVendors = await getVendors()
      setVendors(allVendors);
    }
    fetchVendors()
  }, [])

  const CARDS = vendors
    .reverse()
    .map((vendor, index) =>
      index < 15 ? (
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
      <div className='current-vendors'>
        <h3>Check out what our current vendors have to offer!</h3>
      </div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default VendorCards