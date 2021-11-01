import React from 'react';
import { render } from 'react-dom';
import App from '../public/client/Components/App.tsx';

// uncomment so that webpack can bundle styles
import '../public/client/scss/application.scss';

render(<App />, document.getElementById('root'));
