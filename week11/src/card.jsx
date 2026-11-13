// A reusable card wrapper
function Card({ title, children }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Use it to wrap anything
function App() {
  return (
    <Card title="Student Info">
      <p>Name: Park Jisoo</p>
      <p>Major: Computer Engineering</p>
      <button>Edit Profile</button>
    </Card>
  );
}

ReactDOM.createRoot(document.getElementById('demo-card')).render(<App />);
