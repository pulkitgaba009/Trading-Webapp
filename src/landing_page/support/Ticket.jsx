function Ticket() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="fs-4 text-muted">To create a ticket,select a relevent topic.</h1>
      </div>
      <div className="row">
        <div className="col-4 mt-5 mb-5">
          <h4><i class="fa-regular fa-square-plus"></i> Account opening</h4>
          <a style={{ textDecoration: "none" }} href="">
            Resident individual <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Minor <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Non Resident Indian (NRI) <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Company, Partnership, HUF and LLP <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Glossary <br />
          </a>
        </div>

        <div className="col-4 mt-5 mb-5">
          <h4><i class="fa-regular fa-user"></i> Your Zerodha Account</h4>
          <a style={{ textDecoration: "none" }} href="">
            Your Profile <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Account modification <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Client Master Report (CMR) and Depository Participant (DP) <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Nomination <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Transfer and conversion of securities <br />
          </a>
        </div>

        <div className="col-4 mt-5 mb-5">
          <h4><i class="fa-solid fa-credit-card"></i> Funds</h4>
          <a style={{ textDecoration: "none" }} href="">
            Add money <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Withdraw money <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Add bank accounts <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            eMandates <br />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-4 mt-5 mb-5">
          <h4><i class="fa-solid fa-chart-simple"></i> Kite</h4>
          <a style={{ textDecoration: "none" }} href="">
            IPObr <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Trading FAQs <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Margin Trading Facility (MTF) and Margins <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Charts and orders <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Alerts and Nudges <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            General <br />
          </a>
        </div>

        <div className="col-4 mt-5 mb-5">
          <h4><i class="fa-solid fa-terminal"></i> Console</h4>
          <a style={{ textDecoration: "none" }} href="">
            Portfolio <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Corporate actions <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Funds statement <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Reports <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Profile <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Segments <br />
          </a>
        </div>

        <div className="col-4 mt-5 mb-5">
          <h4><i class="fa-solid fa-coins"></i> Coin</h4>
          <a style={{ textDecoration: "none" }} href="">
            Mutual funds <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            National Pension Scheme (NPS) <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Fixed Deposit (FD) <br />
          </a>
          <a style={{ textDecoration: "none" }} href="">
            Features on Coin <br />
          </a>
           <a style={{ textDecoration: "none" }} href="">
            Payments and Orders <br />
          </a>
           <a style={{ textDecoration: "none" }} href="">
            General <br />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ticket;