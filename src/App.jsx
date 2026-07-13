import { useEffect, useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    console.log('getAdvice called...');

    const result = await fetch('https://api.adviceslip.com/advice');
    const data = await result.json();

    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  return (
    <>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have read {count} pieces of advice.</p>
    </>
  );
}
