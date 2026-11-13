// Study guide, exercise 3: a reusable wrapper. It takes a title prop and shows whatever
// is placed between <Card> and </Card> through props.children.
function Card({ title, children }) {
  return (
    <section className="card wrapper-card">
      <h3 className="card-title">{title}</h3>
      <div className="card-body">{children}</div>
    </section>
  );
}

export default Card;
