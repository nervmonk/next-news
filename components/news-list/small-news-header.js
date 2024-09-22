import Link from "next/link";

export default function SmallNewsHeader({ category }) {
  const pics = [
    "/img/news-110x110-1.jpg",
    "/img/ryan.jpg",
    "/img/joker.jpg",
    "/img/unsplash.jpg",
  ];
  return pics.map((pic, id) => (
    <div className="col-lg-6" key={id}>
      <div
        className="d-flex align-items-center bg-white mb-3"
        style={{ height: "100px" }}
      >
        <img
          className="img-fluid"
          src={pic}
          alt=""
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            maxWidth: "100px",
          }}
        />
        <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
          <div className="mb-2">
            <a
              className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
              href=""
            >
              {category}
            </a>
            <a className="text-body" href="">
              <small>Jan 01, 2045</small>
            </a>
          </div>
          <Link
            className="h6 m-0 text-secondary text-uppercase font-weight-bold"
            href={`/${category}/lorem-ipsum`}
          >
            Lorem ipsum dolor sit amet elit...
          </Link>
        </div>
      </div>
    </div>
  ));
}
