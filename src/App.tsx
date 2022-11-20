import React from 'react';
import DigitalOclock from './components/DigitalOclock';
import './App.css';

class App extends React.Component {

  render(): React.ReactNode {
    return (
      <div className="App">
        <DigitalOclock name='Digital Oclock' />
      </div>
    )
  }
}

export default App;
