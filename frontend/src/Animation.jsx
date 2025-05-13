import { useEffect, useState } from 'react';

const fps = 30;

export const Animation = ({ trace }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => f + 1);
    }, 1000 / fps);
    return () => clearInterval(interval);
  }, []);

  const step = Math.min(trace.length - 1, Math.floor(frame / 10));
  const current = trace[step];

  return (
    <div style={{ backgroundColor: '#fff0f0', padding: 40, fontSize: 32 }}>
      <div>Line {current.line}</div>
      <div>{current.action}: {current.name} = {current.value}</div>
    </div>
  );
};
