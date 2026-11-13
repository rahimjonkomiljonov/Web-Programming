function UserCard({ name, role }) {
  const initials = name.split(' ').map(w => w[0]).join('');

  return (
    <div className="card">
      <div className="avatar">{initials}</div>
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>Joined: {new Date().getFullYear()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="user-cards">
      <UserCard name="Ada Lovelace" role="Mathematician" />
      <UserCard name="Grace Hopper" role="Rear Admiral" />
      <UserCard name="Alan Turing" role="Computer Scientist" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('demo-user-cards')).render(<App />);
