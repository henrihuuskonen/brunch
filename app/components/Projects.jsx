import React from 'react'
import PropTypes from 'prop-types'

export default class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="title-container">
        <p className="title-container__title">{this.props.title}</p>
        <div className="title-container__inner">
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  title: PropTypes.string
}
