import SectionTitle from "@component/components/section-title";
import ForumItem from "@component/components/forum-item";
import TrendingNews from "@component/components/trending";
import Advertisement from "@component/components/advertisement";
import SocialMedia from "@component/components/social-media";
import { DUMMY_FORUMS } from "@component/lib/forum-data";
import { DUMMY_NEWS } from "@component/lib/data";

export default function ForumPage() {
  const hotForums = DUMMY_FORUMS.filter((f) => f.hot);
  const recentForums = DUMMY_FORUMS.filter((f) => !f.hot);
  
  const trendingSort = DUMMY_NEWS.sort((a, b) => b.readCount - a.readCount);
  const trending = trendingSort.slice(0, 5);

  return (
    <div className="container-fluid pt-lg-5 pt-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <SectionTitle title="🔥 Hot Discussions" />
              {hotForums.map((forum) => (
                <ForumItem key={forum.id} forum={forum} />
              ))}
              
              <div className="col-12 py-3">
                <hr />
              </div>
              
              <SectionTitle title="🕒 Recent Discussions" />
              {recentForums.map((forum) => (
                <ForumItem key={forum.id} forum={forum} />
              ))}
            </div>
          </div>
          
          <div className="col-lg-4">
            <SocialMedia />
            <TrendingNews category={trending} />
            <Advertisement />
          </div>
        </div>
      </div>
    </div>
  );
}
