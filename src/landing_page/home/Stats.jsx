function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="pb-5 fs-2">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mb-4 mt-5"
            style={{ width: "100%" }}
          />
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="btn btn-link" style={{textDecoration:"none"}}>
              Explore our products ➝
            </a>
            <a href="#" className="btn btn-link" style={{textDecoration:"none"}}> 
              Try Kite demo ➝
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
