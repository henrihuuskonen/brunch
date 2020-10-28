import React from 'react'
import PropTypes from 'prop-types'

export default class Socials extends React.Component {
  render() {
    return (
      <div id="socials" className="title-container">
        <p className="title-container__title">{this.props.title}</p>
        <div className="title-container__inner">
          <div className="socials__container">
            <a className="socials__button" href="https://github.com/henrihuuskonen">GitHub</a>
            <a className="socials__button" href="https://www.linkedin.com/in/henri-huuskonen-34850853/">LinkedIn</a>
            <a className="socials__button" href="https://www.facebook.com/huuskonenhenri/">Facebook</a>
            <a className="socials__button" href="https://www.instagram.com/huuskonen/">Instagram</a>
          </div>
        </div>
      </div>
    )
  }
}

Socials.propTypes = {
  title: PropTypes.string
}
