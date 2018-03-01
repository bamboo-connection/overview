import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview';
import { ids } from './../../ids';
import './style.css';

ReactDOM.render(<Overview ids={ids} />, document.getElementById('app-overview'));
