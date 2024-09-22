import BigNewsHeader from "./big-news-header";
import NewsHighlight from "./news-highlight";
import NewsTags from "./news-tags";
import NewsLetter from "./newsletter";
import SmallNewsHeader from "./small-news-header";
import SocialMedia from "./social-media";
import TrendingNews from "./trending";

export default function NewsList() {
  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Highlight
                  </h4>
                </div>
              </div>
              <NewsHighlight />
              <div className="col-lg-12 mb-3">
                <a href="">
                  <img
                    className="img-fluid w-100"
                    src="/img/ads-728x90.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-12">
                <div className="section-title">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Newest
                  </h4>
                </div>
              </div>
              <BigNewsHeader />
              <BigNewsHeader />
              <BigNewsHeader />
              <BigNewsHeader />
              <div className="col-lg-6">
                <SmallNewsHeader />
                <SmallNewsHeader />
              </div>
              <div className="col-lg-6">
                <SmallNewsHeader />
                <SmallNewsHeader />
              </div>
              <div className="col-lg-12 mb-3">
                <a href="">
                  <img
                    className="img-fluid w-100"
                    src="img/ads-728x90.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-6">
                <SmallNewsHeader />
                <SmallNewsHeader />
              </div>
              <div className="col-lg-6">
                <SmallNewsHeader />
                <SmallNewsHeader />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <TrendingNews />
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">
                  Advertisement
                </h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <a href="">
                  <img
                    className="img-fluid"
                    src="/img/news-800x500-2.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <SocialMedia />
            <NewsLetter />
            <NewsTags />
          </div>
        </div>
      </div>
    </div>
  );
}
