// Lecture example: render a list with .map() and a unique, stable key on every item.
const students = [
  { id: 1, name: 'Lee Jungwoo', grade: 'A' },
  { id: 2, name: 'Park Sohee', grade: 'B+' },
  { id: 3, name: 'Kim Minho', grade: 'A-' },
];

function StudentList() {
  return (
    <ul className="plain-list">
      {students.map((student) => (
        <li key={student.id}>
          {student.name} -- {student.grade}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
