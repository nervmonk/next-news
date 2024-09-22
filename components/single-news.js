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
                src="/img/news-700x435-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white border border-top-0 p-4">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Business
                    </a>
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
                    <span>John Doe</span>
                  </div>
                </div>
                <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
                  Lorem ipsum dolor sit amet elit vitae porta diam...
                </h1>
                <p>
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p>
                  Voluptua est takimata stet invidunt sed rebum nonumy stet,
                  clita aliquyam dolores vero stet consetetur elitr takimata
                  rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                  dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                  Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                  aliquyam ipsum justo et, clita lorem sit vero amet amet est
                  dolor elitr, stet et no diam sit. Dolor erat justo dolore sit
                  invidunt.
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
                  Lorem ipsum dolor sit amet elit
                </h3>
                <img
                  className="img-fluid w-50 float-left mr-4 mb-2"
                  src="/img/news-800x500-1.jpg"
                />
                <p>
                  Diam dolor est labore duo invidunt ipsum clita et, sed et
                  lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                  dolores sit kasd diam takimata justo diam lorem sed. Magna
                  amet sed rebum eos. Clita no magna no dolor erat diam tempor
                  rebum consetetur, sanctus labore sed nonumy diam lorem amet
                  eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                  sadipscing gubergren erat. Gubergren at lorem invidunt
                  sadipscing rebum sit amet ut ut, voluptua diam dolores at
                  sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                  Invidunt sed diam dolores takimata dolor dolore dolore sit.
                  Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam
                  eirmod kasd lorem clita sanctus ut consetetur et. Et duo
                  tempor sea kasd clita ipsum et.
                </p>
                <h5 className="text-uppercase font-weight-bold mb-3">
                  Lorem ipsum dolor sit amet elit
                </h5>
                <img
                  className="img-fluid w-50 float-right mr-4 mb-2"
                  src="/img/news-800x500-2.jpg"
                />
                <p>
                  Diam dolor est labore duo invidunt ipsum clita et, sed et
                  lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                  dolores sit kasd diam takimata justo diam lorem sed. Magna
                  amet sed rebum eos. Clita no magna no dolor erat diam tempor
                  rebum consetetur, sanctus labore sed nonumy diam lorem amet
                  eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                  sadipscing gubergren erat. Gubergren at lorem invidunt
                  sadipscing rebum sit amet ut ut, voluptua diam dolores at
                  sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                  Invidunt sed diam dolores takimata dolor dolore dolore sit.
                  Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam
                  eirmod kasd lorem clita sanctus ut consetetur et. Et duo
                  tempor sea kasd clita ipsum et. Takimata kasd diam justo est
                  eos erat aliquyam et ut.
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
                        John Doe
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
                        John Doe
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
                            John Doe
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
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
              </div>
              <div className="bg-white border border-top-0 p-3">
                <div className="d-flex flex-wrap m-n1">
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Politics
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Business
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Corporate
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Business
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Health
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Education
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Science
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Business
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Foods
                  </a>
                  <a href="" className="btn btn-sm btn-outline-secondary m-1">
                    Travel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
