// Study guide, exercise 2: render a list of notifications with conditional icons.
//   success -> check mark, warning -> warning sign, anything else -> info.
// Each item gets a stable key from its id (never the array index).
const notifications = [
  { id: 1, type: 'success', message: 'Profile updated successfully' },
  { id: 2, type: 'warning', message: 'Password expires in 3 days' },
  { id: 3, type: 'info', message: 'New lecture materials available' },
];

function NotificationItem({ type, message }) {
  const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
  return (
    <li className={`notification notification-${type}`}>
      <span aria-hidden="true">{icon}</span>
      <span className="sr-only">{type}: </span>
      {message}
    </li>
  );
}

function NotificationList() {
  return (
    <ul className="notifications">
      {notifications.map((n) => (
        <NotificationItem key={n.id} type={n.type} message={n.message} />
      ))}
    </ul>
  );
}

export default NotificationList;
