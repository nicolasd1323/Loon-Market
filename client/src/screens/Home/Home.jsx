import "./Home.css";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home home-container">
        <div className="home-banner-text">
          <span className="welcome-text">Eat. Drink. Gather. </span>
        </div>
      </div>
      <section className="homepage-cards">
        <Link to="/vendors">
          <div className="food-card card-1">
            <div className="food-content">
              <p>
                <h3>FOOD</h3>
              </p>
            </div>
          </div>
        </Link>
        <p className="home-text-descriptions">
          Seven restaurants. Two bars. And, of course, dessert.
        </p>
        <Link to="/vendors">
          <div className="food-card card-2">
            <div className="food-content">
              <p>
                <h3>DRINK</h3>
              </p>
            </div>
          </div>
        </Link>
        <p className="home-text-descriptions">
          New vendors welcome as we continue to expand our offerings. Check in
          often to view our latest additions.
        </p>

        <div className="food-card card-3">
          <div className="food-content">
            <p>
              <h3>COMING SOON</h3>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
