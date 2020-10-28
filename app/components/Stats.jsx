import React from 'react'
import PropTypes from 'prop-types'

export default class Hero extends React.Component {
  render() {
    return (
      <div id="stats" className="title-container">
        <p className="title-container__title">{this.props.title}</p>
        <div className="title-container__inner">
          <div className="stats__row">
            <p className="stats__text">Name</p>
            <p className="stats__text black">Henri Huuskonen</p>
          </div>
          <div className="stats__row">
            <p className="stats__text">Age</p>
            <p className="stats__text black">24</p>
          </div>
          <div className="stats__row">
            <p className="stats__text">Nationality</p>
            <p className="stats__text black">Finnish</p>
          </div>
          <div className="stats__row">
            <p className="stats__text">Location</p>
            <p className="stats__text black">Helsinki, Finland</p>
          </div>
          <div className="stats__row">
            <p className="stats__text">Languages</p>
            <p className="stats__text black">Finnish, English</p>
          </div>
          <div className="stats__row">
            <p className="stats__text">Job history</p>
          </div>
          <p className="stats__text black">Swappie 01.02.2019 - Present</p>
        </div>
      </div>
    )
  }
}

Hero.propTypes = {
  title: PropTypes.string
}
