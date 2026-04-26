"use client";
import SectionTitle from "@component/components/section-title";
import { DUMMY_MERCH } from "@component/lib/merch-data";
import Link from "next/link";

export default function StorePage() {
    return (
        <div className="container-fluid pt-lg-5 pt-3 mb-3">
            <div className="container">
                <div className="row">
                    <SectionTitle title="🛒 TekNika Merch Store" />
                    <div className="col-12 mb-4 text-center">
                        <p className="lead text-muted">Support your favorite tech news site with our premium merchandise.</p>
                    </div>

                    {DUMMY_MERCH.map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-6 mb-4">
                            <div className="bg-white border rounded shadow-sm h-100 d-flex flex-column overflow-hidden product-card">
                                <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                                    <img
                                        src={product.image}
                                        className="w-100 h-100 object-fit-cover transition-transform"
                                        alt={product.name}
                                    />
                                    <div className="position-absolute top-0 right-0 p-2">
                                        <span className="badge badge-primary font-weight-bold">${product.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="p-3 d-flex flex-column flex-grow-1">
                                    <small className="text-uppercase text-primary font-weight-bold mb-1">{product.category}</small>
                                    <h6 className="font-weight-bold mb-2">{product.name}</h6>
                                    <p className="text-muted small mb-3 flex-grow-1">{product.description.substring(0, 60)}...</p>
                                    <Link href={`/store/${product.id}`} className="btn btn-primary btn-block font-weight-bold">
                                        VIEW DETAILS
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .product-card:hover .transition-transform {
          transform: scale(1.1);
        }
        .transition-transform {
          transition: transform 0.5s ease;
        }
        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
        </div>
    );
}
