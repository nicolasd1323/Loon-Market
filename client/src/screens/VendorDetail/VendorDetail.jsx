import { useState, useEffect } from 'react'
import './VendorDetail.css'
import Layout from '../../components/Layout/Layout'
import { getVendor, deleteVendor } from '../../services/vendors'
import { useParams, Link } from 'react-router-dom'

const VendorDetail = (props) => {
  const [vendor, setVendor] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchVendor = async () => {
      const vendor = await getVendor(id)
      setVendor(vendor)
      setLoaded(true)
    }
    fetchVendor()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='vendor-detail'>
        <img
          className='vendor-detail-image'
          src={vendor.imgURL}
          alt={vendor.name}
        />
        <div className='detail'>
          <div className='name'>{vendor.name}</div>
          <div className='description'>{vendor.description}</div>
          <div className='hours'>{vendor.hours}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/vendor/${vendor._id}/edit`}>
              Edit
            </Link>
            <Link to="/vendors"
              className='delete-button'
              onClick={() => deleteVendor(vendor._id)}
            >
              Delete
              </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VendorDetail;
