import Advertisement from "@component/components/advertisement";
import NewsTags from "@component/components/news-tags";
import NewsLetter from "@component/components/newsletter";
import SocialMedia from "@component/components/social-media";
import TrendingNews from "@component/components/trending";
import { DUMMY_NEWS } from "@component/lib/data";

export default function BizLayout({children}){
    const trendingSort = DUMMY_NEWS.sort((a, b) => b.readCount - a.readCount);
    const trending = [trendingSort[0], trendingSort[1], trendingSort[2], trendingSort[3], trendingSort[4]];
    return (
        <div className="container-fluid pt-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {children}
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
    )
}