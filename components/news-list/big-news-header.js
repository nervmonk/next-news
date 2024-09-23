import Link from "next/link";

export default function BigNewsHeader({ category }) {
  return category.map((news) => (
    <div className="col-lg-6" key={news.id}>
      <div className="position-relative mb-3">
        <div style={{ height: "280px" }}>
          <img
            className="img-fluid w-100"
            src={news.imgUrl}
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        <div
          className="bg-white border border-top-0 p-4"
          style={{ minHeight: "250px" }}
        >
          <div className="mb-2">
            <a
              className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
              href=""
            >
              {news.tag}
            </a>
            <a className="text-body" href="">
              <small>{news.datetime}</small>
            </a>
          </div>
          <Link
            className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
            href={`/${news.tag.toLowerCase()}/${news.id}`}
          >
            {news.title}
          </Link>
          <p className="m-0">{news.imgCaption}</p>
        </div>
        <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle mr-2"
              src={news.writerImg}
              width="25"
              height="25"
              alt=""
            />
            <small>{news.writer}</small>
          </div>
          <div className="d-flex align-items-center">
            <small className="ml-3">
              <i className="far fa-eye mr-2"></i>
              {news.readCount}
            </small>
            <small className="ml-3">
              <i className="far fa-comment mr-2"></i>
              {news.commentCount}
            </small>
          </div>
        </div>
      </div>
    </div>
  ));
}
