import { useState } from 'react';
import { Animation } from './Animation';

function App() {
  const [code, setCode] = useState('');
  const [trace, setTrace] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:4000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    setMessage(data.message || 'No response');

    const traceRes = await fetch('http://localhost:4000/trace.json');
    const traceData = await traceRes.json();
    setTrace(traceData);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>AI Code Animator</h1>
      <textarea
        placeholder="Enter your code here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={60}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>
        Generate Animation
      </button>
      <p>{message}</p>

       <div style={{ marginTop: '2rem' }}>
        {trace && <Animation trace={trace} />}
      </div>
    </div>
  );
}

export default App;
