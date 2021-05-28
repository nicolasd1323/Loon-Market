import { useState, useEffect } from 'react'
import './VendorEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { Layout } from '../../components/Layout/Layout'
import { getVendor, updateVendor } from '../../services/vendors'

const VendorEdit = (props) => {
  const [vendor, setVendor] = useState({
    name: '',
    description: '',
    imgURL: '',
    hours: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchVendor = async () => {
      const vendor = await getVendor(id)
      setVendor(vendor)
    }
    fetchVendor()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setVendor({
      ...vendor,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateVendor(id, vendor)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/vendors/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div className='vendor-edit'>
        <div className='image-container'>
          <img
            className='edit-vendor-image'
            src={vendor.imgURL}
            alt={vendor.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={vendor.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={vendor.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-hours'
            placeholder='Hours'
            value={vendor.hours}
            name='hours'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={vendor.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default VendorEdit