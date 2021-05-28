import './Home.css'
import VendorCards from '../../components/VendorCards/VendorCards'
import Layout from '../../components/Layout/Layout'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <VendorCards />
      </div>
    </Layout>
  )
}

export default Home