import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      {/* Replace with YOUR information: */}
      <StudentProfileCard
        name="Rahimjon Komiljonov"
        studentId="202438377" /* REQUIRED */
        major="Computer Engineering"
        year={3}
        gpa={4.4}
      />
      {/* Add 2 more cards for classmates (use their real names): */}
      <StudentProfileCard name="Asilbek Kholboev" studentId="202438394" major="Computer Engineering" year={3} gpa={4.2} />
      <StudentProfileCard name="Shuhratxon Izzatullayev" studentId="202537358" major="Computer Engineering" year={2} gpa={4.2} />
    </div>
  );
}

export default App;
