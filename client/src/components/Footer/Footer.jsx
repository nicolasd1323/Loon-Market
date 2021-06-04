import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-item-1">
        <div className="footer-address">
          1234 Loon Cove Dr. Watertown, New Loon{" "}
        </div>
        <div className="footer-hours">
          <b>Mon - Wed</b> 11 am - 9 pm | <b>Thurs - Sat</b> 11 am - 12 am |{" "}
          <b>Sun</b> 12 pm - 6 pm
        </div>
      </div>

      <div className="footer-item-2">
        <b>&copy; Loon Market 2021</b> |{" "}
        <a href="http://endless.horse/">James Benet</a> |{" "}
        <a href="http://endless.horse/">Nicolas Salazar</a> |{" "}
        <a href="http://endless.horse/">Carri-anne Hamer</a>
      </div>
    </div>
  </footer>
);

export default Footer;
