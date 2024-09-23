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
import { DUMMY_NEWS } from "@component/lib/data";

export default function NewsList({ category }) {
  const sortedNews = category.sort((a, b) => b.readCount - a.readCount);
  const bigNews = [sortedNews[1], sortedNews[2], sortedNews[3], sortedNews[4]];
  const smallNews = [sortedNews[5], sortedNews[6], sortedNews[7], sortedNews[8]];
  const trendingSort = DUMMY_NEWS.sort((a, b) => b.readCount - a.readCount);
  const trending = [trendingSort[0], trendingSort[1], trendingSort[2], trendingSort[3], trendingSort[4]];
  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <SectionTitle title="Highlight" />
              <NewsHighlight category={sortedNews[0]} />
              <AdImage />
              <SectionTitle title="Newest" />
              <BigNewsHeader category={bigNews} />
              <AdImage />
              <SmallNewsHeader category={smallNews} />
            </div>
          </div>
          <div className="col-lg-4">
            <TrendingNews category={trending} />
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
