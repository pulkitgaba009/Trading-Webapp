function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt="" />
        </div>

        <div className="col-1"></div>

        <div className="col-5 p-5  mt-5">
          <h1 className="mb-4">{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-4">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo ➝</a>
            <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More ➝</a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/googlePlayBadge.svg" alt="Google Play Badge" />
            </a>
            <a href={appStore} style={{marginLeft:"20px"}}>
              <img src="/appstoreBadge.svg" alt="App Store Badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
