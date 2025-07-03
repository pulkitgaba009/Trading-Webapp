function Team() {
  return (
    <div className="container">
      <div className="row p-5 ">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row">
        <div className="col-6 p-5 text-muted text-center" style={{ fontSize: "1.2em" }}>
          <img
            src="./nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="text-center mt-4">Nithin Kamath</h5>
          <h6 className="text-center mt-4">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5 text-muted" style={{ fontSize: "1.2em" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br />

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
          </p>
          <br />

          <p>Playing basketball is his zen.</p>
          <br />

          <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a> </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
