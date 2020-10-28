import React from 'react'
import PropTypes from 'prop-types'

export default class Socials extends React.Component {
  render() {
    return (
      <div id="socials" className="title-container">
        <p className="title-container__title">{this.props.title}</p>
        <div className="title-container__inner">
          <div className="socials__container">
            <a className="socials__button">GitHub</a>
            <a className="socials__button">LinkedIn</a>
            <a className="socials__button">Facebook</a>
            <a className="socials__button">Instagram</a>
          </div>
        </div>
      </div>
    )
  }
}

Socials.propTypes = {
  title: PropTypes.string
}
