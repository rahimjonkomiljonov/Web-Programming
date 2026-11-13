// The simplest possible component: a function that returns JSX.
// Used three times by its parent, so the same function gives three independent copies.
function Greeting() {
  return <p className="greeting">Hello, World!</p>;
}

export default Greeting;
