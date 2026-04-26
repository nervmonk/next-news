import SectionTitle from "@component/components/section-title";
import { DUMMY_FORUMS } from "@component/lib/forum-data";
import TrendingNews from "@component/components/trending";
import SocialMedia from "@component/components/social-media";
import { DUMMY_NEWS } from "@component/lib/data";
import Link from "next/link";

export default async function ForumDetailPage(props) {
  const params = await props.params;
  const forum = DUMMY_FORUMS.find((f) => f.id === params.id);

  if (!forum) {
    return (
      <div className="container py-5 text-center">
        <h2>Forum not found</h2>
        <Link href="/forum" className="btn btn-primary mt-3">Back to Forum</Link>
      </div>
    );
  }

  const trendingSort = DUMMY_NEWS.sort((a, b) => b.readCount - a.readCount);
  const trending = trendingSort.slice(0, 5);

  return (
    <div className="container-fluid pt-lg-5 pt-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <Link href="/forum" className="text-dark font-weight-bold text-decoration-none">
                <i className="fa fa-arrow-left mr-2"></i>
                Back to Forum
              </Link>
            </div>
            <div className="bg-white border p-4 rounded shadow-sm mb-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${forum.author}&background=random`}
                  className="rounded-circle mr-2"
                  style={{ width: "40px", height: "40px" }}
                  alt={forum.author}
                />
                <div>
                  <h6 className="m-0 font-weight-bold text-primary">{forum.author}</h6>
                  <small className="text-muted">{forum.date}</small>
                </div>
              </div>
              <h2 className="font-weight-bold mb-3">{forum.title}</h2>
              <p className="lead" style={{ lineHeight: "1.8" }}>{forum.content}</p>

              <div className="d-flex align-items-center pt-3 border-top">
                <button className="btn btn-sm btn-outline-primary mr-2">
                  <i className="far fa-thumbs-up mr-1"></i> Like
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="far fa-share-square mr-1"></i> Share
                </button>
              </div>
            </div>

            <SectionTitle title={`Comments (${forum.comments.length})`} />

            {forum.comments.length > 0 ? (
              forum.comments.map((comment) => (
                <div key={comment.id} className="bg-white border p-3 rounded shadow-sm mb-3 ml-md-5">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${comment.author}&background=random`}
                      className="rounded-circle mr-2"
                      style={{ width: "30px", height: "30px" }}
                      alt={comment.author}
                    />
                    <div>
                      <span className="font-weight-bold small">{comment.author}</span>
                      <small className="text-muted ml-2">{comment.date}</small>
                    </div>
                  </div>
                  <p className="m-0 small">{comment.text}</p>
                </div>
              ))
            ) : (
              <div className="bg-white border p-4 rounded text-center">
                <p className="m-0 text-muted">No comments yet. Be the first to comment!</p>
              </div>
            )}

            <div className="bg-white border p-4 rounded shadow-sm mt-5">
              <h5 className="font-weight-bold mb-3">Leave a comment</h5>
              <div className="form-group">
                <textarea className="form-control" rows="4" placeholder="Write your comment..."></textarea>
              </div>
              <button className="btn btn-primary font-weight-bold">Post Comment</button>
            </div>
          </div>

          <div className="col-lg-4">
            <SocialMedia />
            <TrendingNews category={trending} />
          </div>
        </div>
      </div>
    </div>
  );
}
