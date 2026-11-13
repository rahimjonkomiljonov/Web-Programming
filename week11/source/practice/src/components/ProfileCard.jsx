// Study guide, exercise 1: a ProfileCard with name, role, email and an optional avatarUrl.
// avatarUrl has a default value, so the card still works when the parent does not pass one.
// (The guide's default pointed at via.placeholder.com, which no longer exists, so the default
// here is a small grey person drawn as an inline SVG.)
const DEFAULT_AVATAR =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">' +
      '<rect width="80" height="80" fill="#ddd3bf"/>' +
      '<circle cx="40" cy="31" r="14" fill="#5c564a"/>' +
      '<path d="M12 80c2-18 14-28 28-28s26 10 28 28z" fill="#5c564a"/></svg>',
  );

function ProfileCard({ name, role, email, avatarUrl = DEFAULT_AVATAR }) {
  return (
    <div className="card profile-card">
      <img className="avatar" src={avatarUrl} alt={name} width="80" height="80" />
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default ProfileCard;
