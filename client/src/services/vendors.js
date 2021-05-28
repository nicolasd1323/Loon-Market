import api from './apiConfig'

export const getVendors = async () => {
  try {
      const response = await api.get('/vendors')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getVendor = async id => {
  try {
      const response = await api.get(`/vendors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createVendor = async vendor => {
  try {
      const response = await api.post('/vendors', vendor)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateVendor = async (id, vendor) => {
  try {
      const response = await api.put(`/vendors/${id}`, vendor)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteVendor = async id => {
  try {
      const response = await api.delete(`/vendors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}