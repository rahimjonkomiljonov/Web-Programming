// Simplest possible React component
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Using it in another component
function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('demo-hello-world')).render(<App />);
