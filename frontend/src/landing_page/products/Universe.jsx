function Universe() {
  return (
    <div className="container">
      <div className="row text-center ">
        <h1>The Zerodha Universe</h1>
        <h5 className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </h5>
      </div>

      <div className="row mt-5">
        <div className="col-4 p-3 text-center">
          <img src="/smallcaseLogo.png" alt="" />
          <p className="text-muted text-small mt-3 text-center">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img style={{height:"50px"}} src="/streakLogo.png" alt="" />
          <p className="text-muted text-small mt-3 text-center">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img style={{height:"45px"}} src="/sensibullLogo.svg" alt="" />
          <p className="text-muted text-small mt-3 text-center">Options trading platform</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4 p-3 text-center">
          <img style={{height:"50px"}} src="/zerodhaFundhouse.png" alt="" />
          <p className="text-muted text-small mt-3 text-center">Asset management</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img style={{width:"199px"}} src="/goldenpiLogo.png" alt="" />
          <p className="text-muted text-small mt-3 text-center">Bonds and trading platform</p>
        </div>
        <div className="col-4 p-3 text-center">
          <img style={{height:"40px"}} src="/dittoLogo.png" alt="" />
          <p className="text-muted text-small mt-3 text-center">Insurence</p>
        </div>

        <button className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{width:"20%" ,margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
