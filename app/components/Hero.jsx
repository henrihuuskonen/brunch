import React from 'react'
import PropTypes from 'prop-types'

export default class Hero extends React.Component {
  render() {
    return (
      <div id="hero" className="title-container">
        <p className="title-container__title">{this.props.title}</p>
        <div className="title-container__inner">
          <h1 className="title-container__name">{this.props.name}</h1>
          <div className="title-container__name--divider"/>
          <p className="title-container__paragraph">{this.props.paragraph}</p>
        </div>
        <div className="hero__avatar-container"></div>
      </div>
    )
  }
}

Hero.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  paragraph: PropTypes.string
}
