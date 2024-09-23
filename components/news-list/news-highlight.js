import Link from "next/link";

export default function NewsHighlight({ category }) {
  return (
    <div className="col-lg-12">
      <div className="row news-lg mx-0 mb-3">
        <div className="col-md-6 h-100 px-0">
          <img
            className="img-fluid h-100"
            src={category.imgUrl}
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
                {category.tag}
              </a>
              <a className="text-body" href="">
                <small>{category.datetime}</small>
              </a>
            </div>
            <Link
              className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
              href={`/${category.tag.toLowerCase()}/lorem-ipsum`}
            >
              {category.title}
            </Link>
            <p className="m-0">
              {category.imgCaption}
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
              <small>{category.writer}</small>
            </div>
            <div className="d-flex align-items-center">
              <small className="ml-3">
                <i className="far fa-eye mr-2"></i>{category.readCount}
              </small>
              <small className="ml-3">
                <i className="far fa-comment mr-2"></i>{category.commentCount}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
