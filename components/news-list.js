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

export default function NewsList({ category }) {
  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <SectionTitle title="Highlight" />
              <NewsHighlight category={category} />
              <AdImage />
              <SectionTitle title="Newest" />
              <BigNewsHeader category={category} />
              <AdImage />
              <SmallNewsHeader category={category} />
            </div>
          </div>
          <div className="col-lg-4">
            <TrendingNews category={category} />
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
