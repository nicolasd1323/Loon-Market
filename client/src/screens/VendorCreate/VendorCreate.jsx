import { useState } from 'react'
import './VendorCreate.css'
import Layout from '../../components/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createVendor } from '../../services/vendors'

const VendorCreate = (props) => {
  const [vendor, setVendor] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setVendor({
      ...vendor,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createVendor(vendor)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/vendors`} />
  }
  return (
    <Layout user={props.user}>
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          className='input-name'
          placeholder='Name'
          value={vendor.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className='textarea-description'
          rows={10}
          placeholder='Description'
          value={vendor.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={vendor.imgURL}
          name='imgURL'
          required
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
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default VendorCreate
