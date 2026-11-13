import Greeting from './components/Greeting.jsx';
import StudentCard from './components/StudentCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import NotificationList from './components/NotificationList.jsx';
import Card from './components/Card.jsx';
import ProductCard from './components/ProductCard.jsx';
import StudentList from './components/StudentList.jsx';
import ConditionalDemo from './components/ConditionalDemo.jsx';
import myPhoto from './assets/rahimjon.jpg';

// One small section per exercise. `from` says where in the course material it came from.
function Section({ id, title, from, children, note }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <p className="from">{from}</p>
      <h2 id={`${id}-title`}>{title}</h2>
      {note && <p className="note">{note}</p>}
      <div className="demo">{children}</div>
    </section>
  );
}

function App() {
  return (
    <>
      <header className="page-head">
        <p className="eyebrow">K0126002 · Week 11 · React components and props</p>
        <h1>
          Class <span className="marker">practice</span>
        </h1>
        <p className="lead">
          The exercises from the Monday lab and the Friday class, each one a small component in its own
          file. Every card on this page is a component receiving props from its parent.
        </p>
        <nav className="toc" aria-label="Exercises on this page">
          <a href="#first-component">First component</a>
          <a href="#student-card">Student card</a>
          <a href="#profile-card">Profile card</a>
          <a href="#notifications">Notifications</a>
          <a href="#children">Card with children</a>
          <a href="#product-card">Product card</a>
          <a href="#lists">Lists and keys</a>
          <a href="#conditional">Conditional rendering</a>
        </nav>
      </header>

      <Section
        id="first-component"
        from="Lecture · Part 1"
        title="Your first component"
        note="One function, used three times: each use is an independent copy."
      >
        <Greeting />
        <Greeting />
        <Greeting />
      </Section>

      <Section
        id="student-card"
        from="Monday lab challenge"
        title="StudentCard (fill in the blanks)"
        note="Props: name, id, major. The second card shows my own student ID, as the task asks."
      >
        <div className="cards">
          <StudentCard name="Alice" id="20231234" major="CS" />
          <StudentCard name="Rahimjon Komiljonov" id="202438377" major="Computer Engineering" />
        </div>
      </Section>

      <Section
        id="profile-card"
        from="Study guide · Exercise 1"
        title="ProfileCard with a default prop"
        note="avatarUrl is optional. The first card does not pass it, so the default avatar is used; the second passes its own photo."
      >
        <div className="cards">
          <ProfileCard name="Dr. Toshpulatov" role="Professor" email="muhiddin@gachon.ac.kr" />
          <ProfileCard
            name="Rahimjon Komiljonov"
            role="Computer Engineering student"
            email="rahimjon4753@gmail.com"
            avatarUrl={myPhoto}
          />
        </div>
      </Section>

      <Section
        id="notifications"
        from="Study guide · Exercise 2"
        title="List of notifications"
        note="Rendered with .map() and a key from each id. The icon is chosen with conditional rendering."
      >
        <NotificationList />
      </Section>

      <Section
        id="children"
        from="Study guide · Exercise 3"
        title="Layout with props.children"
        note="The same Card component wraps two completely different pieces of content."
      >
        <Card title="Lecture Topics">
          <ul className="plain-list">
            <li>Components</li>
            <li>Props</li>
          </ul>
        </Card>
        <Card title="Homework">
          <p>Build a student portfolio component</p>
        </Card>
      </Section>

      <Section
        id="product-card"
        from="Friday code challenge"
        title="ProductCard"
        note="Props: name, price (KRW), rating (0 to 5), inStock. Both bonuses are done: “4.5 / 5 stars” and an “Out of Stock” label."
      >
        <div className="cards">
          <ProductCard name="Wireless Earbuds" price={89000} rating={4.5} inStock={true} />
          <ProductCard name="Mechanical Keyboard" price={129000} rating={4} inStock={true} />
          <ProductCard name="USB-C Hub" price={45000} rating={3.5} inStock={false} />
        </div>
      </Section>

      <Section
        id="lists"
        from="Lecture · Part 4"
        title="Rendering a list with keys"
        note="Every item has a unique, stable key (its id), not its position in the array."
      >
        <StudentList />
      </Section>

      <Section
        id="conditional"
        from="Lecture · Part 4"
        title="Conditional rendering"
        note="A component can return null, && shows a part only when something is true, and a ternary picks between two labels."
      >
        <ConditionalDemo />
      </Section>
    </>
  );
}

export default App;
