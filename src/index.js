import React from 'react';
import {render} from 'react-dom';
import Layout from './pages/layout';
import * as serviceWorker from './serviceWorker';
import  './style/theme.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

library.add(faCircle);

render(
  <Layout />,
  document.getElementById('root')
)

serviceWorker.unregister();