import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '././assets/css/icofont.min.css';
import '././assets/css/style.min.css';

import RoutePage from './pages/routes.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RoutePage />
   </React.StrictMode>
);
