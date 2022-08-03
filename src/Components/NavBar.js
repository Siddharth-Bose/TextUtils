import { Link } from "react-router-dom";

function MyNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container">
        <Link className="navbar-brand text-white" to="/Home">
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                aria-current="page"
                to="/Home"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/Util">
              Try it Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavBar;
