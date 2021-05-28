import './Home.css'
import Layout from '../../components/Layout/Layout'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div  className='home'>
    
        {/* <h1>You are home!!!!!!!!!!!!!!!</h1> */}
      </div>
    </Layout>
  )
}

export default Home