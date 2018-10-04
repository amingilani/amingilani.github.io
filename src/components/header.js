import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerExpanded: false,
    };
  }

  toggleBurger() {
    this.setState({
      burgerExpanded: !this.state.burgerExpanded,
    })
  }

  render() {

    const activeClass = this.state.burgerExpanded ? 'is-active' : '';
      return (
        <nav className="has-background-light navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div role="button" onClick={this.toggleBurger.bind(this)} className={`navbar-burger burger ${activeClass}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${activeClass}`}>
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <a className="navbar-item" target="_blank" rel="noopener noreferrer" href="https://www.toptal.com/resume/amin-shah-gilani#contract-just-respected-software-architects">
              Resume
            </a>
          </div>
        </div>
      </nav>
    );
  }
}


export default Header
