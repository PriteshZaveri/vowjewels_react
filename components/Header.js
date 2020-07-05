import Logo from "../static/images/logo-white.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="nav-wrap">
            <div className="nav-link">
              Gold
              <div className="nav-hidden-wrap">
                <div className="container">
                  <h2 className="nav-cat-title">Gold Jewelry</h2>
                  <ul>
                    <li>
                      <a href="#">Ring</a>
                    </li>
                    <li>
                      <a href="#">Pendant</a>
                    </li>
                    <li>
                      <a href="#">Earrings</a>
                    </li>
                    <li>
                      <a href="#">Mangalsutra</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-link">
              Diamond
              <div className="nav-hidden-wrap">
                <div className="container">
                  <h2 className="nav-cat-title">Diamond Jewelry</h2>
                  <ul>
                    <li>
                      <a href="#">Ring</a>
                    </li>
                    <li>
                      <a href="#">Pendant</a>
                    </li>
                    <li>
                      <a href="#">Earrings</a>
                    </li>
                    <li>
                      <a href="#">Mangalsutra</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="logo-wrap">
              <img src={Logo} />
            </div>
            <div className="nav-link">
              Gifting
              <div className="nav-hidden-wrap">
                <div className="container">
                  <h2 className="nav-cat-title">Gifting Items</h2>
                  <ul>
                    <li>
                      <a href="#">Ring</a>
                    </li>
                    <li>
                      <a href="#">Pendant</a>
                    </li>
                    <li>
                      <a href="#">Earrings</a>
                    </li>
                    <li>
                      <a href="#">Mangalsutra</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-link">
              New Arrivals
              <div className="nav-hidden-wrap">
                <div className="container">
                  <h2 className="nav-cat-title">Silver Jewelry</h2>
                  <ul>
                    <li>
                      <a href="#">Ring</a>
                    </li>
                    <li>
                      <a href="#">Pendant</a>
                    </li>
                    <li>
                      <a href="#">Earrings</a>
                    </li>
                    <li>
                      <a href="#">Mangalsutra</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
