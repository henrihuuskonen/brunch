import React from 'react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <p className="footer__text">Henri Huuskonen © Copyright 2020</p>
      </div>
    )
  }
}

Footer.propTypes = {
  title: PropTypes.string
}
