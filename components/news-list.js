import BigNewsHeader from "./news-list/big-news-header";
import NewsHighlight from "./news-list/news-highlight";
import NewsTags from "./news-tags";
import NewsLetter from "./newsletter";
import SmallNewsHeader from "./news-list/small-news-header";
import SocialMedia from "./social-media";
import TrendingNews from "./trending";
import Advertisement from "./advertisement";
import AdImage from "./ad-image";
import SectionTitle from "./section-title";

export default function NewsList() {
  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <SectionTitle title="Highlight" />
              <NewsHighlight />
              <AdImage />
              <SectionTitle title="Newest" />
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
              <AdImage />
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
            <Advertisement />
            <SocialMedia />
            <NewsLetter />
            <NewsTags />
          </div>
        </div>
      </div>
    </div>
  );
}
