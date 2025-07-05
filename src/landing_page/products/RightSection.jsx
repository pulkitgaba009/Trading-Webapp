function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5  mt-5">
          <h1 className="mb-4">{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-4">
            <a
              href={learnMore}
              style={{textDecoration: "none" }}
            >
              Learn More ➝
            </a>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-6 p-5">
          <img src={imageURL} alt="" style={{width:"110%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
