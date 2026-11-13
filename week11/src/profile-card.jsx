// Parent passes props
function App() {
  return (
    <ProfileCard
      name="Kim Minho"
      role="Frontend Developer"
      followers={1240}
      isVerified={true}
    />
  );
}

// Child receives and uses them
function ProfileCard({ name, role, followers, isVerified }) {
  return (
    <div className="profile">
      <h2>{name} {isVerified && '[Verified]'}</h2>
      <p>{role}</p>
      <p>{followers.toLocaleString()} followers</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('demo-profile-card')).render(<App />);
