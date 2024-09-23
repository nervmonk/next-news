import Link from "next/link";

export default function TrendingNews({ category }) {
  const pics = [
    "/img/news-110x110-2.jpg",
    "/img/ryan.jpg",
    "/img/joker.jpg",
    "/img/unsplash.jpg",
    "/img/news-110x110-1.jpg",
  ];
  return (
    <div className="mb-3">
      <div className="section-title mb-0">
        <h4 className="m-0 text-uppercase font-weight-bold">Banyak Dibaca</h4>
      </div>
      <div className="bg-white border border-top-0 p-3">
        {category.map((news) => (
          <div
            className="d-flex align-items-center bg-white mb-3"
            style={{ height: "100px" }}
            key={news.id}
          >
            <img
              className="img-fluid"
              src={news.imgUrl}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "110px",
                maxWidth: "110px",
                objectFit: "cover",
              }}
            />
            <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href=""
                >
                  {news.tag}
                </a>
                <a className="text-body" href="">
                  <small>{news.datetime}</small>
                </a>
              </div>
              <Link
                className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                href={`/${news.tag.toLowerCase()}/lorem-ipsum`}
              >
                {news.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
