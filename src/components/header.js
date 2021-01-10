import PropTypes from "prop-types"
import React from "react"
import "../assets/css/style.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          {siteTitle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-default">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="javascript:void(0)">Helo</a>
              </div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                OUR MISSION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PORTOFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-button" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
