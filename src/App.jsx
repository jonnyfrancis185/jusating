export default function App() {
  async function getAdvice() {
    const result = await fetch('https://api.adviceslip.com/advice');
    const advice = await result.json();

    console.log(advice);
  }

  return (
    <>
      <h1>test</h1>
      <p>juice</p>
      <button onClick={getAdvice}>Get Advice</button>
    </>
  );
}
