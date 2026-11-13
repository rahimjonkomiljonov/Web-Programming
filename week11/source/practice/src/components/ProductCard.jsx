// In-class code challenge: build a ProductCard.
// Props: name (string), price (number, KRW), rating (number, 0 to 5), inStock (boolean).
// Bonus 1: show the rating as "4.5 / 5 stars".
// Bonus 2: show an "Out of Stock" label when inStock is false.
function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  // the stars are only decoration: the words "4.5 / 5 stars" carry the meaning
  return (
    <span className="stars" aria-hidden="true">
      {'★'.repeat(full)}
      {half ? '½' : ''}
      {'☆'.repeat(empty)}
    </span>
  );
}

function ProductCard({ name, price, rating, inStock }) {
  return (
    <div className={inStock ? 'card product-card' : 'card product-card sold-out'}>
      <h3>{name}</h3>
      <p className="price">{price.toLocaleString('ko-KR')}원</p>
      <Stars rating={rating} />
      <p className="rating">{rating} / 5 stars</p>
      <p className={inStock ? 'stock in-stock' : 'stock out-of-stock'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}

export default ProductCard;
