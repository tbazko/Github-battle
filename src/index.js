import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('app')
);