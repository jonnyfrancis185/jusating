import { useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');

  async function getAdvice() {
    const result = await fetch('https://api.adviceslip.com/advice');
    const data = await result.json();

    setAdvice(data.slip.advice);
  }

  return (
    <>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
    </>
  );
}
