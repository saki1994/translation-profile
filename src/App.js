import "./stylesheet/App.scss";
import "./stylesheet/Media700px.scss";

function App() {
  return (
    <div
      className="home-div"
      style={{
        backgroundImage: "url(./images/bg-photo.jpg)"
      }}
    >
      <nav className="nav-mobile-size">
        <ul>
          <li>EN</li>
          <li>PL</li>
          <li>DK</li>
        </ul>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
