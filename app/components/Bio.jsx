import React from 'react'
import PropTypes from 'prop-types'

export default class Bio extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="title-container">
        <p className="title-container__title">{this.props.title}</p>
        <div className="title-container__inner">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet facilisis leo, vel
                        pretium metus cursus ut. Praesent quis augue ligula. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Praesent maximus quam vel urna ultricies
                        eleifend. Mauris vitae sapien risus. Integer sit amet condimentum nisi. Nam pulvinar mauris eu
                        est semper posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Aliquam vel facilisis velit.</p>
        </div>
      </div>
    )
  }
}

Bio.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
}
