function UserCard({ name, role, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
}

export default UserCard;