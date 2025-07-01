function Pricing() {
    return ( 
        <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-5 ml-5 p-5">
          <h1 className="mb-3 ts-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="btn btn-link"
            style={{ textDecoration: "none" }}
          >
            See pricing ➝
          </a>
        </div>
        <div className="col-1"></div>

        <div className="col-6 p-5">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-2" style={{color:"orange"}}>₹0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-2" style={{color:"orange"}}>₹0</h1>
              <p>Free equity delivery and <br />direct mutual funds</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-2" style={{color:"orange"}}>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}

export default Pricing;