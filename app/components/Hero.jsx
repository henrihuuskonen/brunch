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
        <div className="hero__image-container">
          <img className="hero__image" alt="Wireframe background wallpaper"
            src="https://t3.ftcdn.net/jpg/02/80/09/80/240_F_280098052_VGr2NfQI6jAXqy7KzBoswbY95yGtp1cB.jpg"/>
        </div>
        <div className="hero__avatar-container">
          <img className="hero__avatar--image" alt="Avatar image of Henri Huuskonen" src="https://www.dropbox.com/s/ysyoqnfqtfhqvjh/henrihuuskonen.png?raw=1"/>
        </div>
      </div>
    )
  }
}

Hero.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  paragraph: PropTypes.string
}
