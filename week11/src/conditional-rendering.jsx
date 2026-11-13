function Alert({ type, message }) {
  if (!message) return null; // render nothing

  return (
    <div className={"alert alert-" + type}>
      {type === 'error' ? 'ERROR:' : 'OK:'} {message}
    </div>
  );
}

function Dashboard({ user, onLogin, onLogout }) {
  return (
    <div className="dashboard">
      {user && <p>Welcome, {user.name}!</p>}
      {!user && <p>Please log in.</p>}
      {user
        ? <button className="secondary" onClick={onLogout}>Log out</button>
        : <button onClick={onLogin}>Log in</button>}
    </div>
  );
}

// The button needs a value that changes, so App keeps `user` in state
// (useState is Monday's topic; here it only flips user between null and an object).
function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div>
      <Alert
        type={user ? 'success' : 'error'}
        message={user ? 'Logged in as ' + user.name + '.' : 'You are not logged in.'}
      />
      <Alert type="error" message="" /> {/* empty message: renders nothing */}
      <Dashboard
        user={user}
        onLogin={() => setUser({ name: 'Jisoo' })}
        onLogout={() => setUser(null)}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('demo-conditional-rendering')).render(<App />);
