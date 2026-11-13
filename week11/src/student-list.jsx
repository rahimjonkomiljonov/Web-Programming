const students = [
  { id: 1, name: 'Lee Jungwoo', grade: 'A'  },
  { id: 2, name: 'Park Sohee',  grade: 'B+' },
  { id: 3, name: 'Kim Minho',   grade: 'A-' },
];

function StudentList() {
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          {student.name} -- {student.grade}
        </li>
      ))}
    </ul>
  );
}

ReactDOM.createRoot(document.getElementById('demo-student-list')).render(<StudentList />);
