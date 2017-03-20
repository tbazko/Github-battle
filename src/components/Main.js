require('styles/App.css');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var newChildren = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { key: this.context.router.route.location.pathname })
    });
    return(
      <div className="main-container">
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {newChildren}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Main.contextTypes = {
  router: React.PropTypes.object
}
