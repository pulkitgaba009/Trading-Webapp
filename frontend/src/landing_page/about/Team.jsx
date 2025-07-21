function Team() {
  return (
    <div className="container">
      <div className="row p-5 ">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row">
        <div
          className="col-6 p-5 text-muted text-center"
          style={{ fontSize: "1.2em" }}
        >
          <img
            src="./nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="text-center mt-4">Nithin Kamath</h5>
          <h6 className="text-center mt-4">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5 text-muted" style={{ fontSize: "1.2em" }}>
          <p style={{ fontSize: "1rem" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br />

          <p style={{ fontSize: "1rem" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
          </p>
          <br />

          <p style={{ fontSize: "1rem" }}>Playing basketball is his zen.</p>
          <br />

          <p style={{ fontSize: "1rem" }}>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-5 text-muted" style={{ fontSize: "1.2em" }}>
          <p style={{ fontSize: "1rem" }}>
            Pulkit is a passionate Full-Stack Developer with experience in
            building modern web applications. As a tech enthusiast, he loves
            working with JavaScript, React, Node.js, and Python to create
            efficient and scalable solutions.
          </p>
          <br />

          <p style={{ fontSize: "1rem" }}>
            He has also contributed to various tech events and hackathons,
            gaining experience as both a team leader and a problem-solver.
            Currently, he is exploring AI integration in web applications and
            building projects that bridge the gap between fitness and
            technology.
          </p>
          <br />

          <p style={{ fontSize: "1rem" }}>
            {" "}
            When he's not coding, Pulkit enjoys playing basketball, acting in
            college plays, and exploring the world of filmmaking and design.
          </p>
          <br />

          <p style={{ fontSize: "1rem" }}>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/pulkit-gaba-17593b189"
              style={{ textDecoration: "none" }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/pulkit-gaba-17593b189"
              style={{ textDecoration: "none" }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/pulkit-gaba-17593b189"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>{" "}
          </p>
        </div>

        <div
          className="col-6 p-5 text-muted text-center"
          style={{ fontSize: "1.2em" }}
        >
          <img
            src="./Profile.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="text-center mt-4">Pulkit Gaba</h5>
          <h6 className="text-center mt-4">Full-stack Developer, CTO</h6>
        </div>
      </div>
    </div>
  );
}

export default Team;
