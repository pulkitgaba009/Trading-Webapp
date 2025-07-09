function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="px-5 pt-5" id="supportWrapper">
        <h3 className="fs-5">Support Portal</h3>
        <a  style={{color:"white"}} href="">Track Tickets</a>
      </div>
    
      <div className="row" style={{margin:"0 150px"}}>
        <div className="col-6 p-5 mb-5">
          <h1 className="fs-5">Search for an answer or browse help topics to create a ticket</h1> <br />
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            id=""
          /> <br /> <br />
          <a  className="fs-5" style={{color:"white"}} href="">Track account opening</a> &nbsp;
          <a  className="fs-5" style={{color:"white"}} href="">Track segment activation</a> &nbsp;
          <a  className="fs-5" style={{color:"white"}} href="">Intraday margins</a> &nbsp;
          <a  className="fs-5" style={{color:"white"}} href="">Kite user manual</a> &nbsp;
        </div>
        <div className="col-6 p-5 mb-5">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li><a  style={{color:"white",lineHeight:"4"}} href="">Quarterly Settlement of Funds - July 2025</a></li>
            <li><a  style={{color:"white",lineHeight:"4"}} href="">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
          </ol>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
