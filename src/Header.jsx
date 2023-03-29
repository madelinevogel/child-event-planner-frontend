import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Kids Sports Scheduler
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/children">
                My Kids
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/addchild">
                Add Child
              </Link>
            </li>
            {localStorage.jwt !== undefined ? (
              <li className="nav-item">
                <LogoutLink />
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Login
                </Link>
              </li>
            )}
          </ul>
          <form className="d-flex" role="search">
            <Link className="btn btn-outline-success" to="/signup">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
