import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout location="/" noHeader="true">
    <section className="hero is-light is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <figure className="image is-128x128" style={{display: 'inline-block'}}>
            <img alt="Amin Shah Gilani" className="is-rounded" src="https://www.gravatar.com/avatar/e97345f1125996ea6e1a8394fd45da28?s=500"/>
          </figure>
          <h1 className="title">
            Amin Shah Gilani
          </h1>
          <h2 className="subtitle">
            Just another developer
          </h2>

          <div className="subtitle">
            <a className="link" target="_blank" rel="noopener noreferrer" href="https://facebook.com/aminshahgilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-facebook-square"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/amingilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-twitter-square"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://plus.google.com/+AminShahGilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-google-plus-square"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://instagram.com/amingilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-instagram"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/amingilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-linkedin"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://youtube.com/aminshahgilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-youtube-square"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/amingilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-github-square"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/3970701/amingilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-stack-overflow"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.quora.com/profile/Amin-Shah-Gilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-quora"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/user/amingilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-reddit-square"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://medium.com/@gilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-medium"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://news.ycombinator.com/user?id=amingilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-hacker-news-square"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://mastodon.technology/@g">
              <span className="icon is-large">
                <i className="fab fa-2x fa-mastodon"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="https://keybase.io/gilani">
              <span className="icon is-large">
                <i className="fab fa-2x fa-keybase"></i>
              </span>
            </a>

            <a className="link" target="_blank" rel="noopener noreferrer" href="mailto:amin@gilani.me">
              <span className="icon is-large">
                <i className="fas fa-2x fa-envelope-square"></i>
              </span>
            </a>
          </div>

          <div className="subtitle">
              <Link to="about" className="button is-rounded is-success">About</Link>
              &nbsp;&nbsp;
              <a className="button is-rounded is-primary" target="_blank" rel="noopener noreferrer" href="https://www.toptal.com/resume/amin-shah-gilani#contract-just-respected-software-architects">Resume</a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
