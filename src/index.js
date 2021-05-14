import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';
import { Routers } from './components/Routers';

const applicationRoot = document.getElementById('root');
ReactDOM.render(<Routers />, applicationRoot)
