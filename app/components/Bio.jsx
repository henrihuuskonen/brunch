import React from 'react'
import PropTypes from 'prop-types'

export default class Bio extends React.Component {
  render() {
    return (
      <div id="bio" className="title-container">
        <p className="title-container__title">{this.props.title}</p>
        <div className="title-container__inner">
          <p>Software developer, tech enthusiast & a man of too many projects</p>
        </div>
      </div>
    )
  }
}

Bio.propTypes = {
  title: PropTypes.string
}
