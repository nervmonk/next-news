"use client";
import Link from "next/link";

export default function ForumItem({ forum }) {
  return (
    <div className="col-12 mb-3">
      <div
        className="bg-white border p-3 rounded shadow-sm"
        style={{ transition: "all 0.3s ease" }}
      >
        <div className="d-flex align-items-center mb-2">
          <img
            src={`https://ui-avatars.com/api/?name=${forum.author}&background=random`}
            className="rounded-circle mr-2"
            style={{ width: "30px", height: "30px" }}
            alt={forum.author}
          />
          <span className="text-muted small">
            Posted by <span className="font-weight-bold text-primary">{forum.author}</span> on {forum.date}
          </span>
        </div>
        <Link href={`/forum/${forum.id}`} className="text-decoration-none">
          <h5 className="font-weight-bold mb-0">
            {forum.title}
          </h5>
        </Link>
        <div className="d-flex align-items-center mt-3">
          <div className="mr-3">
            <i className="far fa-comment-alt mr-1 text-primary"></i>
            <small>{forum.commentsCount} comments</small>
          </div>
          {forum.hot && (
            <span className="badge badge-danger text-uppercase font-weight-bold">
              <i className="fas fa-fire mr-1"></i> Hot
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
