import React from 'react'
import { Link } from 'gatsby'

const Header = ({ noHeader, siteTitle }) => {
  if (noHeader) {
    return ''
  } else {
    return (
      <nav class="has-background-light navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <a class="navbar-item" target="_blank" rel="noopener noreferrer" href="https://www.toptal.com/resume/amin-shah-gilani#contract-just-respected-software-architects">
            Resume
          </a>
        </div>
      </div>
    </nav>
    )
  }
}

export default Header
