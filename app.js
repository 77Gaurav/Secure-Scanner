/*import React from 'react';
import ScanForm from './components/scanForm.js';

function App() {
  return (
    <div>
      <h1>Secure Scanner</h1>
      <ScanForm />
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  const handleScan = async () => {
    if (!url) {
      alert('Please enter a URL.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.isSecure) {
        alert('✅ The site is secured.');
      } else {
        alert('❌ The site is vulnerable.');
      }
    } catch (error) {
      console.error('Error scanning URL:', error);
      alert('An error occurred while scanning the URL.');
    }
  };

  return (
    <div className="root">
      <h1>Secure Scanner</h1>
      <p>Enter URL to scan</p>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleScan}>Scan</button>
    </div>
  );
}

export default App;