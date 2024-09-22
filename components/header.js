import Link from "next/link";
import NavLink from "./nav-link";
import NavDropdown from "./dropdown-nav";

export default function Header() {
  return (
    <>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center bg-dark px-lg-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-n2">
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    {getCurrentDateInfo()}
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Advertise
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body small" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 text-right d-none d-md-block">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-auto mr-n2">
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-twitter"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-facebook-f"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-linkedin-in"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-instagram"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-google-plus-g"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-youtube"></small>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row align-items-center bg-white py-3 px-lg-5">
          <div className="col-lg-4">
            <a href="index.html" className="navbar-brand p-0 d-none d-lg-block">
              <h1 className="m-0 display-4 text-uppercase text-primary">
                Tek
                <span className="text-secondary font-weight-normal">Nika</span>
              </h1>
            </a>
          </div>
          <div className="col-lg-8 text-center text-lg-right">
            <a href="https://htmlcodex.com">
              <img className="img-fluid" src="img/ads-728x90.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-uppercase text-primary">
              Tek
              <span className="text-white font-weight-normal">Nika</span>
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <NavLink href="/" children="Home" />
              <NavLink href="/biz" children="Biz" />
              <NavLink href="/tech" children="Tech" />
              <NavLink href="/policy" children="Policy" />
              <NavLink href="/pop" children="Pop" />
              <NavLink href="/culture" children="Culture" />
              <NavDropdown />
              <NavLink href="/contact" children="Contact" />
            </div>
            <div
              className="input-group ml-auto d-none d-lg-flex"
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <input
                type="text"
                className="form-control border-0"
                placeholder="Keyword"
              />
              <div className="input-group-append">
                <button className="input-group-text bg-primary text-dark border-0 px-3">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

function getCurrentDateInfo() {
  const today = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDay = daysOfWeek[today.getDay()]; // Get the day name
  const currentMonth = monthsOfYear[today.getMonth()]; // Get the month name
  const currentDate = today.getDate(); // Get the date
  const currentYear = today.getFullYear(); // Get the year

  return `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
}
