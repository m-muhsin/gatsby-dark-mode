import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import ThemeContext from '../context/ThemeContext'

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div className="dark-switcher" onClick={theme.toggleDark}>
            {theme.dark ? (
              <span>Light mode &#9728;</span>
            ) : (
              <span>Dark mode &#9790;</span>
            )}
          </div>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
