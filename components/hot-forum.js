"use client";
import Link from "next/link";
import SectionTitle from "./section-title";
import { DUMMY_FORUMS } from "@component/lib/forum-data";

export default function HotForum() {
  const hotForums = DUMMY_FORUMS.filter((f) => f.hot).slice(0, 3);

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between mb-3">
            <h4 className="m-0 text-uppercase font-weight-bold">🔥 Hot in Forum</h4>
            <Link href="/forum" className="text-secondary font-weight-bold small text-decoration-none">
              VIEW ALL
            </Link>
          </div>
          {hotForums.map((forum) => (
            <div key={forum.id} className="col-lg-4 mb-3">
              <div
                className="bg-white border p-3 rounded shadow-sm h-100 d-flex flex-column justify-content-between"
                style={{ transition: "all 0.3s ease", cursor: "pointer" }}
              >
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${forum.author}&background=random`}
                      className="rounded-circle mr-2"
                      style={{ width: "25px", height: "25px" }}
                      alt={forum.author}
                    />
                    <span className="text-muted small" style={{ fontSize: "0.75rem" }}>
                      {forum.author}
                    </span>
                  </div>
                  <Link href={`/forum/${forum.id}`} className="text-decoration-none">
                    <h6 className="font-weight-bold mb-2 hover-text-primary">
                      {forum.title}
                    </h6>
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="text-muted small">
                    <i className="far fa-comment-alt mr-1 text-primary"></i>
                    {forum.commentsCount}
                  </div>
                  <span className="badge badge-danger text-uppercase font-weight-bold" style={{ fontSize: "0.6rem" }}>
                    HOT
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .hover-text-primary:hover {
          color: #cfb8af !important;
        }
      `}</style>
    </div>
  );
}
