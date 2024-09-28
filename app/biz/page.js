import AdImage from "@component/components/ad-image";
import BigNewsHeader from "@component/components/news-list/big-news-header";
import NewsHighlight from "@component/components/news-list/news-highlight";
import SmallNewsHeader from "@component/components/news-list/small-news-header";
import SectionTitle from "@component/components/section-title";
import { DUMMY_NEWS } from "@component/lib/data";

const news = DUMMY_NEWS.filter((item) => item.tag === "Biz");

export default function NationalNews() {
  const sortedNews = news.sort((a, b) => b.readCount - a.readCount);
  const bigNews = [sortedNews[1], sortedNews[2], sortedNews[3], sortedNews[4]];
  const smallNews = [
    sortedNews[5],
    sortedNews[6],
    sortedNews[7],
    sortedNews[8],
  ];
  return (
    <div className="row">
      <SectionTitle title="Highlight" />
      <NewsHighlight category={sortedNews[0]} />
      <AdImage />
      <SectionTitle title="Newest" />
      <BigNewsHeader category={bigNews} />
      <AdImage />
      <SmallNewsHeader category={smallNews} />
      <div className="col-12 d-flex justify-content-center">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
