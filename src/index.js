import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Layout from './pages/layout';
import * as serviceWorker from './serviceWorker';
import  './style/theme.css';
import store from './store';
import { addTask } from './actions/taskActions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle,faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';




library.add(faCircle, faPlus, faCheckCircle);
window.store = store;
window.addTask = addTask;

render(
  <Provider store={store}>
     <Layout />
  </Provider>,
 
  document.getElementById('root')
)

serviceWorker.unregister();