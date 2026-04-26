import { DUMMY_MERCH } from "@component/lib/merch-data";
import Link from "next/link";

export default async function ProductDetailPage(props) {
    const params = await props.params;
    const product = DUMMY_MERCH.find((p) => p.id === params.id);

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h2>Product not found</h2>
                <Link href="/store" className="btn btn-primary mt-3">Back to Store</Link>
            </div>
        );
    }

    return (
        <div className="container-fluid pt-lg-5 pt-3 mb-3">
            <div className="container">
                <div className="mb-4">
                    <Link href="/store" className="text-dark font-weight-bold text-decoration-none">
                        <i className="fa fa-arrow-left mr-2"></i>
                        Back to Store
                    </Link>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="bg-white border p-2 rounded shadow-sm">
                            <img src={product.image} className="img-fluid w-100 rounded" alt={product.name} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="bg-white border p-4 rounded shadow-sm mb-4">
                            <small className="text-uppercase text-primary font-weight-bold">{product.category}</small>
                            <h2 className="font-weight-bold mb-2">{product.name}</h2>
                            <h3 className="text-primary font-weight-bold mb-4">${product.price.toFixed(2)}</h3>
                            <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>{product.description}</p>

                            <div className="form-group mb-4">
                                <label className="font-weight-bold">Select Size</label>
                                <div className="d-flex flex-wrap">
                                    {["S", "M", "L", "XL"].map((size) => (
                                        <button key={size} className="btn btn-outline-secondary mr-2 mb-2 px-4">{size}</button>
                                    ))}
                                </div>
                            </div>

                            <button className="btn btn-primary btn-lg btn-block font-weight-bold">
                                <i className="fa fa-shopping-cart mr-2"></i> ADD TO CART
                            </button>
                        </div>

                        <div className="bg-white border p-4 rounded shadow-sm">
                            <h5 className="font-weight-bold mb-4">💳 Checkout Information</h5>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Doe" />
                                </div>
                                <div className="col-12 form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="john@example.com" />
                                </div>
                                <div className="col-12 form-group">
                                    <label>Shipping Address</label>
                                    <textarea className="form-control" rows="2" placeholder="Street name, City, Zip Code"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-dark btn-block font-weight-bold mt-3 text-primary">
                                PLACE ORDER NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
