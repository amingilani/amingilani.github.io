import React from 'react'

const Footer = () => (
  <footer className="footer has-background-light">
    <div className="content has-text-centered">
      <p>
        <span className="icon">
          <i className="fas fa-code"></i>
        </span>
        {} with {}
        <span className="icon">
          <i className="fas fa-coffee"></i>
        </span>
        {} by <a href="https://gilani.me">Amin Shah Gilani</a> in Lahore,
        Pakistan
        <br />
        The content on this website is usually released under{' '}
        <a href="https://creativecommons.org/share-your-work/public-domain/cc0">
          CC0
        </a>
        .
      </p>
    </div>
  </footer>
)

export default Footer
