function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and government</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Government securities</li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <img
              src="/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{width:"90%"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
