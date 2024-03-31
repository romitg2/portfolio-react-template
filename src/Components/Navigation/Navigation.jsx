import "./navigation.css";

function Navigation() {
  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              FAQs
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
