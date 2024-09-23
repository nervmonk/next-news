import { DUMMY_NEWS } from "@component/lib/data";

export default function News({ params }) {
  const id = params.slug;
  const news = DUMMY_NEWS.find((item) => item.id === +id);

  return (
    <div className="position-relative mb-3">
      <img
        className="img-fluid w-100"
        src={news.imgUrl}
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
          maxHeight: "540px",
        }}
      />
      <blockquote className="blockquote">
        <p className="mb-0">{news.imgCaption}</p>
        <footer className="blockquote-footer">{news.imgCredit}</footer>
      </blockquote>
      <div className="bg-white border border-top-0 p-4">
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <a className="text-body" href="">
              {news.datetime}
            </a>
          </div>
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle mr-2"
              src={news.writerImg}
              width="25"
              height="25"
              alt=""
            />
            <span>{news.writer}</span>
          </div>
        </div>
        <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
          {news.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: news.content }} />
        <div className="col-lg-12 mb-3">
          <a href="">
            <img className="img-fluid w-100" src="/img/ads-728x90.png" alt="" />
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-end bg-white border border-top-0 p-4">
        <div className="d-flex align-items-center">
          <span className="ml-3">
            <i className="far fa-eye mr-2"></i>
            {news.readCount}
          </span>
          <span className="ml-3">
            <i className="far fa-comment mr-2"></i>
            {news.commentCount}
          </span>
        </div>
      </div>
    </div>
  );
}
