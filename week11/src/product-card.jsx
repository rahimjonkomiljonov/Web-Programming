// Code challenge: a ProductCard built from small, single-purpose parts.

// 89000 -> "89,000원"
function PriceTag({ price }) {
  return <p className="price">{price.toLocaleString('ko-KR')}원</p>;
}

// 4.5 -> "★★★★½" plus the bonus text "4.5 / 5 stars"
function StarRating({ rating }) {
  const value = Math.min(5, Math.max(0, rating)); // keep it between 0 and 5
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="rating">
      <span className="stars" aria-hidden="true">
        {'★'.repeat(full)}{half && '½'}{'☆'.repeat(empty)}
      </span>
      <p>{value} / 5 stars</p>
    </div>
  );
}

// Bonus 2: "Out of Stock" when !inStock
function StockBadge({ inStock }) {
  return inStock
    ? <p className="stock in">In Stock</p>
    : <p className="stock out">Out of Stock</p>;
}

function ProductCard({ name = 'Unnamed product', price = 0, rating = 0, inStock = false }) {
  return (
    <article className={'product-card' + (inStock ? '' : ' sold-out')}>
      <h3>{name}</h3>
      <PriceTag price={price} />
      <StarRating rating={rating} />
      <StockBadge inStock={inStock} />
    </article>
  );
}

function App() {
  return (
    <div className="products">
      {/* the expected usage from the slide */}
      <ProductCard
        name="Wireless Earbuds"
        price={89000}
        rating={4.5}
        inStock={true}
      />
      <ProductCard name="Mechanical Keyboard" price={129000} rating={4} inStock={false} />
      {/* no props at all: every default kicks in */}
      <ProductCard />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('demo-product-card')).render(<App />);
