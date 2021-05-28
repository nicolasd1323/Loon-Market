import './Home.css'
import { Layout, VendorCards } from '../../components'

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