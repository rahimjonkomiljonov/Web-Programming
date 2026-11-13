// Monday lab challenge: "fill in the blanks"
//   function StudentCard( ____ ) { ... <h2>{____}</h2> <p>ID: {____}</p> <p>Major: {____}</p> ... }
// It must work like this:  <StudentCard name="Alice" id="20231234" major="CS" />
function StudentCard({ name, id, major }) {
  return (
    <div className="card student-card">
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Major: {major}</p>
    </div>
  );
}

export default StudentCard;
