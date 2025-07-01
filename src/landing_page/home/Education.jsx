function Education() {
  return (
<div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-6 ml-5 p-5">
          <img src="/education.svg" alt="" style={{width:"65%"}}/>
        </div>
        

        <div className="col-6 p-5">
          <h1 className="fs-2">Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a
            href="#"
            className="btn btn-link"
            style={{ textDecoration: "none" }}
          >
            Varsity ➝
          </a>

          <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a
            href="#"
            className="btn btn-link"
            style={{ textDecoration: "none" }}
          >
            TradingQ&A ➝
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
