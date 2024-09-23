import AdImage from "@component/components/ad-image";
import NewsList from "@component/components/news-list";
import BigNewsHeader from "@component/components/news-list/big-news-header";
import NewsHighlight from "@component/components/news-list/news-highlight";
import SmallNewsHeader from "@component/components/news-list/small-news-header";
import SectionTitle from "@component/components/section-title";
import { DUMMY_NEWS } from "@component/lib/data";

const news = DUMMY_NEWS.filter((item) => item.tag === "Biz");

export default function NationalNews() {
  const sortedNews = news.sort((a, b) => b.readCount - a.readCount);
  const bigNews = [sortedNews[1], sortedNews[2], sortedNews[3], sortedNews[4]];
  const smallNews = [sortedNews[5], sortedNews[6], sortedNews[7], sortedNews[8]];
  return (
    <div className="row">
      <SectionTitle title="Highlight" />
      <NewsHighlight category={sortedNews[0]} />
      <AdImage />
      <SectionTitle title="Newest" />
      <BigNewsHeader category={bigNews} />
      <AdImage />
      <SmallNewsHeader category={smallNews} />
    </div>
  );
}
