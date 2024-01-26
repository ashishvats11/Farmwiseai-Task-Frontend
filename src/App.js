

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddFields from './components/AddFields';
import DynamicDataCollection from './components/DynamicDataCollection';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', gap: '10px' }}>
          <div style={{ justifyContent: 'center' }}>
            <Link to='/addfields' style={{ textDecoration: 'none', color: 'white' }}>
              <button style={{ backgroundColor: '#4caf50', color: 'white', border: '2px solid black' }}>
                Add Field
              </button>
            </Link>
          </div>
          <div>
            <Link to='/datacollection' style={{ textDecoration: 'none', color: 'white' }}>
              <button style={{ backgroundColor: '#4caf50', color: 'white', border: '2px solid black' }}>
                Data Collection
              </button>
            </Link>
          </div>
        </div>

        <Routes>
          <Route path='/addfields' element={<AddFields />} />
          <Route path="/datacollection" element={<DynamicDataCollection />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
