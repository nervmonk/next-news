export default function Advertisement() {
  return (
    <div className="mb-3">
      <div className="section-title mb-0">
        <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
      </div>
      <div className="bg-white text-center border border-top-0 p-3">
        <a href="">
          <img
            className="img-fluid"
            src="/img/bokchoy.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "250px",
              objectFit: "cover",
            }}
          />
        </a>
      </div>
    </div>
  );
}
