import Link from "next/link";

export default function NewsHighlight({ category }) {
  return (
    <div className="col-lg-12">
      <div className="row news-lg mx-0 mb-3">
        <div className="col-md-6 h-100 px-0">
          <img
            className="img-fluid h-100"
            src="/img/unsplash.jpg"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
          <div className="mt-auto p-4">
            <div className="mb-2">
              <a
                className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                href=""
              >
                {category}
              </a>
              <a className="text-body" href="">
                <small>Jan 01, 2045</small>
              </a>
            </div>
            <Link
              className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
              href={`/${category}/lorem-ipsum`}
            >
              Lorem ipsum dolor sit amet elit...
            </Link>
            <p className="m-0">
              Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
              clita rebum dolor stet amet justo
            </p>
          </div>
          <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle mr-2"
                src="/img/user.jpg"
                width="25"
                height="25"
                alt=""
              />
              <small>Ryan Dwiky</small>
            </div>
            <div className="d-flex align-items-center">
              <small className="ml-3">
                <i className="far fa-eye mr-2"></i>12345
              </small>
              <small className="ml-3">
                <i className="far fa-comment mr-2"></i>123
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
