export default function SmallNewsHeader() {
  return (
    <div
      className="d-flex align-items-center bg-white mb-3"
      style={{ height: "100px" }}
    >
      <img className="img-fluid" src="/img/news-110x110-1.jpg" alt="" />
      <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
        <div className="mb-2">
          <a
            className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
            href=""
          >
            Business
          </a>
          <a className="text-body" href="">
            <small>Jan 01, 2045</small>
          </a>
        </div>
        <a
          className="h6 m-0 text-secondary text-uppercase font-weight-bold"
          href=""
        >
          Lorem ipsum dolor sit amet elit...
        </a>
      </div>
    </div>
  );
}
