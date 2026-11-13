import { useState } from 'react';

// Lecture example: conditional rendering three ways.
//   Alert      -> returns null to render nothing when there is no message
//   Dashboard  -> && shows a part only when its condition is true
//   the button -> a ternary picks one of two labels
function Alert({ type, message }) {
  if (!message) return null; // render nothing
  return (
    <div className={`alert alert-${type}`} role="status">
      {type === 'error' ? 'ERROR:' : 'OK:'} {message}
    </div>
  );
}

function Dashboard({ user }) {
  return (
    <div>
      {user && <p>Welcome, {user.name}!</p>}
      {!user && <p>Please log in.</p>}
    </div>
  );
}

// useState is only used here to flip the login state so both branches can be seen
function ConditionalDemo() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Alert type="error" message={user ? '' : 'You are not logged in.'} />
      <Alert type="success" message={user ? 'Logged in successfully.' : ''} />
      <div className="card">
        <Dashboard user={user} />
        <button type="button" onClick={() => setUser(user ? null : { name: 'Rahimjon' })}>
          {user ? 'Log out' : 'Log in'}
        </button>
      </div>
    </div>
  );
}

export default ConditionalDemo;
