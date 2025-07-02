function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./logo.svg" alt="" style={{width:"25%",marginLeft:"20%"}}/>
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
            
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  SignUp
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>

            </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
