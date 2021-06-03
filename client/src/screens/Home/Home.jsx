import './Home.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home home-container'>
        
        <div className="home-banner-text" ><span className="welcome-text">Eat. Drink. Gather. </span></div>
    
      
      </div>
      <section className="homepage-cards">
        <Link to="/vendors">
        <div className="food-card card-1">
          {/* <img src="https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"  alt="name" /> */}
          <div className="food-content">
            <p><h3>FOOD</h3></p>
          </div>
          </div>
        </Link>
        <p className="home-text-descriptions">7 restaurants. 2 bars. And, of course, dessert</p>
        <Link to="/vendors">
        
        <div className="food-card card-2">
          {/* <img src="https://images.unsplash.com/photo-1541975902628-b157a9411603?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"  alt="name" /> */}
          <div className="food-content">
            <p><h3>DRINK</h3></p>
          </div>
        </div>
        </Link>
                <p className="home-text-descriptions">New vendors welcome. Check in often to view our latest additions.</p>

        <div className="food-card card-3">
          {/* <img src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&ixid=MnwxMjA3[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80"  alt="name" /> */}
          <div className="food-content">
            <p><h3>COMING SOON</h3></p>
          </div>
        </div>
      </section>
      
    </Layout>
  )
}

export default Home