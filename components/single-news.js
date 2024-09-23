import NewsTags from "./news-tags";
import NewsLetter from "./newsletter";
import SocialMedia from "./social-media";
import TrendingNews from "./trending";

export default function SingleNews() {
  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-relative mb-3">
              <img
                className="img-fluid w-100"
                src="/img/workers.jpg"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  maxHeight: "540px",
                }}
              />
              <blockquote className="blockquote">
                <p className="mb-0">
                  A well-known quote, contained in a blockquote element.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <div className="bg-white border border-top-0 p-4">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a className="text-body" href="">
                      Jan 01, 2045
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle mr-2"
                      src="/img/user.jpg"
                      width="25"
                      height="25"
                      alt=""
                    />
                    <span>Putra Nababan</span>
                  </div>
                </div>
                <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
                  Story About Kris and Her Love with Cats
                </h1>
                <p>
                  Once upon a time in a quaint little village nestled between
                  rolling hills, there lived a young girl named Lila. She had a
                  curious spirit and an insatiable thirst for adventure. Every
                  day after finishing her chores, Lila would wander into the
                  lush green woods that surrounded her home, dreaming of the
                  magical creatures and hidden treasures that might lie beyond
                  the trees.
                </p>
                <p>
                  One sunny afternoon, while exploring a particularly dense
                  thicket, Lila stumbled upon a shimmering pond. Its waters
                  sparkled like diamonds under the sun, and as she approached,
                  she noticed something glimmering at the bottom. Intrigued, she
                  leaned closer and saw a small, golden key resting on a smooth
                  stone. Excited by her discovery, Lila reached in to retrieve
                  it, unaware that this key would unlock a world she had only
                  imagined.
                </p>
                <div className="col-lg-12 mb-3">
                  <a href="">
                    <img
                      className="img-fluid w-100"
                      src="/img/ads-728x90.png"
                      alt=""
                    />
                  </a>
                </div>
                <h3 className="text-uppercase font-weight-bold mb-3">
                  Enter the Realm of fantasy
                </h3>
                <img
                  className="img-fluid w-50 float-left mr-4 mb-2"
                  src="/img/news-800x500-1.jpg"
                />
                <p>
                  With the key clutched tightly in her hand, Lila followed a
                  winding path deeper into the woods, where she soon encountered
                  an ancient, vine-covered door set into the side of a massive
                  oak tree. Heart racing, she inserted the key into the lock,
                  and with a soft click, the door creaked open to reveal a
                  vibrant realm filled with fantastical creatures, from talking
                  animals to fairies flitting about like living jewels. Each
                  inhabitant welcomed her warmly, eager to share their stories
                  and adventures.
                </p>
                <h5 className="text-uppercase font-weight-bold mb-3">
                  Nothing will ever same again
                </h5>
                <img
                  className="img-fluid w-50 float-right mr-4 mb-2"
                  src="/img/news-800x500-2.jpg"
                />
                <p>
                  As dusk began to fall, Lila realized it was time to return
                  home, but her heart was filled with joy and wonder. She knew
                  that the key had opened not just a door to a new world, but
                  also to her own imagination. With promises to return, she
                  stepped back through the door, the magical realm still alive
                  in her thoughts. From that day on, Lila embraced every moment,
                  knowing that adventure awaited just beyond the familiar.
                </p>
                <div className="col-lg-12 mb-3">
                  <a href="">
                    <img
                      className="img-fluid w-100"
                      src="/img/ads-728x90.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-end bg-white border border-top-0 p-4">
                <div className="d-flex align-items-center">
                  <span className="ml-3">
                    <i className="far fa-eye mr-2"></i>12345
                  </span>
                  <span className="ml-3">
                    <i className="far fa-comment mr-2"></i>123
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">
                  3 Comments
                </h4>
              </div>
              <div className="bg-white border border-top-0 p-4">
                <div className="media mb-4">
                  <img
                    src="/img/user.jpg"
                    alt="Image"
                    className="img-fluid mr-3 mt-1"
                    style={{ width: "45px" }}
                  />
                  <div className="media-body">
                    <h6>
                      <a className="text-secondary font-weight-bold" href="">
                        Ryan Dwiky
                      </a>{" "}
                      <small>
                        <i>01 Jan 2045</i>
                      </small>
                    </h6>
                    <p>
                      Diam amet duo labore stet elitr invidunt ea clita ipsum
                      voluptua, tempor labore accusam ipsum et no at. Kasd diam
                      tempor rebum magna dolores sed sed eirmod ipsum.
                    </p>
                    <button className="btn btn-sm btn-outline-secondary">
                      Reply
                    </button>
                  </div>
                </div>
                <div className="media">
                  <img
                    src="/img/user.jpg"
                    alt="Image"
                    className="img-fluid mr-3 mt-1"
                    style={{ width: "45px" }}
                  />
                  <div className="media-body">
                    <h6>
                      <a className="text-secondary font-weight-bold" href="">
                        Ryan Dwiky
                      </a>{" "}
                      <small>
                        <i>01 Jan 2045</i>
                      </small>
                    </h6>
                    <p>
                      Diam amet duo labore stet elitr invidunt ea clita ipsum
                      voluptua, tempor labore accusam ipsum et no at. Kasd diam
                      tempor rebum magna dolores sed sed eirmod ipsum.
                    </p>
                    <button className="btn btn-sm btn-outline-secondary">
                      Reply
                    </button>
                    <div className="media mt-4">
                      <img
                        src="/img/user.jpg"
                        alt="Image"
                        className="img-fluid mr-3 mt-1"
                        style={{ width: "45px" }}
                      />
                      <div className="media-body">
                        <h6>
                          <a
                            className="text-secondary font-weight-bold"
                            href=""
                          >
                            Ryan Dwiky
                          </a>{" "}
                          <small>
                            <i>01 Jan 2045</i>
                          </small>
                        </h6>
                        <p>
                          Diam amet duo labore stet elitr invidunt ea clita
                          ipsum voluptua, tempor labore accusam ipsum et no at.
                          Kasd diam tempor rebum magna dolores sed sed eirmod
                          ipsum.
                        </p>
                        <button className="btn btn-sm btn-outline-secondary">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">
                  Leave a comment
                </h4>
              </div>
              <div className="bg-white border border-top-0 p-4">
                <form>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label for="name">Name *</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label for="email">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="website">Website</label>
                    <input type="url" className="form-control" id="website" />
                  </div>

                  <div className="form-group">
                    <label for="message">Message *</label>
                    <textarea
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group mb-0">
                    <input
                      type="submit"
                      value="Leave a comment"
                      className="btn btn-primary font-weight-semi-bold py-2 px-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <SocialMedia />
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">
                  Advertisement
                </h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <a href="">
                  <img
                    className="img-fluid"
                    src="/img/news-800x500-2.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <TrendingNews />
            <NewsLetter />
            <NewsTags />
          </div>
        </div>
      </div>
    </div>
  );
}
